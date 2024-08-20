import { createStyles } from "../global/helpers";
import theme from "../global/theme";
import { stylesFuncProps } from "../typeDefs/helpers";

export const toolTip = createStyles({
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
    px: "8px",
    gap: 1,
    my: theme.spacing,
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
});

export const chip = createStyles({
  container: {
    display: "flex",
    flexWrap: "nowrap",
    overflow: "hidden",
    gap: 0.8,
    maxWidth: "100%",
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
    // borderRadius: theme.borderRadius,
    width: "30px",
    height: "30px",
  },
  fallBackIcon: {
    fontSize: "20px",
    p: "6px",
    // borderRadius: theme.borderRadius,
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
    // borderRadius: theme.borderRadius,
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
    // borderRadius: theme.borderRadius,
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
    mt: 1.5,
    mb: 1,
  },
  emptyContent: {
    display: "flex",
    flexDirection: "column",
    my: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  addButton: {
    mx: "auto",
    pb: 1.2,
  },
  onHover: {
    cursor: "pointer",
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
});

export const dialog = createStyles({
  header: {
    display: "flex",
    alignItems: "center",
    p: "6px 12px",
    borderBottom: theme.border,
  },
  actionContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 1,
  },
  title: {
    width: 'calc(100% - 50px)',
    textAlign: "center",
    fontSize: "15px",
    color: "text.primary",
  },
  footer: {
    pr: 2,
    py: 1,
  },
  actionButton: ({ value }: stylesFuncProps) => ({
    bgcolor: value || "transparent",
    borderColor: value || "",
    padding: 0.1,
    "&:Hover": {
      backgroundColor: value || "",
      borderColor: value || "",
    },
  }),
  icon: {
    color: "inherit",
    fontSize: "11px",
  },
});

export const dataBox = createStyles({
  icon: { fontSize: "100px" },
  title: { fontSize: "25px", fontWeight: "bold" },
  msg: { fontSize: "16px", fontWeight: "bold", textAlign: "center" },
});

export const skeleton = createStyles({
  avatar: {
    width: "50px",
    height: "50px",
    transform: "unset",
    // borderRadius: theme.borderRadius,
  },
  text: {
    display: "flex",
    height: "50px",
    transform: "unset",
  },
  title: {
    display: "flex",
    flex: 1,
    transform: "unset",
  },
  button: {
    display: "flex",
    flex: 1,
    height: "30px",
  },
  chip: {
    display: "flex",
    height: "35px",
    flex: 1,
    borderRadius: "15px",
  },
  textButton: {
    display: "flex",
    width: "80px",
    height: "20px",
    transform: "unset",
  },
});

export const rating = createStyles({
  container: {
    display: "flex",
    gap: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
});

export const divider = createStyles({
  dividerLabel: {
    fontSize: "16px",
    fontWeight: "bold",
    color: theme.white8,
  },
});
