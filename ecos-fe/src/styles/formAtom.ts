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
  selectBox: {
    color: "#fff",
    borderRadius: APP_CONSTATNTS.borderRadius,
    border: "1px solid #fff",
    "&.Mui-focused": {
      boxShadow: "0 0 10px 0 #fff",
    },
    "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
      border: 0,
    },
    "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      border: 0,
    },
    "&.Mui-error": {
      border: "1px solid transparent",
      borderColor: "error.light",
      boxShadow: "0 0 10px 0 red",
    },
    "& .MuiSelect-select": {
      padding: "12px 0px 12px 16px",
      fontWeight: "bold",
    },
    ".MuiSvgIcon-root ": {
      fill: "white !important",
    },
  },
  selectOpWrap: {
    mt: 0.8,
    "&& .Mui-selected": {
      bgcolor: "#fff",
      color: "#000",
    },
    "&& .Mui-disabled": {
      bgcolor: "#000",
      color: "rgba(255,255,255,0.5)",
      opacity: 1,
    },
  },
  selectPaperWrap: {
    borderRadius: APP_CONSTATNTS.borderRadius,
    bgcolor: "#000",
    border: "1px solid rgba(255,255,255,0.3)",
    color: "#fff",
    boxShadow: "0 0 12px 0 #000",
  },
  selectItem: {
    display: "flex",
    alignItems: "center",
    gap: 2,
    mx: 1.6,
    my: 0.6,
    fontWeight: "bold",
    borderRadius: APP_CONSTATNTS.borderRadius,
    "&:Hover": {
      bgcolor: "#fff",
      color: "#000",
    },
  },
  selectItemDisabled: {
    mx: 1.6,
    my: 0.6,
    fontWeight: "bold",
  },
  startIcon: {
    ml: 1.5,
  },
  formInputProps: {
    padding: "12px 0px 12px 3px",
    marginLeft: "12px",
    fontWeight: "bold",
    borderTopRightRadius: APP_CONSTATNTS.borderRadius,
    borderBottomRightRadius: APP_CONSTATNTS.borderRadius,
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
