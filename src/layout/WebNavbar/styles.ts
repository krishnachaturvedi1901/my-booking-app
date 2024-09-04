import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const NavWrapper = styled(Box)(({ theme }) => ({
  padding: "1rem",
  margin: 0,
  background: theme.palette.background.dark,

  // background: theme.palette.background.default,
  color: theme.palette.text.light,
  height: "100%",
  display: "flex",
  justifyContent: "space-between",
}));
