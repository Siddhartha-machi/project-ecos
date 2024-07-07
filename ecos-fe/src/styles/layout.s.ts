import { APP_CONSTATNTS } from "../global/constants";
import { createStyles } from "../global/helpers";
import theme from "../global/theme";

const CONTENT_RESIDUE = APP_CONSTATNTS.sidebarWidth;
const SPACING = APP_CONSTATNTS.gap * 2;

export const layout = createStyles({
  container: {
    display: "flex",
    flex: 1,
    position: "absolute",
    inset: 0,
    width: `calc(100% - ${SPACING}px)`,
    gap: theme.spacing,
    m: theme.spacing,
    overflow: "visible",
  },

  content: {
    display: "flex",
    position: "relative",
    flexDirection: "column",
    flex: 1,
    width: `calc(100% - ${CONTENT_RESIDUE}px)`,
    alignItems: "stretch",
    overflow: "visible",
  },
  stickyHeader: {
    display: "flex",
    position: "sticky",
    top: 0,
    gap: theme.spacing,
    borderRadius: theme.borderRadius,
    color: "#fff",
    justifyContent: "stretch",
    alignItems: "center",
  },
  userDetailContainer: {
    display: "flex",
    py: 0.35,
    pr: 0.5,
    gap: 1.5,
  },
  globalSearch: {
    flex: 1,
    py: 0.85,
    pl: 1.2,
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
    height: "100%",
    width: "calc(100% - 0px)",
    overflow: "visible",
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
    gap: 1,
    borderRadius: theme.borderRadius,
    py: 1,
  },
  iconsContainer: {
    display: "flex",
    flexDirection: "column",
    borderTop: theme.borderDark,
    gap: 1.5,
    mx: "auto",
    pt: 1.5,
  },
  userActionsContainer: {
    display: "flex",
    flexDirection: "column",
    borderTop: theme.borderDark,
    gap: 1.5,
    pt: 1.5,
    mt: "auto",
    mx: "auto",
  },
  logo: {
    display: "flex",
    flexDirection: "column",
    borderRadius: theme.borderRadius,
    gap: 0.6,
    mx: "auto",
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
