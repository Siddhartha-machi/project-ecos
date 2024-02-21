import { APP_CONSTATNTS } from "../global/constants";
import { createStyles } from "../global/helpers";
import theme from "../global/theme";

export const toolTip = createStyles({
  container: {
    bgcolor: theme.black5,
    boxShadow: `0 0 15px 0 ${theme.white1}`,
    border: `1px solid ${theme.white5}`,
    borderRadius: APP_CONSTATNTS.borderRadius,
    p: 0,
    backdropFilter: "blur(3px)",
  },
  listContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    minWidth: "250px",
    maxHeight: "300px",
    overflow: "scroll",
  },
  item: {
    textTransform: "none",
    fontWeight: "bold",
    color: theme.white10,
    "&:Hover": {
      bgcolor: "transparent",
    },
    zIndex: 0,
  },
  title: {
    fontSize: "14px",
    fontWeight: "bold",
  },
  titleContainer: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    py: 1,
    bgcolor: theme.white5,
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
    color: theme.white8,
    mt: 2,
  },
  listItemContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 1,
    p: "6px 10px",
    border: "1px solid transparent",
    borderRadius: APP_CONSTATNTS.borderRadius,
    "&:Hover": {
      border: "1px solid #fff",
      boxShadow: `0 0 6px 0 ${theme.black1}`,
    },
  },
  content: {
    display: "flex",
    flexDirection: "column",
    gap: 1,
    my: 1,
    mx: 1.5,
  },
  emptyContent: {
    display: "flex",
    flexDirection: "column",
    gap: 1,
    my: 1,
    alignItems: "center",
  },
  addButton: {
    textTransform: "none",
    fontWeight: "bold",
    my: 1,
    "&:Hover": {
      color: theme.white10,
      bgcolor: "transparent",
    },
  },
});

export const localHeader = createStyles({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    py: 0.1,
    gap: 1,
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
  },
  pageCaption: {
    fontSize: "12px",
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
    boxShadow: `0 0 6px 0 ${theme.white3}`,
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
    boxShadow: `0 0 6px 0 ${theme.black5}`,
    border: `1px solid ${theme.black10}`,
    color: theme.white3,
  },
  title: {
    fontSize: "16px",
    fontWeight: "bold",
    letterSpacing: 1,
  },
});
