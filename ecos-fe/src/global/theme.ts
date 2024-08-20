import { createTheme } from "@mui/material";
import { APP_CONSTATNTS } from "./constants";
import { blueGrey, green, red } from "@mui/material/colors";

const theme = {
  primary: "#4A90E2",
  primaryBlue: "#23a2f6",
  primaryDark: "#111927",
  secondary: "#2ea44f",
  inactive: "#4b5663",
  // primaryBgc: "rgba(29, 78, 129, 0.3)", --- theme.p.m
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
};

export const colors = {
  borderColor: blueGrey[800],
};

export const borderRadius = { xs: 0, sm: "10px" };

export default theme;

export const customTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      light: "rgba(255, 255, 255, 0.1)",
      main: "rgba(29, 78, 129, 0.3)",
      dark: theme.black5,
    },
    secondary: {
      light: green[600],
      main: green[700],
      dark: green[900],
    },
    error: {
      main: red[700],
    },
    success: {
      light: green[600],
      main: green[700],
      dark: green[900],
    },
    text: {
      primary: "#fff",
    },
    common: {
      black: "rgba(0, 0, 0, 0.1)",
    },
  },
  shape: {
    borderRadius: APP_CONSTATNTS.radius,
  },
  breakpoints: {
    values: {
      xs: 300, // phone
      sm: 600, // tablets
      md: 900, // small laptop
      lg: 1200, // desktop
      xl: 1536, // large screens
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "text" },
          style: ({ theme }) => ({
            display: "inline-flex",
            width: "fit-content",
            padding: 0,
            color: theme.palette.secondary.main,
            backgroundColor: "transparent",
            border: "none",
            "&:Hover": {
              color: theme.palette.secondary.main,
              backgroundColor: "transparent",
              transform: "scale(1.02)",
              border: "none",
            },
            "&:disabled": {
              color: theme.palette.text.disabled,
              backgroundColor: "transparent",
              borderColor: theme.palette.text.disabled,
            },
          }),
        },
      ],
      styleOverrides: {
        root: ({ theme }) => ({
          // Base style overrides
          textTransform: "none",
          fontWeight: "bold",
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.main,
          border: `1.5px solid ${theme.palette.secondary.light}`,
          borderRadius: theme.shape.borderRadius,
          "&:Hover": {
            border: `1.5px solid ${theme.palette.secondary.light}`,
            backgroundColor: theme.palette.secondary.light,
            // color: theme.palette.text.primary,
          },
          "&:disabled": {
            color: theme.palette.text.disabled,
            backgroundColor: theme.palette.text.disabled,
            borderColor: "transparent",
          },
        }),
      },
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiIconButton: {
      variants: [
        {
          props: { itemType: "active" },
          style: ({ theme }) => ({
            color: theme.palette.text.primary,
            backgroundColor: theme.palette.secondary.main,
            border: `1.5px solid ${theme.palette.secondary.light}`,
            "&:Hover": {
              backgroundColor: theme.palette.secondary.light,
            },
            "&:disabled": {
              borderColor: theme.palette.text.disabled,
            },
          }),
        },
        {
          props: { itemType: "inactive" },
          style: ({ theme }) => ({
            color: theme.palette.text.secondary,
            "&:Hover": {
              color: theme.palette.text.primary,
            },
          }),
        },
        {
          props: { itemType: "icon" },
          style: ({ theme }) => ({
            color: theme.palette.text.secondary,
            padding: 0,
            border: 0,
            "&:Hover": {
              backgroundColor: "transparent",
              color: theme.palette.secondary.main,
              border: 0,
              padding: 0,
            },
          }),
        },
      ],
      styleOverrides: {
        root: ({ theme }) => ({
          // Base style overrides
          color: theme.palette.text.secondary,
          border: "1.5px solid transparent",
          borderRadius: theme.shape.borderRadius,
          "&:Hover": {
            color: theme.palette.text.primary,
            backgroundColor: theme.palette.secondary.main,
            border: `1.5px solid ${theme.palette.secondary.light}`,
          },
          "&:disabled": {
            color: theme.palette.text.disabled,
            borderColor: theme.palette.text.disabled,
          },
        }),
      },
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiPaper: {
      // probable deprication feature
      variants: [
        {
          props: { itemType: "animation" },
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
        root: ({ theme }) => ({
          color: theme.palette.text.secondary,
          backdropFilter: "blur(10px) saturate(102%)",
          WebkitBackdropFilter: "blur(10px) saturate(102%)",
          backgroundColor: theme.palette.primary.main,
          borderRadius: theme.shape.borderRadius,
          border: "1px solid",
          borderColor: theme.palette.primary.light,
        }),
      },
    },
    MuiInputBase: {
      variants: [
        {
          props: {
            itemType: "withIcon",
          },
          style: ({ theme }) => ({
            borderBottomLeftRadius: 0,
            borderTopLeftRadius: 0,
            "&.Mui-focused, &:hover": {
              boxShadow: `0 0 4px 0 ${theme.palette.secondary.main}`,
              border: `1.5px solid ${theme.palette.secondary.light}`,
            },
          }),
        },
      ],
      styleOverrides: {
        input: ({ theme }) => ({
          "&:-webkit-autofill": {
            boxShadow: "0 0 0 100px #1f2a37 inset",
            WebkitTextFillColor: theme.palette.text.primary,
            borderRadius: theme.shape.borderRadius,
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
          },
          "::-webkit-calendar-picker-indicator": {
            display: "none",
          },
          "::-webkit-datetime-edit-text": {
            padding: "15px",
          },
        }),
        root: ({ theme }) => ({
          color: theme.palette.text.primary,
          borderRadius: theme.shape.borderRadius,
          backgroundColor: theme.palette.common.black,
          border: `1.5px solid ${colors.borderColor}`,
          "&.Mui-focused, &:hover": {
            border: `1.5px solid ${theme.palette.secondary.main}`,
            backgroundColor: theme.palette.primary.light,
          },
          "&.Mui-error": {
            border: `1.5px solid ${theme.palette.error.main}`,
            boxShadow: `0 0 4px 0 ${theme.palette.error.dark}`,
          },
          "&.Mui-disabled": {
            borderColor: colors.borderColor,
            backgroundColor: theme.palette.primary.light,
            cursor: "not-allowed",
          },
          "&.Mui-disabled input::placeholder": {
            WebkitTextFillColor: theme.palette.text.disabled,
          },
        }),
      },
      defaultProps: {
        fullWidth: true,
        inputProps: {
          sx: {
            display: "flex",
            p: "12px",
            fontWeight: "bold",
            backgroundColor: "transparent",
            "&:disabled": {
              cursor: "not-allowed",
            },
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.text.primary,
          borderRadius: theme.shape.borderRadius,
          backgroundColor: theme.palette.common.black,
          border: `1.5px solid ${theme.palette.primary.light}`,
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
            border: "1.5px solid transparent",
            borderColor: theme.palette.error.main,
            boxShadow: `0 0 4px 0 ${theme.palette.error.dark}`,
          },
          "&.Mui-disabled": {
            borderColor: theme.palette.text.disabled,
            backgroundColor: theme.palette.primary.light,
            cursor: "not-allowed",
          },
          "&.Mui-disabled input::placeholder": {
            WebkitTextFillColor: theme.palette.text.disabled,
          },
          "& .MuiSelect-select": {
            padding: "12px 0px 12px 16px",
            fontWeight: "bold",
          },
          ".MuiSvgIcon-root ": {
            fill: "white !important",
          },
        }),
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
                // borderRadius: theme.borderRadius,
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
          // borderRadius: theme.borderRadius,
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
          // borderRadius: theme.borderRadius,
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
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: theme.main0,
          border: theme.borderDark,
          // borderRadius: theme.borderRadius,
          padding: 0,
          backdropFilter: "blur(5px)",
          textAlign: "center",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          // borderRadius: theme.borderRadius,
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
    MuiSkeleton: {
      defaultProps: {
        animation: "wave",
      },
    },
  },
});
