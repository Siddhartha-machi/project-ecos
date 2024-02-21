import { APP_CONSTATNTS } from "../global/constants";
import { createStyles } from "../global/helpers";
import theme from "../global/theme";

const CONTAINER_MARGIN = 25;
const CONTENT_WIDTH = 2 + APP_CONSTATNTS.sidebarWidth;

export const layout = createStyles({
  appBackground: {
    display: "flex",
    flex: 1,
    borderRadius: APP_CONSTATNTS.borderRadius,
    background: "rgba(0, 0, 0, 0.05)",
    boxShadow: "0 4px 30px rgba(255,255, 255, 0.1)",
    backdropFilter: "blur(1.1px)",
    " -webkit-backdrop-filter": "blur(1.1px)",
    border: "1px solid rgba(0, 0, 0, 0.3)",
  },
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
    backgroundColor: theme.black1,
    boxShadow: `0px 0px 12px 0px ${theme.black10}`,
    backdropFilter: "blur(1.1px)",
    " -webkit-backdrop-filter": "blur(1.1px)",
    border: `1px solid ${theme.black10}`,
  },
  content: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    gap: 1,
    width: `calc(100% - ${CONTENT_WIDTH}px)`,
    p: 1.5,
  },
  stickyHeader: {
    display: "flex",
    position: "sticky",
    top: 10,
    gap: 1.2,
    border: theme.border,
    borderRadius: APP_CONSTATNTS.borderRadius,
    color: "#fff",
    justifyContent: "space-between",
    alignItems: "center",
    pr: 1.2,
  },
  globalSearch: {
    flex: 1,
    color: "#fff",
    borderRadius: APP_CONSTATNTS.borderRadius,
    py: 1.3,
    pl: 1,
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
});

export const sidebar = createStyles({
  sideBar: {
    display: "flex",
    flexDirection: "column",
    width: APP_CONSTATNTS.sidebarWidth,
    pb: 1.3,
    gap: "12px",
    bgcolor: theme.black2,
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
    color: theme.white8,
    py: 1.2,
    px: 0.5,
    gap: 1,
    border: "1px solid transparent",
    transition: "all 0.2s ease-in-out",
    "&:Hover": {
      color: theme.white10,
      bgcolor: "rgba(255,255,255,0.1)",
      boxShadow: `0  0 15px 0px ${theme.black10}`,
    },
  },
  selectedItem: {
    color: theme.white10,
    bgcolor: "rgba(255,255,255,0.1)",
    boxShadow: `0  0 15px 0px ${theme.black10}`,
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
    gap: 1,
    height: "100vh",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
  },
  loadLabel: {
    fontSize: "14px",
    fontWeight: "bold",
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
