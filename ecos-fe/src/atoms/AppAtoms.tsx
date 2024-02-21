import * as React from "react";

import {
  Typography,
  Tooltip,
  Button,
  IconButton,
  styled,
  TooltipProps,
} from "@mui/material";
import { Box } from "@mui/system";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import HideSourceRoundedIcon from "@mui/icons-material/HideSourceRounded";
import SettingsBackupRestoreRoundedIcon from "@mui/icons-material/SettingsBackupRestoreRounded";
import ExtensionRoundedIcon from "@mui/icons-material/ExtensionRounded";

import {
  appChipProps,
  extensionActionProps,
  listToolTipItemType,
  localHeaderProps,
  messageToolTipProps,
} from "../typeDefs/atom";
import { chip, listToolTip, localHeader, toolTip } from "../styles/atom";
import ErrorContainer from "../layout/ErrorContainer";
import theme from "../global/theme";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { ROLES } from "../global/constants";
import {
  toggleExtension,
  toggleFromCollection,
} from "../redux/slices/extensionSlice";

// Custom components
const SimpleToolTip = ({ data }: { data: string }) => {
  return <Typography sx={toolTip.text}>{data}</Typography>;
};

export const MenuListToolTip = (props: listToolTipItemType) => {
  const { title, option, data } = props;

  const admin = useAppSelector(
    (store) => store.user.currentUser.role === ROLES.admin
  );

  if (data.length < 1) {
    return (
      <Box sx={toolTip.listContainer}>
        <Box sx={toolTip.titleContainer}>
          <Typography sx={toolTip.title}>{title}</Typography>
        </Box>
        <Box sx={toolTip.emptyContent}>
          <Typography sx={toolTip.fallbackMessage}>Nothing here!</Typography>
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
        {data.map((item, index: number) => (
          <Box key={`list-tip-${index}`} sx={toolTip.listItemContainer}>
            {item.image ? (
              <Box component={"img"} sx={listToolTip.img} src={item.image} />
            ) : (
              <ExtensionRoundedIcon sx={listToolTip.fallBackIcon} />
            )}
            <Typography sx={listToolTip.title}>{item.title}</Typography>
            <ExtensionActions
              privileged={admin}
              data={item}
              itemIndex={index}
            />
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

export const ExtensionActions = (props: extensionActionProps) => {
  const { privileged, data, itemIndex } = props;

  const dispatch = useAppDispatch();

  const enableDisableHandler = React.useCallback(() => {
    dispatch(toggleExtension(itemIndex));
  }, [dispatch, itemIndex]);

  const addRemoveHandler = React.useCallback(() => {
    dispatch(toggleFromCollection(itemIndex));
  }, [dispatch, itemIndex]);

  return (
    <Box sx={listToolTip.actionsContainer}>
      {!data.meta.added ? (
        <AppToolTip title={"Add extension to my space"} placement="bottom">
          <IconButton onClick={addRemoveHandler} sx={listToolTip.actionButton}>
            <AddRoundedIcon sx={{ color: "primary.dark" }} />
          </IconButton>
        </AppToolTip>
      ) : (
        <AppToolTip title={"Remove extension from my space"} placement="bottom">
          <IconButton onClick={addRemoveHandler} sx={listToolTip.actionButton}>
            <RemoveRoundedIcon sx={{ color: "error.dark" }} />
          </IconButton>
        </AppToolTip>
      )}
      {privileged &&
        (data.meta.disabled ? (
          <AppToolTip title={`Enable extension in ECOS`} placement="bottom">
            <IconButton
              onClick={enableDisableHandler}
              sx={listToolTip.actionButton}
            >
              <SettingsBackupRestoreRoundedIcon
                sx={{ color: "success.dark" }}
              />
            </IconButton>
          </AppToolTip>
        ) : (
          <AppToolTip title={`Disable extension from ECOS`} placement="bottom">
            <IconButton
              onClick={enableDisableHandler}
              sx={listToolTip.actionButton}
            >
              <HideSourceRoundedIcon sx={{ color: "error.dark" }} />
            </IconButton>
          </AppToolTip>
        ))}
    </Box>
  );
};

export const MessageToolTip = (props: messageToolTipProps) => {
  const { Icon, data } = props;

  return (
    <Typography>
      {Icon && <Icon />} {data}
    </Typography>
  );
};

export const AppToolTip = (props: TooltipProps) => {
  const { children, title, placement, ...rest } = props;

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const basic = React.useMemo(() => {
    return typeof title === "string";
  }, [title]);

  return (
    <ErrorContainer>
      <Tooltip
        open={basic ? undefined : open}
        onOpen={basic ? undefined : handleOpen}
        PopperProps={{
          onMouseLeave: basic ? undefined : handleClose,
        }}
        componentsProps={{
          tooltip: {
            sx: toolTip.container,
          },
        }}
        placement={placement || "right"}
        arrow
        disableInteractive={basic ? true : false}
        {...rest}
        title={
          <ErrorContainer overrideErrorMessage="Can't load tooltip">
            {basic ? <SimpleToolTip data={title as string} /> : title}
          </ErrorContainer>
        }
      >
        {children}
      </Tooltip>
    </ErrorContainer>
  );
};

export const LocalHeader = (props: localHeaderProps) => {
  const { pageTitle, pageCaption, options } = props;
  return (
    <Box sx={localHeader.container}>
      <Box sx={localHeader.titleWrapper}>
        <Typography sx={localHeader.pageTitle}>{pageTitle}</Typography>
        <Typography sx={localHeader.pageCaption}>{pageCaption}</Typography>
      </Box>
      <Box sx={localHeader.actionsWrapper}>
        {options?.map((action, index) => (
          <Button
            sx={{ ...localHeader.button }}
            startIcon={<action.Icon />}
            key={`local-action-${index}`}
          >
            {action.label}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export const AppChips = (props: appChipProps) => {
  const { data, maxChips } = props;
  const length = data.length;
  return (
    <Box sx={chip.container}>
      {data.slice(0, maxChips).map((item, index) => (
        <Typography key={`chip-${index}`} sx={chip.item}>
          {item}
        </Typography>
      ))}
      {maxChips && length > maxChips && (
        <Typography key={"+chips-item"} sx={chip.item}>
          {`+ ${length - maxChips} more`}
        </Typography>
      )}
    </Box>
  );
};

// styled components
export const AppButton = styled(Button)({
  textTransform: "none",
  fontWeight: "bold",
  color: theme.white8,
  "&:Hover": {
    backgroundColor: "transparent",
    color: theme.white10,
  },
});
