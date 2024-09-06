import { createTheme } from "@mui/material/styles";
import { DarkOverrides, LightOverrides } from "./override";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

// Create a theme instance.
let theme = createTheme({
  colorSchemes: {
    dark: true,
  },
  navHeight: {
    maxHeight: 64,
  },
  shape: {
    borderRadius: 10,
  },
  components: {
    // Name of the component
    MuiListItemButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          "&.Mui-selected": {
            background: "rgba(0, 191, 99, 0.2)",
          },
          "&.Mui-selected:hover": {
            background: "rgba(0, 191, 99, 0.3)",
          },
        },
      },
    },
  },
  // Material UI theme
  // breakpoints: {
  //   values: {
  //     xs: 0,
  //     sm: 607,
  //     md: 960,
  //     lg: 1230,
  //     xl: 1920,
  //   },
  // },
  typography: {
    htmlFontSize: 16,
    fontSize: 16,
    fontFamily: [
      "Roboto",
      "sans-serif",
      "Open Sans",
      "Arial",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      '"Helvetica Neue"',
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    h1: {
      fontFamily: "Roboto,sans-serif",
      fontSize: "3.375rem", // 54px
      fontWeight: 600,
      lineHeight: "72px",
    },
    h2: {
      fontFamily: "Roboto,sans-serif",
      fontSize: "1.875rem", // 30px
      fontWeight: 600,
      lineHeight: "42px",
    },
    h3: {
      fontFamily: "Roboto,sans-serif",
      fontSize: "1.5rem", // 24px
      fontWeight: "bold",
      lineHeight: "32px",
    },
    h4: {
      fontFamily: "Roboto,sans-serif",
      fontSize: "1.25rem", // 20px
      fontWeight: "bold",
      lineHeight: "28px",
      "@media (max-width:600px)": {
        fontSize: "1rem", // 16px
        lineHeight: "24px",
      },
    },
    body1: {
      fontFamily: "Roboto,sans-serif",
      fontSize: "1rem", // 16px
      lineHeight: "24px",
      "@media (max-width:600px)": {
        fontSize: "0.875rem", // 14px
        lineHeight: "21px",
      },
    },
    body2: {
      fontFamily: "Roboto,sans-serif",
      fontSize: "1rem", // 16px
      fontWeight: "bold",
      lineHeight: "24px",
      "@media (max-width:600px)": {
        fontSize: "0.875rem", // 14px
        lineHeight: "21px",
      },
    },
    subtitle1: {
      fontFamily: "Roboto,sans-serif",
      fontSize: "0.875rem", // 14px
      "@media (max-width:600px)": {
        fontSize: "0.75rem", // 12px
        lineHeight: "18px",
      },
    },
    subtitle2: {
      fontFamily: "Roboto,sans-serif",
      fontSize: "0.875rem", // 14px
      fontWeight: "bold",
      "@media (max-width:600px)": {
        fontSize: "0.75rem", // 12px
        lineHeight: "18px",
      },
    },
    caption: {
      fontFamily: "Roboto,sans-serif",
      fontSize: "0.75rem", // 12px
      fontWeight: 600,
      lineHeight: "19.5px",
    },
  },
});

export const lightTheme = createTheme(theme, {
  components: LightOverrides,
  palette: {
    mode: "light",
    primary: {
      light: "#b22322",
      main: "#FF3331",
      dark: "#ff5b5a",
    },
    warning: {
      light: "#b22322",
      main: "#00BF63",
      dark: "#ff5b5a",
    },
    secondary: {
      light: "#bbbbbb",
      main: "#AAAAAA",
      dark: "#767676",
      contrastText: "#ffffff",
    },
    info: {
      main: "#1bb2f1",
    },
    success: {
      main: "#008000",
    },
    error: {
      main: "#D70000",
    },
    text: {
      primary: "#1E1E1E",
      secondary: "#525252",
      disabled: "#BFBFBF",
      light: "#ffffff",
    },
    background: {
      paper: "#F3F7EC",
      default: "white",
      contrastdark: "#E88D67",
      dark: "#005C78",
      semidark: "#006989",
    },
    grey: {
      50: "#FFFFFF",
      100: "#ECECEC",
      200: "#E0E0E0",
      300: "#FBFBFB",
      400: "#EAEAEA",
      600: "#525252",
      900: "#1E1E1E",
    },
    action: {
      disabled: "#fff",
      disabledBackground: "#BFBFBF",
      disabledOpacity: 1,
    },
  },
});

export const darkTheme = createTheme(theme, {
  components: DarkOverrides,
  palette: {
    mode: "dark",
    primary: {
      light: "#b22322",
      main: "#FF3331",
      dark: "#ff5b5a",
    },
    secondary: {
      light: "#bbbbbb",
      main: "#AAAAAA",
      dark: "#767676",
      contrastText: "#ffffff",
    },
    info: {
      main: "#1bb2f1",
    },
    success: {
      main: "#008000",
    },
    error: {
      main: "#D70000",
    },
    text: {
      primary: "#ffffff",
      secondary: "rgba(143, 150, 172, 1)",
      disabled: "#525252",
    },
    background: {
      paper: "#434343",
      default: "#1E1E1E",
    },
    grey: {
      100: "#101214",
      200: "#E0E0E0",
      300: "#FBFBFB",
      400: "#ffffff42",
      600: "#ffffff",
      900: "#1E1E1E",
    },
    action: {
      disabled: "#fff",
      disabledBackground: "#525252",
      disabledOpacity: 0.5,
    },
  },
});
