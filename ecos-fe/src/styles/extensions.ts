import { APP_CONSTATNTS } from "../global/constants";
import { createStyles } from "../global/helpers";
import theme from "../global/theme";
import { stylesFuncProps } from "../typeDefs/helpers";

export const extensions = createStyles({
  container: {
    gap: 1,
    overflow: "scroll",
  },
  content: {
    display: "flex",
    flexGrow: 1,
    overflow: "scroll",
  },
  item: ({ check }: stylesFuncProps) => ({
    display: "flex",
    bgcolor: check ? theme.white1 : theme.black1,
    border: `1px solid ${theme.black3}`,
    borderRadius: APP_CONSTATNTS.borderRadius,
    gap: 1,
    color: theme.white10,
    p: 1.5,
    m: 0.8,
    zIndex: 2000,
    "&:Hover": {
      boxShadow: check ? 0 : `0 0 12px 0 ${theme.black10}`,
    },
  }),
  img: {
    borderRadius: APP_CONSTATNTS.borderRadius,
    width: "50px",
    height: "50px",
  },
  fallBackIcon: {
    fontSize: "30px",
    p: "9px",
    borderRadius: APP_CONSTATNTS.borderRadius,
    boxShadow: `0 0 6px 0 ${theme.black5}`,
    border: `1px solid ${theme.black10}`,
    color: theme.white3,
  },
  rightTop: {
    display: "flex",
    justifyContent: "space-between",
  },
  right: {
    display: "flex",
    flexDirection: "column",
    gap: 1.5,
  },
  title: {
    fontSize: "16px",
    fontWeight: "bold",
    letterSpacing: 1,
  },
  description: {
    fontSize: "12px",
    color: theme.white8,
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
  seeMore: {
    mr: "auto",
    p: 0,
    pt: 0.3,
    fontSize: "10px",
  },
});
