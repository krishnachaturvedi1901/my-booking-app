import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const LayoutWrapper = styled("main")(({ theme }) => ({
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
  margin: 0,
  background: theme.palette.background.paper,
  color: theme.palette.text.primary,
}));
