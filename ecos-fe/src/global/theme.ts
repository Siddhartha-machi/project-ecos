import { createTheme } from "@mui/material";

const theme = {
  primary: "#4A90E2",
  primaryBlue: "#23a2f6",
  primaryDark: "#111927",
  secondary: "#2EA44f",
  card: "rgba(17, 25, 40, 0.75)",
  border: "1px solid rgba(255,255,255, 0.5)",
  borderDark: "1px solid rgba(255,255,255, 0.2)",
  borderLight: "1px solid rgba(255,255,255,0.6)",
  blue: "#23a2f6",
  mainBackground: "rgb(146 151 179 / 13%)",
  containerBackground: "#161b22",
  inactive: "rgba(255, 255, 255, 0.4)",
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

  borderRadius: "0px",
};

export default theme;

export const customTheme = createTheme({
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "text" },
          style: {
            backgroundColor: "transparent",
            "&:Hover": {
              backgroundColor: "transparent",
            },
            "&:disabled": {
              color: theme.inactive,
            },
          },
        },
        {
          props: { variant: "contained" },
          style: {
            color: theme.white9,
            "&:Hover": {
              backgroundColor: theme.secondary,
              color: theme.white10,
            },
            "&:disabled": {
              color: theme.inactive,
              backgroundColor: theme.white2,
            },
          },
        },
        {
          props: { variant: "outlined" },
          style: {
            backgroundColor: "transparent",
            border: `1px solid ${theme.white8}`,
            "&:Hover": {
              backgroundColor: theme.secondary,
              borderColor: "transparent",
            },
            "&:disabled": {
              color: theme.inactive,
              border: theme.borderDark,
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
          color: theme.white7,
          borderRadius: "0px",
          "&:Hover": {
            color: theme.white10,
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
            color: theme.inactive,
          },
        },
      },
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiCard: {
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
        root: {
          color: theme.white10,
          backdropFilter: "blur(16px) saturate(180%)",
          WebkitBackdropFilter: "blur(16px) saturate(180%)",
          backgroundColor: theme.card,
          borderRadius: theme.borderRadius,
          border: "1px solid rgba(255, 255, 255, 0.125)",
        },
      },
      defaultProps: {
        elevation: 24,
      },
    },
    MuiInputBase: {
      variants: [
        {
          props: {
            size: "small",
          },
          style: {
            padding: "0px 12px",
          },
        },
      ],
      styleOverrides: {
        input: {
          "&:-webkit-autofill": {
            WebkitBoxShadow: "0 0 0 100px #101a2b inset",
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
          color: "#fff",
          borderRadius: theme.borderRadius,
          backdropFilter: "blur(16px) saturate(180%)",
          WebkitBackdropFilter: "blur(16px) saturate(180%)",
          backgroundColor: theme.card,
          border: `1px solid ${theme.white6}`,
          "&.Mui-focused, &:hover": {
            border: `1px solid ${theme.white10}`,
            boxShadow: "0 0 8px 0 #fff",
          },
          "&.Mui-error": {
            border: "1px solid transparent",
            borderColor: "error.light",
            boxShadow: "0 0 10px 0 red",
          },
        },
      },
      defaultProps: {
        inputProps: {
          sx: {
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
  },
});
