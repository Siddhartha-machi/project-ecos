import * as React from "react";

import { Typography, Tooltip, Button, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router";

import { sidebar } from "../styles/layout";
import {
  appToolTipProps,
  dynamicTooltipBindType,
  listToolTipItemType,
  messageToolTipProps,
  sidebarItemType,
} from "../typeDefs/atom";
import { toolTip } from "../styles/atom";
import ErrorContainer from "../layout/ErrorContainer";

const ListToolTipItem = (props: listToolTipItemType) => {
  const { title, data, option, actions } = props;
  const navigate = useNavigate();

  if (data.length < 1) {
    return (
      <Box sx={toolTip.listContainer}>
        <Box sx={toolTip.titleContainer}>
          <Typography sx={toolTip.title}>{title}</Typography>
        </Box>
        <Box sx={toolTip.content}>
          <Typography sx={toolTip.fallbackMessage}>
            Nothing here! add an app now
          </Typography>
          {option && (
            <Button
              startIcon={option.Icon && <option.Icon />}
              onClick={option.action}
              sx={toolTip.addButton}
            >
              {option.label}
            </Button>
          )}
        </Box>
      </Box>
    );
  }
  return (
    <Box sx={toolTip.listContainer}>
      <Box sx={toolTip.titleContainer}>
        <Typography sx={toolTip.title}>{title}</Typography>
      </Box>
      <Box sx={toolTip.content}>
        {data.map((item: sidebarItemType, index: number) => (
          <Box key={`list-tip-${index}`} sx={toolTip.listItemContainer}>
            <Button
              fullWidth
              startIcon={<item.Icon />}
              sx={toolTip.item}
              onClick={() => navigate(item.path)}
            >
              <Typography sx={sidebar.sidbarItemText}>{item.label}</Typography>
            </Button>
            {actions.map((action, actionIndex) => (
              <AppToolTip
                key={`action-${index}-${actionIndex}`}
                variant="simple"
                placement="bottom"
                disableInteractive={true}
                title={action.toolTip}
              >
                <IconButton
                  onClick={action.handler}
                  sx={{ color: action.color }}
                >
                  <action.Icon sx={{ fontSize: "18px" }} />
                </IconButton>
              </AppToolTip>
            ))}
          </Box>
        ))}
        {option && (
          <Button
            startIcon={option.Icon && <option.Icon />}
            onClick={option.action}
            sx={toolTip.addButton}
          >
            {option.label}
          </Button>
        )}
      </Box>
    </Box>
  );
};

const SimpleToolTip = ({ data }: { data: string }) => {
  return <Typography sx={toolTip.text}>{data}</Typography>;
};

const MessageToolTip = (props: messageToolTipProps) => {
  const { Icon, data } = props;

  return (
    <Typography>
      {Icon && <Icon />} {data}
    </Typography>
  );
};

export const MenuToolTip = () => {
  return;
};

export const AppToolTip = (props: appToolTipProps) => {
  const { children, title, variant, placement, ...rest } = props;

  const { Tcomponent, tProps } = React.useMemo(() => {
    const config: dynamicTooltipBindType = {
      Tcomponent: SimpleToolTip,
      tProps: title as listToolTipItemType | messageToolTipProps,
    };
    switch (variant) {
      case "list":
        config.Tcomponent = ListToolTipItem;
        break;
      case "message":
        config.Tcomponent = MessageToolTip;
        break;
      default:
        config.Tcomponent = SimpleToolTip;
        config.tProps = { data: title as string };
        break;
    }
    return config;
  }, [variant, title]);

  return (
    <ErrorContainer>
      <Tooltip
        componentsProps={{
          tooltip: {
            sx: toolTip.container,
          },
        }}
        placement={placement || "right"}
        arrow
        {...rest}
        title={
          <ErrorContainer overrideErrorMessage="Can't load tooltip">
            <Tcomponent {...tProps} />
          </ErrorContainer>
        }
      >
        {children}
      </Tooltip>
    </ErrorContainer>
  );
};
