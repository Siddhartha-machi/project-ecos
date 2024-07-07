import { createStyles } from "../global/helpers";
import theme from "../global/theme";
import { stylesFuncProps } from "../typeDefs/helpers";

export const extensions = createStyles({
  container: {
    overflow: "scroll",
    height: "100%",
  },
  content: {
    display: "flex",
    flex: 1,
    overflow: "scroll",
  },
  item: ({ check }: stylesFuncProps) => ({
    display: "flex",
    gap: 1,
    color: check ? theme.inactive : theme.white10,
    p: 1.5,
    zIndex: 2000,
    transition: "0.3s ease",
    "&:Hover": {
      bgcolor: check ? "none" : theme.main0,
    },
  }),
  img: ({ check }: stylesFuncProps) => ({
    borderRadius: theme.borderRadius,
    width: "50px",
    height: "50px",
    opacity: check ? 0.3 : 1,
  }),
  fallBackIcon: {
    fontSize: "30px",
    p: "9px",
    borderRadius: theme.borderRadius,
    border: "1px solid",
    borderColor: "inherit",
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
    color: "inherit",
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
    fontSize: "10px",
  },
});
