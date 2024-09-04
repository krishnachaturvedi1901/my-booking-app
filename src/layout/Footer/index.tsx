import { Box, Typography } from "@mui/material";
import React from "react";
import { FooterWrapper } from "./styles";

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <Typography variant="body2" color="text.secondary" align="center">
        Iam footer
      </Typography>
    </FooterWrapper>
  );
};

export default Footer;
