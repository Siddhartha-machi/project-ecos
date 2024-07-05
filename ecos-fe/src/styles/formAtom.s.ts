import { createStyles } from "../global/helpers";
import theme from "../global/theme";
import { stylesFuncProps } from "../typeDefs/helpers";

export const formAtom = createStyles({
  container: {
    width: "90%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: 4,
  },
  loginError: {
    display: "flex",
    fontSize: "14px",
    fontWeight: "bold",
    bgcolor: "error.light",
    alignItems: "center",
    justifyContent: "center",
    py: 1,
    gap: 1,
    borderRadius: theme.borderRadius,
  },
  formTitle: {
    fontSize: "20px",
    fontWeight: "bold",
    pb: 1,
    borderBottom: "3px solid",
    borderBottomColor: "primary.main",
    borderBottomWidth: "50%",
    mr: "auto",
  },
  submitButton: {
    textTransform: "none",
    fontWeight: "bold",
    my: 1,
    borderRadius: theme.borderRadius,
    "&:disabled": {
      backgroundColor: "rgba(255,255,255,0.3)",
      color: "rgba(255,255,255,0.4)",
    },
  },
  // form atoms styles
  inputContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 1,
  },
  inputBox: {
    color: "#fff",
    borderRadius: theme.borderRadius,
    border: "1px solid #fff",
    "&.Mui-focused": {
      boxShadow: "0 0 10px 0 #fff",
    },
    "&.Mui-error": {
      border: "1px solid transparent",
      borderColor: "error.light",
      boxShadow: "0 0 10px 0 red",
    },
  },
  startIcon: {
    p: "12px",
    bgcolor: theme.black2,
    borderRight: `1px solid transparent`,
    borderColor: "inherit",
  },
  fieldsWrap: {
    display: "flex",
    flexDirection: "column",
    gap: 2.5,
  },
  formLabel: ({ check }: stylesFuncProps) => ({
    fontSize: "14px",
    fontWeight: "bold",
    color: check ? "error.light" : "rgba(255,255,255,0.9)",
  }),
  errorText: {
    fontSize: "12px",
    color: "error.light",
    mt: 0.5,
  },
});
