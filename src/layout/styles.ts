import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const LayoutWrapper = styled(Box)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontSize: theme.typography.fontSize,
  padding: 0,
  margin: 0,
  background: "white",
  color: theme.palette.text.primary,

  [theme.breakpoints.up("md")]: {
    paddingBottom: "0",
  },
}));

export const PageWrapper = styled(Box)(({ theme }) => ({
  paddingTop: theme.navHeight.maxHeight + 20,
  paddingRight: "1rem",
  paddingLeft: "1rem",
  margin: 0,
  background: theme.palette.background.paper,
  color: theme.palette.text.primary,
}));
