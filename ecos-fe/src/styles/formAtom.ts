import { APP_CONSTATNTS } from "../global/constants";
import { createStyles } from "../global/helpers";
import { stylesFuncProps } from "../typeDefs/helpers";

export const formAtom = createStyles({
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
