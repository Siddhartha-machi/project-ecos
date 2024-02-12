import { APP_CONSTATNTS } from "../global/constants";
import { createStyles } from "../global/helpers";
import theme from "../global/theme";

export const toolTip = createStyles({
  container: {
    bgcolor: theme.black1,
    boxShadow: `0 0 12px 0 ${theme.black10}`,
    borderRadius: APP_CONSTATNTS.borderRadius,
    p: 0,
    backdropFilter: "blur(3px)",
    zIndex: 2000,
  },
  listContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
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
    bgcolor: theme.black6,
    zIndex: 1000,
    borderRadius: APP_CONSTATNTS.borderRadius,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    position: "sticky",
    top: 0,
  },
  text: {
    p: "3px 12px",
    fontSize: "12px",
    fontWeight: "bold",
  },
  fallbackMessage: {
    fontSize: "12px",
    color: theme.white3,
    mt: 2,
  },
  listItemContainer: {
    display: "flex",
    gap: 1,
    p: "6px 10px",
    border: "1px solid transparent",
    borderRadius: APP_CONSTATNTS.borderRadius,
    "&:Hover": {
      border: "1px solid #000",
      boxShadow: `0 0 6px 0 ${theme.black10}`,
    },
  },
  content: {
    display: "flex",
    flexDirection: "column",
    gap: 1,
    alignItems: "center",
    justifyContent: "center",
    m: 1,
  },
  addButton: {
    textTransform: "none",
    fontWeight: "bold",
    my: 1,
    "&:Hover": {
      bgcolor: "transparent",
      boxShadow: `0 0 12px 0 ${theme.black10}`,
    },
  },
});
