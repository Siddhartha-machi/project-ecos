import { APP_CONSTATNTS } from "../global/constants";
import { createStyles } from "../global/helpers";
import { stylesFuncProps } from "../typeDefs/helpers";

export const formAtom = createStyles({
  container: {
    width: "90%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    my: 1.2,
    gap: 2.5,
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
    borderRadius: APP_CONSTATNTS.borderRadius,
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
    borderRadius: APP_CONSTATNTS.borderRadius,
    "&:disabled": {
      backgroundColor: "rgba(255,255,255,0.3)",
      color: "rgba(255,255,255,0.4)",
    },
  },
  // form atoms styles
  inputContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 1.2,
  },
  inputBox: {
    color: "#fff",
    borderRadius: APP_CONSTATNTS.borderRadius,
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
    ml: 1.5,
    mr: 1.2,
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
