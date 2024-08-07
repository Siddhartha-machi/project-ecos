import * as React from "react";

import {
  Typography,
  Tooltip,
  IconButton,
  TooltipProps,
  InputBase,
  Button,
  Paper,
  Chip,
  Dialog,
  PaperProps,
  DialogContent,
  DialogTitle,
  DialogActions,
  SxProps,
  IconButtonProps,
} from "@mui/material";
import { Box } from "@mui/system";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import HideSourceRoundedIcon from "@mui/icons-material/HideSourceRounded";
import SettingsBackupRestoreRoundedIcon from "@mui/icons-material/SettingsBackupRestoreRounded";
import ExtensionRoundedIcon from "@mui/icons-material/ExtensionRounded";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import CloseIcon from "@mui/icons-material/Close";
import DataSaverOnRoundedIcon from "@mui/icons-material/DataSaverOnRounded";

import {
  AppDialogProps,
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
  dialog,
  editableTypo,
  listToolTip,
  localHeader,
  toolTip,
} from "../styles/atom.s";
import ErrorContainer from "../layout/ErrorContainer";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { ROLES } from "../global/constants";
import {
  toggleExtension,
  toggleFromCollection,
} from "../redux/slices/extensionSlice";
import Draggable from "react-draggable";
import { voidFun } from "../typeDefs/helpers";
import theme from "../global/theme";

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
    <Paper sx={localHeader.container}>
      <Box sx={localHeader.titleWrapper}>
        <AppToolTip title={pageCaption} placement={"bottom"}>
          <Typography sx={localHeader.pageTitle}>{pageTitle}</Typography>
        </AppToolTip>
        <Typography sx={localHeader.pageCaption}>{pageCaption}</Typography>
      </Box>
      <Box sx={localHeader.actionsWrapper}>
        {options?.map((action, index) => (
          <Button
            variant="outlined"
            startIcon={<action.Icon />}
            key={`local-action-${index}`}
          >
            {action.label}
          </Button>
        ))}
      </Box>
    </Paper>
  );
};

export const AppChips = (props: appChipProps) => {
  const [showMore, setShowMore] = React.useState(false);
  const [activeCount, setActiveCount] = React.useState(0);

  const parentRef = React.useRef<HTMLDivElement | null>(null);
  const { data } = props;
  const length = data.length;

  const setChipsState = React.useCallback(() => {
    let childrenWidth = 0,
      count = 0;
    if (parentRef && parentRef.current) {
      const parent = parentRef.current;
      const containerWidth = parent.offsetWidth;

      for (const child of parent.children) {
        childrenWidth += (child as HTMLElement).offsetWidth;
        count += 1;
        if (childrenWidth >= containerWidth && count < length) {
          count -= 1;
          break;
        }
      }
    }
    if (count < length - 1) {
      setShowMore(true);
    }
    setActiveCount(count);
    // console.log({ childrenWidth, count, showMore: count < length - 1 });
  }, [length]);

  React.useEffect(() => {
    setChipsState();
  }, [setChipsState]);

  return (
    <Box sx={chip.container} ref={parentRef}>
      {data.slice(0, activeCount + 1).map((item, index) => (
        <Chip label={item} key={`chip-${index}`} />
      ))}
      {showMore && (
        <Chip
          label={`+ ${length - activeCount - 1} more`}
          key={"+chips-item"}
        />
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
            size="small"
            value={value}
            type={valueType}
            onChange={(e) => action(e.target.value)}
          />
        ) : (
          <TruncateTypography content={value} styles={editableTypo.value} />
        )}
      </Box>
    </Box>
  );
};

export const TTIconButton = (props: IconButtonProps) => {
  const { title, ...rest } = props;
  const _Button = <IconButton {...rest} />;
  if (rest.disabled) {
    return _Button;
  }
  return <AppToolTip title={title} placement="bottom" children={_Button} />;
};

export const AppDialog = (props: AppDialogProps) => {
  const [fullScreen, setFullScreen] = React.useState(false);
  const [styles, setStyles] = React.useState<SxProps>({
    cursor: "move",
    position: "initial",
  });

  const { open, enableResizing, children, closeHandler } = props;
  const { title, actions } = props;

  const minimizeHandler = React.useCallback(() => setFullScreen(false), []);

  const miximizeHandler = React.useCallback(() => {
    setFullScreen(true);
    setStyles({
      cursor: "default",
      position: "absolute",
    });
  }, []);

  const actionHandlerWrapper = async (fn: voidFun) => {
    await fn();
    closeHandler();
  };

  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      PaperComponent={fullScreen ? _DialogWrap : _DraggableBox}
      hideBackdrop
      disableEnforceFocus={!fullScreen}
      sx={styles}
    >
      <Box sx={dialog.actionContainer}>
        <TTIconButton
          title="Close"
          onClick={closeHandler}
          sx={dialog.actionButton({ value: theme.red })}
        >
          <CloseIcon sx={dialog.icon} />
        </TTIconButton>
        <TTIconButton
          title="Save to portal for later access"
          onClick={() => console.warn("save to portal handler not configured")}
          sx={dialog.actionButton({ value: theme.primaryBlue })}
        >
          <DataSaverOnRoundedIcon sx={dialog.icon} />
        </TTIconButton>
        {enableResizing && (
          <React.Fragment>
            <TTIconButton
              title="Restore to original"
              disabled={!fullScreen}
              onClick={minimizeHandler}
              sx={dialog.actionButton({ value: theme.yellow })}
            >
              <CloseFullscreenIcon sx={dialog.icon} />
            </TTIconButton>
            <TTIconButton
              title="Maximize"
              onClick={miximizeHandler}
              disabled={fullScreen}
              sx={dialog.actionButton({ value: theme.green })}
            >
              <OpenInFullIcon sx={dialog.icon} />
            </TTIconButton>
          </React.Fragment>
        )}
      </Box>

      <DialogTitle sx={dialog.title}>{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions sx={dialog.footer}>
        {actions.map((action, index) => (
          <Button
            key={`dialog-action-btn-${index}`}
            onClick={() => actionHandlerWrapper(action.handler)}
          >
            {action.label}
          </Button>
        ))}
      </DialogActions>
    </Dialog>
  );
};

const _DialogWrap = (props: PaperProps) => (
  <Paper {...props} sx={{ borderRadius: "30px" }} />
);

const _DraggableBox = (props: PaperProps) => {
  return (
    <Draggable cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  );
};

// work in progress components
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
