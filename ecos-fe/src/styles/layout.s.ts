import { APP_CONSTATNTS } from "../global/constants";
import { createStyles } from "../global/helpers";
import theme from "../global/theme";

const CONTAINER_MARGIN = 12;
const CONTENT_WIDTH = 2 + APP_CONSTATNTS.sidebarWidth;

export const layout = createStyles({
  container: {
    display: "flex",
    flex: 1,
    position: "absolute",
    inset: CONTAINER_MARGIN,
    width: `calc(100% - ${CONTAINER_MARGIN * 2}px)`,
    gap: 2,
  },

  content: {
    display: "flex",
    position: "relative",
    flexDirection: "column",
    flex: 1,
    width: `calc(100% - ${CONTENT_WIDTH}px)`,
  },
  stickyHeader: {
    display: "flex",
    position: "sticky",
    top: 0,
    gap: 1.2,
    borderBottom: theme.borderDark,
    borderTopRightRadius: theme.borderRadius,
    color: "#fff",
    justifyContent: "space-between",
    alignItems: "center",
    pr: 1.2,
  },
  globalSearch: {
    flex: 1,
    color: theme.white6,
    py: 0.8,
    pl: 1.2,
    m: "8px 0px 8px 8px",
    fontSize: "16px",
    fontWeight: "bold",
    borderRadius: theme.borderRadius,
    "&:hover": {
      bgcolor: theme.mainBackground,
    },
    "&.Mui-focused": {
      bgcolor: theme.mainBackground,
    },
  },
  notifications: {
    color: "#fff",
  },
  notifyCount: {
    "& .MuiBadge-badge": {
      fontSize: 9,
      height: 15,
      minWidth: 15,
    },
  },
  username: {
    fontSize: "13px",
    fontWeight: 600,
    color: theme.blue,
  },
  avatar: {
    width: 35,
    height: 35,
    p: 0,
    border: theme.border,
    "&:Hover": {
      cursor: "pointer",
    },
  },
  userDetail: {
    display: "flex",
    flexDirection: "column",
    ml: 0.5,
  },
  roleWrapper: {
    display: "flex",
    ml: "auto",
    alignItems: "center",
    gap: 0.8,
  },
  inlineRole: {
    display: "flex",
    fontSize: "10px",
    fontWeight: "bold",
  },
  innerContent: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    width: "calc(100%)",
    overflow: "scroll",
  },

  // backdrop styles
  backdrop: {
    borderRadius: theme.borderRadius,
    backgroundColor: theme.black6,
    zIndex: 4000,
  },
});

export const sidebar = createStyles({
  sideBar: {
    display: "flex",
    flexDirection: "column",
    width: APP_CONSTATNTS.sidebarWidth,
    pb: 1.3,
    gap: "12px",
    mx: "auto",
    justifyContent: "center",
  },
  iconsContainer: {
    display: "flex",
    flexDirection: "column",
    borderRadius: theme.borderRadius,
    p: 1.2,
    gap: 1.5,
  },
  logo: {
    // position: "absolute",
    top: 0,
    display: "flex",
    flexDirection: "column",
    borderRadius: theme.borderRadius,
    border: theme.borderDark,
    // p: "15px",
    gap: 0.6,
    "&:Hover": {
      color: theme.white10,
    },
  },
  sidbarItemText: {
    fontSize: "12px",
    fontWeight: "bold",
    color: "inherit",
  },
});

export const gLoader = createStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    gap: 3,
    height: "100vh",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
  },
  loadLabel: {
    fontSize: "14px",
    fontWeight: "bold",
    mt: "12px",
  },
});

export const pageNotFound = createStyles({
  container: {
    display: "flex",
    height: "100vh",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
  },
});
