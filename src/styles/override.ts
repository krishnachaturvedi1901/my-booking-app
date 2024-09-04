import { ThemeOptions } from "@mui/material/styles";

/* Override ⚛️ components*/
export const LightOverrides: ThemeOptions["components"] = {
  MuiTypography: {
    styleOverrides: {
      root: {
        fontFamily: "poppins, sans-serif !important",
        fontWeight: 600,
      },
    },
  },

  MuiPaper: {
    styleOverrides: {
      root: {
        boxShadow: "0px 6px 16px rgb(0 0 0 / 12%) !important",
        elevation: 1,
      },
    },
  },
  MuiButton: {
    styleOverrides: {
      root: {
        textTransform: "unset",
        whiteSpace: "nowrap",
        fontWeight: "bold",

        "&:hover": {
          // background: '#FF3331',
          filter: "brightness(0.94)",
        },
      },
      sizeLarge: {
        height: 48,
      },
      text: {
        color: "#1E1E1E",
      },
      contained: {
        transition: "none",
        boxShadow: "0px 6px 10px rgba(30, 30, 30, 0.3)",
        background: "#1e1e1e",
        "&:hover": {
          background: "linear-gradient(90deg, #FF3331 0%, #CA003B 100%)",
          boxShadow: "0px 6px 10px rgba(202, 0, 59, 0.3)",
        },
        "&:active": {
          background: "#CA003B",
          boxShadow: "unset",
        },
        "&.Mui-disabled": {
          color: "#525252",
        },
      },
      containedSecondary: {
        background: "#fff",
        color: "#1e1e1e",
        "&:hover": {
          background: "#fff",
          color: "#1e1e1e",
          filter: "brightness(0.9)",
        },
        "&:active": {
          filter: "brightness(0.9)",
        },
        "&.Mui-disabled": {
          background: "rgba(82, 82, 82, 0.5)",
          color: "#BFBFBF",
        },
      },
      outlined: {
        border: "1px solid #fff",
        background: "transparent",
        color: "#fff",

        "&:hover": {
          background: "#fff",
          border: "1px solid #fff",
          color: "#1e1e1e",
        },
        "&:active": {
          background: "#fff",
          border: "1px solid #fff",
        },
        "&.Mui-disabled": {
          color: "#525252",
          cursor: "not-allowed",
        },
        "&.Mui-disabled *": {
          color: "rgba(82,82,82,0.5)",
        },
      },
      outlinedSecondary: {
        border: "1px solid #1E1E1E",
        color: "#1E1E1E",
        background: "transparent",
        "&:hover": {
          background: "transparent",
          border: "1px solid #FF3331",
          color: "#FF3331",
        },
        "&:active": {
          background: "rgba(255, 51, 49, 0.1)",
          border: "1px solid #FF3331",
        },
        "&.Mui-disabled": {
          color: "#525252",
          cursor: "not-allowed",
        },
        "&.Mui-disabled *": {
          color: "rgba(82,82,82,0.5)",
        },
      },
    },
  },
  MuiInputLabel: {
    styleOverrides: {
      root: {
        fontWeight: "bold",
        fontSize: 14,
        lineHeight: "21px",

        "&.Mui-focused": {
          color: "#525252",
        },
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        borderRadius: 5,
      },
      input: {
        paddingTop: 12.5,
        paddingBottom: 12.5,
        paddingLeft: 13,
      },
      adornedEnd: {
        paddingRight: 0,
      },
    },
  },

  MuiTableBody: {
    styleOverrides: {
      root: {
        "& .MuiTableCell-body": {
          fontSize: "14px !important",
          fontFamily: "poppins,sans-serif",
          fontWeight: 600,
        },
      },
    },
  },

  //un-comment to get blur on clicking More menu button

  // MuiBackdrop: {
  //   styleOverrides: {
  //     root: {
  //       backdropFilter: `blur(3px)`,
  //     },
  //   },
  // },
  MuiFormLabel: {
    styleOverrides: {
      asterisk: {
        color: "#FF3331",
        "&$error": {
          color: "#FF3331",
        },
      },
    },
  },
  MuiFilledInput: {
    styleOverrides: {
      root: {
        height: "40px",
        width: "100%",
        borderRadius: "5px",
        background: "#F5F5F5",

        "& input": {
          padding: "13px 18px",
          color: "#525252",
          textFillColor: "unset !important",
        },

        "&.Mui-focused": {
          borderRadius: "10px",
        },

        "& .MuiSelect-filled": {
          background: "transparent !important",
          border: "none",
          paddingTop: "8px",
          opacity: 0.7,
        },

        "&:before, &:after": {
          border: "none !important",
        },
      },
    },
  },
};
