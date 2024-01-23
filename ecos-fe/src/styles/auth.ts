import { APP_CONSTATNTS } from "../global/constants";
import { createStyles } from "../global/helpers";

export const auth = createStyles({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: "100vh",
    width: "calc(100%)",
    backgroundImage: APP_CONSTATNTS.backGround,
  },
  coverSpace: {
    display: "flex",
    flexDirection: "column",
    width: "60%",
    alignItems: "center",
    height: "100%",
    color: "#fff",
    gap: 3,
  },
  coverContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    my: "auto",
    width: "90%",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "40%",
    maxWidth: "400px",
    height: "inherit",
    bgcolor: "rgba(0,0,0,0.3)",
    color: "#fff",
    px: 4,
  },
  formHeader: {
    display: "flex",
    alignItems: "center",
    gap: 1,
    p: 3,
    mr: "auto",
  },
  caption: {
    fontSize: "9px",
    color: "rgba(255,255,255,0.6)",
  },
  welcomMessage: {
    display: "inline-block",
    fontSize: "50px",
    overflow: "hidden",
    whiteSpace: "nowrap",
    width: 0,
    p: 1,
    borderTopRightRadius: "50%",
    borderBottomRightRadius: "50%",
    borderRight: "10px solid",
    boxShadow: "8px 0 0px 0 #fff",
    borderRightColor: "primary.main",
    " @keyframes typing": {
      from: {
        width: 0,
        opacity: 0,
      },
      to: {
        width: "90%",
        opacity: 1,
      },
    },
    animation: "typing 5s steps(30, end) infinite",
  },
  signInMessage: {
    fontSize: "25px",
    color: "rgba(255,255,255,0.6)",
  },
  message: {
    fontSize: "15px",
    textAlign: "center",
    px: { lg: "100px" },
    color: "rgba(255,255,255,0.6)",
  },

  footer: {
    display: "flex",
    mt: "auto",
    mb: "25px",
    alignItems: "center",
    justifyContent: "center",
    color: "rgba(255,255,255,0.3)",
  },
  appTitle: {
    fontSize: "18px",
    letterSpacing: 3,
    fontWeight: "bold",
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
  formToggleText: {
    fontSize: "13px",
    textAlign: "center",
    mt: 1,
  },
  inlineButton: {
    fontSize: "inherit",
    textTransform: "none",
    fontWeight: "bold",
    p: 0,
    m: 0,
    "&:Hover": {
      textDecoration: "underline",
      bgcolor: "transparent",
    },
  },
});

export const login = createStyles({
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
});

export const register = createStyles({});
