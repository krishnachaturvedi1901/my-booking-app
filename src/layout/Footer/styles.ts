import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const FooterWrapper = styled(Box)(({ theme }) => ({
  padding: "1rem",
  margin: 0,
  background: theme.palette.background.contrastdark,

  // background: theme.palette.background.default,
  color: theme.palette.text.primary,
  height: "100%",
}));
