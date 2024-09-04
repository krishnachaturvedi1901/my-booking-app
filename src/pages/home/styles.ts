import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const HomeWrapper = styled(Box)(({ theme }) => ({
  background: theme.palette.background.paper,
  color: theme.palette.text.primary,
  height: "48vh",
}));
