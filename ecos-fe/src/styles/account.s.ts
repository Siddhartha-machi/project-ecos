import { createStyles } from "../global/helpers";
import theme from "../global/theme";

const PROFILE_WIDTH = 260;

export const account = createStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    height: "100%",
  },
  content: {
    display: "flex",
    height: "100%",
    overflow: "scroll",
  },
  accountContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 1.2,
  },
  inHeader: {
    bgcolor: theme.main1,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: "14px",
    p: 1,
  },
  inContainer: {
    flexDirection: "column",
    color: "#fff",
    overflow: "scroll",
    borderLeft: theme.border,
  },
});

export const profile = createStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    color: "#fff",
    overflow: "scroll",
    p: 2,
    minWidth: PROFILE_WIDTH,
  },
  header: {
    display: "flex",
    alignItems: "center",
    pb: 1.5,
  },
  details: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  fullName: {
    fontWeight: "bold",
    fontSize: "14px",
    textAlign: "center",
  },
  userRole: {
    fontWeight: "bold",
    fontSize: "12px",
    color: "rgba(255,255,255,0.5)",
    textAlign: "center",
  },
  joinDate: {
    fontWeight: "bold",
    fontSize: "12px",
    color: "rgba(255,255,255,0.5)",
    textAlign: "center",
  },
  changeImgIcon: {
    position: "absolute",
    right: 0,
    bottom: 0,
    color: "#fff",
    borderRadius: "50%",
    "&:Hover": {
      bgcolor: "rgba(0,0,0,0.8)",
    },
  },
  detailsHeader: {
    display: "flex",
    justifyContent: "space-between",
    color: "#fff",
    alignItems: "center",
    borderBottom: `1px solid ${theme.white4}`,
  },
  editIconButton: {
    color: "#fff",
  },
  detailsFields: {
    display: "flex",
    flexDirection: "column",
    gap: 1,
    overflow: "scroll",
  },
});

export const notifs = createStyles({
  emptyNotifs: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    color: theme.white5,
    pt: 5,
    gap: 1.5,
  },
  messageText: {
    textAlign: "center",
    fontSize: "12px",
    fontWeight: "bold",
    px: 2,
  },
});
