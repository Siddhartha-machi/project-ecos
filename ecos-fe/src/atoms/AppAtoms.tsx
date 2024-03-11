import * as React from "react";

import {
  Typography,
  Tooltip,
  Button,
  IconButton,
  styled,
  TooltipProps,
  InputBase,
} from "@mui/material";
import { Box } from "@mui/system";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import HideSourceRoundedIcon from "@mui/icons-material/HideSourceRounded";
import SettingsBackupRestoreRoundedIcon from "@mui/icons-material/SettingsBackupRestoreRounded";
import ExtensionRoundedIcon from "@mui/icons-material/ExtensionRounded";

import {
  appChipProps,
  editableTypoProps,
  extensionActionProps,
  listToolTipItemType,
  localHeaderProps,
  responsiveBox,
  truncateTypoTypes,
} from "../typeDefs/atom";
import {
  chip,
  editableTypo,
  listToolTip,
  localHeader,
  toolTip,
} from "../styles/atom.s";
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
  return <Typography sx={listToolTip.text}>{data}</Typography>;
};

export const MenuListToolTip = (props: listToolTipItemType) => {
  const { title, option, data } = props;

  const admin = useAppSelector(
    (store) => store.user.currentUser.role === ROLES.admin
  );

  if (data.length < 1) {
    return (
      <Box sx={listToolTip.listContainer}>
        <Box sx={listToolTip.titleContainer}>
          <Typography sx={toolTip.title}>{title}</Typography>
        </Box>
        <Box sx={listToolTip.emptyContent}>
          <Typography sx={listToolTip.fallbackMessage}>
            Nothing here!
          </Typography>
          {option && (
            <Button
              endIcon={option.Icon && <option.Icon />}
              onClick={option.action}
              sx={listToolTip.addButton}
            >
              {option.label}
            </Button>
          )}
        </Box>
      </Box>
    );
  }
  return (
    <Box sx={listToolTip.listContainer}>
      <Box sx={listToolTip.titleContainer}>
        <Typography sx={toolTip.title}>{title}</Typography>
      </Box>
      <Box sx={listToolTip.content}>
        {data.map((item, index: number) => (
          <Box key={`list-tip-${index}`} sx={listToolTip.listItemContainer}>
            {item.image ? (
              <Box component={"img"} sx={listToolTip.img} src={item.image} />
            ) : (
              <ExtensionRoundedIcon sx={listToolTip.fallBackIcon} />
            )}
            <Typography sx={listToolTip.title}>{item.title}</Typography>
            <ExtensionActions privileged={admin} data={item} />
          </Box>
        ))}
        {option && (
          <Button
            startIcon={option.Icon && <option.Icon />}
            onClick={option.action}
            sx={listToolTip.addButton}
          >
            {option.label}
          </Button>
        )}
      </Box>
    </Box>
  );
};

export const ExtensionActions = (props: extensionActionProps) => {
  const { privileged, data } = props;

  const dispatch = useAppDispatch();

  const enableDisableHandler = React.useCallback(() => {
    dispatch(toggleExtension(data.id));
  }, [dispatch, data.id]);

  const addRemoveHandler = React.useCallback(() => {
    dispatch(toggleFromCollection(data.id));
  }, [dispatch, data.id]);

  return (
    <Box sx={listToolTip.actionsContainer}>
      {!data.meta.disabled &&
        (!data.meta.added ? (
          <AppToolTip title={"Add extension to my space"} placement="bottom">
            <IconButton
              onClick={addRemoveHandler}
              sx={listToolTip.actionButton}
            >
              <AddRoundedIcon sx={{ color: "primary.dark" }} />
            </IconButton>
          </AppToolTip>
        ) : (
          <AppToolTip
            title={"Remove extension from my space"}
            placement="bottom"
          >
            <IconButton
              onClick={addRemoveHandler}
              sx={listToolTip.actionButton}
            >
              <RemoveRoundedIcon sx={{ color: "error.dark" }} />
            </IconButton>
          </AppToolTip>
        ))}
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
        {...rest}
        disableInteractive={basic ? true : false}
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
        <AppToolTip title={pageCaption} placement={"bottom"}>
          <Typography sx={localHeader.pageTitle}>{pageTitle}</Typography>
        </AppToolTip>
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

export const TruncateTypography = (props: truncateTypoTypes) => {
  const { content, styles, noOfLines } = props;
  return (
    <Box
      sx={{
        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "-webkit-box",
        WebkitLineClamp: noOfLines || "2",
        WebkitBoxOrient: "vertical",
      }}
    >
      <Typography noWrap={noOfLines ? false : true} sx={styles}>
        {content}
      </Typography>
    </Box>
  );
};

export const EditableTypography = (props: editableTypoProps) => {
  const { value, valueType, label, enableEditing, action } = props;
  const { Icon } = props;
  return (
    <Box sx={editableTypo.container}>
      <Typography sx={editableTypo.label}>
        {Icon && <Icon sx={{ fontSize: "15px" }} />}
        {label}
      </Typography>
      <Box sx={editableTypo.fieldContainer}>
        {enableEditing ? (
          <InputBase
            fullWidth
            value={value}
            type={valueType}
            sx={editableTypo.textField}
            onChange={(e) => action(e.target.value)}
          />
        ) : (
          <TruncateTypography content={value} styles={editableTypo.value} />
        )}
      </Box>
    </Box>
  );
};

export const RBox = (props: responsiveBox) => {
  const { sx, children, part, breakPoint } = props;
  return (
    <Box
      sx={{
        ...sx,
        display: { xs: "none", [breakPoint]: "flex" },
        width: { [breakPoint]: `calc(${100 / (part || 1)}%)` },
      }}
    >
      {children}
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
  "&:disabled": {
    color: theme.inactive,
  },
});
