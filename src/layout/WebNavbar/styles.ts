import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const NavWrapper = styled(Box)(({ theme }) => ({
  padding: "0.5rem 1rem 0.5rem 1rem",
  margin: 0,
  background: theme.palette.background.default,

  // background: theme.palette.background.default,
  color: theme.palette.text.light,
  height: theme.navHeight.maxHeight,
  display: "flex",
  justifyContent: "space-between",
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  width: "auto",
  zIndex: 10000000,
}));
