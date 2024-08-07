import { createTheme } from "@mui/material";
import { APP_CONSTATNTS } from "./constants";

const theme = {
  primary: "#4A90E2",
  primaryBlue: "#23a2f6",
  primaryDark: "#111927",
  secondary: "#2ea44f",
  inactive: "#4b5663",
  primaryBgc: "rgba(29, 78, 129, 0.3)",
  bgDark: "#111927",

  borderColor: "rgba(255, 255, 255, 0.125)",
  // input field colors
  iborderClr: "#232b36",
  iborder: "1px solid #4b5663",
  iBgc: "#1f2a37",

  // Colors
  green: "#13a987",
  yellow: "#f59e0b",
  red: "#d81e5b",
  // Error colors
  redMain: "#ef5350",
  redLight: "#e57373",
  redDark: "#b71c1c",

  border: "1px solid rgba(255, 255, 255, 0.125)",
  borderDark: "1px solid rgba(255,255,255, 0.2)",
  borderLight: "1px solid rgba(255,255,255,0.6)",
  blue: "#23a2f6",
  mainBackground: "rgb(146 151 179 / 13%)",
  containerBackground: "#161b22",
  shadow: "rgb(146 151 279 / 13%)",
  main0: "rgb(126 131 159 / 8%)",
  main1: "rgb(106 111 139 / 13%)",
  main2: "rgb(186 191 219 / 23%)",
  white1: "rgba(255,255,255,0.1)",
  white2: "rgba(255,255,255,0.2)",
  white3: "rgba(255,255,255,0.3)",
  white4: "rgba(255,255,255,0.4)",
  white5: "rgba(255,255,255,0.5)",
  white6: "rgba(255,255,255,0.6)",
  white7: "rgba(255,255,255,0.7)",
  white8: "rgba(255,255,255,0.8)",
  white9: "rgba(255,255,255,0.9)",
  white10: "rgba(255,255,255,1)",
  black1: "rgba(0,0,0,0.1)",
  black2: "rgba(0,0,0,0.2)",
  black3: "rgba(0,0,0,0.3)",
  black4: "rgba(0,0,0,0.4)",
  black5: "rgba(0,0,0,0.5)",
  black6: "rgba(0,0,0,0.6)",
  black7: "rgba(0,0,0,0.7)",
  black8: "rgba(0,0,0,0.8)",
  black9: "rgba(0,0,0,0.9)",
  black10: "rgba(0,0,0,1)",

  spacing: `${APP_CONSTATNTS.gap}px`,
  borderRadius: `${APP_CONSTATNTS.radius}px`,
};

export default theme;

export const customTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: theme.white1,
    },
    secondary: {
      main: "rgba(0,255,0,1)",
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "text" },
          style: {
            display: "inline-flex",
            width: "fit-content",
            padding: 0,
            color: theme.primaryBlue,
            backgroundImage: "none",
            backgroundColor: "transparent",
            "&:Hover": {
              backgroundColor: "transparent",
              transform: "scale(1.02)",
            },
            "&:disabled": {
              color: theme.inactive,
              backgroundColor: "transparent",
            },
          },
        },
      ],
      styleOverrides: {
        root: {
          // Base style overrides
          textTransform: "none",
          letterSpacing: "-0.025em",
          fontWeight: "bold",
          color: theme.white10,
          backgroundColor: theme.secondary,
          border: 0,
          borderRadius: theme.borderRadius,
          backgroundImage:
            "linear-gradient(180deg,hsla(0,0%,100%,.15),hsla(0,0%,100%,0))",
          "&:Hover": {
            backgroundColor: theme.secondary,
            backgroundImage: "none",
            border: 0,
          },
          "&:disabled": {
            color: theme.white10,
            backgroundColor: theme.inactive,
          },
        },
      },
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiIconButton: {
      variants: [
        {
          props: { itemType: "active" },
          style: {
            color: theme.white10,
            backgroundColor: theme.primaryBlue,
            border: `2px solid ${theme.white3}`,
            "&:Hover": {
              color: theme.white10,
              backgroundColor: theme.primaryBlue,
            },
          },
        },
        {
          props: { itemType: "inactive" },
          style: {
            color: theme.white8,
            border: "2px solid transparent",
            "&:Hover": {
              color: theme.white10,
              border: `2px solid ${theme.white3}`,
              backgroundColor: theme.primaryBlue,
            },
          },
        },
        {
          props: { itemType: "icon" },
          style: {
            color: theme.white10,
            "&:Hover": {
              backgroundColor: "transparent",
              color: theme.secondary,
            },
          },
        },
      ],
      styleOverrides: {
        root: {
          // Base style overrides
          color: theme.white6,
          border: "1px solid transparent",
          borderRadius: theme.borderRadius,
          "&:Hover": {
            color: theme.white10,
            backgroundColor: theme.secondary,
          },
          "&:disabled": {
            color: theme.white5,
          },
        },
      },
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiPaper: {
      variants: [
        {
          props: { itemType: "animationa" },
          style: {
            border: "1.2px solid",
            borderImage: `conic-gradient(
              from var(--angle),
              ${theme.white10},
              ${theme.white10} 0.1turn,
              ${theme.white10} 0.15turn,
              ${theme.white2} 0.25turn
            )
            30;`,
            "@keyframes borderRotate": {
              "100%": {
                "--angle": "360deg",
              },
            },
            animation: "borderRotate 10s linear infinite forwards",
          },
        },
      ],
      styleOverrides: {
        root: {
          color: theme.white10,
          backdropFilter: "blur(10px) saturate(102%)",
          WebkitBackdropFilter: "blur(10px) saturate(102%)",
          backgroundColor: theme.primaryBgc,
          borderRadius: theme.borderRadius,
          border: "1px solid transparent",
          borderColor: theme.borderColor,
        },
      },
    },
    MuiInputBase: {
      variants: [
        {
          props: {
            itemType: "simple",
          },
          style: {
            padding: "0px 12px",
          },
        },
        {
          props: {
            itemType: "withIcon",
          },
          style: {
            borderBottomLeftRadius: 0,
            borderTopLeftRadius: 0,
            "&.Mui-focused, &:hover": {
              boxShadow: `0 0 4px 0 ${theme.secondary}`,
              border: `1px solid ${theme.secondary}`,
            },
          },
        },
      ],
      styleOverrides: {
        input: {
          "&:-webkit-autofill": {
            WebkitBoxShadow: "0 0 0 100px #1f2a37 inset",
            WebkitTextFillColor: theme.white10,
          },
          "::-webkit-calendar-picker-indicator": {
            display: "none",
          },
          "::-webkit-datetime-edit-text": {
            padding: "15px",
          },
        },
        root: {
          color: theme.white10,
          borderRadius: theme.borderRadius,
          backgroundColor: theme.iBgc,
          border: theme.iborder,
          "&.Mui-focused, &:hover": {
            border: `1px solid ${theme.secondary}`,
            backgroundColor: theme.iborderClr,
          },
          "&.Mui-error": {
            border: "1px solid transparent",
            borderColor: theme.redMain,
            boxShadow: `0 0 4px 0 ${theme.redMain}`,
          },
          "&.Mui-disabled": {
            borderColor: theme.borderColor,
            backgroundColor: theme.iborderClr,
            color: theme.white1,
          },
          "&.Mui-disabled input::placeholder": {
            WebkitTextFillColor: theme.white3,
          },
        },
      },
      defaultProps: {
        fullWidth: true,
        inputProps: {
          sx: {
            display: "flex",
            p: "12px",
            fontWeight: "bold",
            borderRadius: theme.borderRadius,
            backgroundColor: "transparent",
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          color: "#fff",
          borderRadius: theme.borderRadius,
          border: `1px solid ${theme.white6}`,
          "&.Mui-focused": {
            boxShadow: "0 0 10px 0 #fff",
          },
          "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
            border: 0,
          },
          "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
            {
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
      },
      defaultProps: {
        MenuProps: {
          sx: {
            mt: 0.8,
            mx: "auto",
            "&& .Mui-selected": {
              bgcolor: theme.white10,
              color: theme.black10,
            },
            "&& .Mui-disabled": {
              bgcolor: theme.primaryDark,
              color: "rgba(255,255,255,0.5)",
              opacity: 1,
            },
          },
          slotProps: {
            paper: {
              sx: {
                borderRadius: theme.borderRadius,
                bgcolor: theme.primaryDark,
                border: `1px solid ${theme.white3}`,
                color: theme.white10,
                boxShadow: "0 0 12px 0 #000",
              },
            },
          },
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          display: "flex",
          alignItems: "center",
          gap: 2,
          margin: "6px 12px",
          fontWeight: "bold",
          borderRadius: theme.borderRadius,
          "&:Hover": {
            backgroundColor: theme.white10,
            color: theme.black10,
          },
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          borderRadius: theme.borderRadius,
          padding: 0,
          border: `1px solid ${theme.white3}`,
          "&:Hover": {
            cursor: "pointer",
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          fontSize: "20px",
          backgroundColor: theme.white3,
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: theme.main0,
          border: theme.borderDark,
          borderRadius: theme.borderRadius,
          padding: 0,
          backdropFilter: "blur(5px)",
          textAlign: "center",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: theme.borderRadius,
          boxShadow: `0 0 6px 0 ${theme.white1}`,
          border: `1px solid ${theme.white3}`,
          color: theme.white8,
          bgcolor: theme.white1,
          p: "3px 8px",
          fontSize: "9px",
        },
      },
      defaultProps: {
        size: "small",
      },
    },
  },
});
