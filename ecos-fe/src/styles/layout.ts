import { APP_CONSTATNTS } from "../global/constants";
import { createStyles } from "../global/helpers";
import theme from "../global/theme";


const CONTAINER_MARGIN = 25;
const CONTENT_WIDTH = 2 + APP_CONSTATNTS.sidebarWidth;

export const layout = createStyles({
  container: {
    display: "flex",
    flex: 1,
    position: "absolute",
    borderRadius: APP_CONSTATNTS.borderRadius,
    top: CONTAINER_MARGIN,
    bottom: CONTAINER_MARGIN,
    left: CONTAINER_MARGIN,
    right: CONTAINER_MARGIN,
    width: `calc(100% - ${CONTAINER_MARGIN * 2}px)`,
    boxShadow: "0 25px 23px rgba(0, 0, 0, 0.15)",
    background: "rgba(16 18 27 / 40%)",
    border: theme.border,
    backdropFilter: "blur(3px)",
  },

  content: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    width: `calc(100% - ${CONTENT_WIDTH}px)`,
  },
  stickyHeader: {
    display: "flex",
    position: "sticky",
    top: 0,
    gap: 1.2,
    borderBottom: theme.border,
    borderTopRightRadius: APP_CONSTATNTS.borderRadius,
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
    borderRadius: "5px",
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
    borderRadius: APP_CONSTATNTS.borderRadius,
  },
});

export const sidebar = createStyles({
  sideBar: {
    display: "flex",
    flexDirection: "column",
    width: APP_CONSTATNTS.sidebarWidth,
    pb: 1.3,
    gap: "12px",
    borderRight: theme.border,
    borderTopLeftRadius: APP_CONSTATNTS.borderRadius,
    borderBottomLeftRadius: APP_CONSTATNTS.borderRadius,
  },
  iconsContainer: {
    flexDirection: "column",
    mx: "auto",
    mt: 1,
    gap: 2,
  },
  sidebarItem: {
    display: "flex",
    flexDirection: "column",
    borderRadius: APP_CONSTATNTS.borderRadius,
    alignItems: "center",
    justifyContent: "center",
    color: theme.white6,
    py: 1.2,
    px: 0.5,
    gap: 1,
    border: "1px solid transparent",
    transition: "all 0.2s ease-in-out",
    "&:Hover": {
      color: theme.white10,
      boxShadow: "0 25px 23px rgba(0, 0, 0, 0.25)",
      background: "rgba(16 18 27 / 80%)",
      border: theme.border,
    },
  },
  selectedItem: {
    color: theme.white10,
    boxShadow: "0 25px 23px rgba(0, 0, 0, 0.25)",
    background: "rgba(16 18 27 / 80%)",
    border: theme.border,
  },
  sidebarItemIcon: {
    fontSize: 25,
    color: "inherit",
  },
  logo: {
    display: "flex",
    flexDirection: "column",
    borderRadius: "50%",
    borderBottom: theme.borderLight,
    color: theme.white8,
    p: "0px 20px 18px 20px",
    gap: 0.6,
    my: 1,
    mx: "auto",
    "&:Hover": {
      boxShadow: `0px 6px 1px 0px ${theme.blue}`,
      color: theme.white8,
      borderBottom: `1px solid ${theme.white8}`,
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
    mt: '12px'
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
