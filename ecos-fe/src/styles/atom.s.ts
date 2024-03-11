import { APP_CONSTATNTS } from "../global/constants";
import { createStyles } from "../global/helpers";
import theme from "../global/theme";

export const toolTip = createStyles({
  container: {
    bgcolor: theme.main0,
    border: theme.borderDark,
    borderRadius: APP_CONSTATNTS.borderRadius,
    p: 0,
    backdropFilter: "blur(5px)",
    textAlign: "center",
  },
  title: {
    fontSize: "14px",
    fontWeight: "bold",
  },
});

export const localHeader = createStyles({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    py: "8px",
    px: 1,
    gap: 1,
    borderBottom: theme.border,
  },
  titleWrapper: {
    display: "flex",
    flexDirection: "column",
  },
  pageTitle: {
    fontSize: "18px",
    fontWeight: 900,
    letterSpacing: 1,
    color: theme.white9,
    mr: "auto",
  },
  pageCaption: {
    fontSize: "11px",
    letterSpacing: 1,
    color: theme.white5,
  },
  actionsWrapper: {
    display: "flex",
    gap: "12px",
  },
  button: {
    textTransform: "none",
    border: theme.borderLight,
    borderRadius: APP_CONSTATNTS.borderRadius,
    px: 2,
    fontWeight: 600,
    color: theme.white8,
    fontSize: "13px",
  },
});

export const chip = createStyles({
  item: {
    borderRadius: APP_CONSTATNTS.borderRadius,
    boxShadow: `0 0 6px 0 ${theme.white1}`,
    border: `1px solid ${theme.white3}`,
    color: theme.white8,
    bgcolor: theme.white1,
    p: "3px 8px",
    fontSize: "9px",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    gap: 0.8,
  },
});

export const listToolTip = createStyles({
  listContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    minWidth: "250px",
    maxHeight: "300px",
    overflow: "scroll",
  },
  actionsContainer: {
    display: "flex",
    alignItems: "center",
    gap: 1,
  },
  actionButton: {
    color: theme.white10,
    p: 0,
    "&:Hover": {
      bgcolor: "transparent",
    },
  },
  img: {
    borderRadius: APP_CONSTATNTS.borderRadius,
    width: "30px",
    height: "30px",
  },
  fallBackIcon: {
    fontSize: "20px",
    p: "6px",
    borderRadius: APP_CONSTATNTS.borderRadius,
    border: theme.border,
    color: theme.white3,
  },
  title: {
    fontSize: "16px",
    fontWeight: "bold",
    letterSpacing: 1,
  },
  titleContainer: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    py: 1,
    bgcolor: theme.main2,
    borderRadius: APP_CONSTATNTS.borderRadius,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    position: "sticky",
    top: 0,
    backdropFilter: "blur(3px)",
    zIndex: 2000,
  },
  text: {
    p: "3px 12px",
    fontSize: "12px",
    fontWeight: "bold",
  },
  fallbackMessage: {
    fontSize: "12px",
    fontWeight: "bold",
    color: theme.white8,
    my: 2,
  },
  listItemContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    p: "6px 10px",
    mx: 1.5,
    border: "1px solid transparent",
    borderRadius: APP_CONSTATNTS.borderRadius,
    "&:Hover": {
      bgcolor: theme.mainBackground,
      border: theme.borderDark,
      boxShadow: `0 0 16px 0 ${theme.black3}`,
    },
  },
  content: {
    display: "flex",
    flexDirection: "column",
    gap: 1,
    my: 1.5,
  },
  emptyContent: {
    display: "flex",
    flexDirection: "column",
    my: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  addButton: {
    fontSize: "12px",
    textTransform: "none",
    fontWeight: "bold",
    p: 0,
    mb: 1,
    "&:Hover": {
      color: theme.white10,
      bgcolor: "transparent",
    },
  },
});

export const editableTypo = createStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 1,
    p: 0.5,
  },
  label: {
    display: "flex",
    alignItems: "center",
    fontSize: "12px",
    gap: 1,
    color: theme.white6,
    fontWeight: "bold",
  },
  value: {
    fontSize: "14px",
    color: theme.white10,
    fontWeight: "bold",
    overflow: "hidden",
  },
  fieldContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textField: {
    color: "#fff",
    borderRadius: APP_CONSTATNTS.borderRadius,
    border: theme.border,
    px: 1.5,
    py: 0.5,
    fontSize: "14px",
    "&.Mui-focused": {
      boxShadow: `0 0 5px ${theme.blue}`,
    },
    "&.Mui-error": {
      border: "1px solid transparent",
      borderColor: "error.light",
      boxShadow: "0 0 10px 0 red",
    },
  },
});
