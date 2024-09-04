import React from "react";
import { LayoutWrapper, PageWrapper } from "./styles";
import MobileNavbar from "./MobileNavbar";
import { Box, Container } from "@mui/material";
import WebNavbar from "./WebNavbar";
import Footer from "./Footer";

interface LayoutProp {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProp> = ({ children }) => {
  return (
    <LayoutWrapper>
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <MobileNavbar />
      </Box>
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <WebNavbar />
      </Box>
      <PageWrapper>{children}</PageWrapper>
      <Footer />
    </LayoutWrapper>
  );
};

export default Layout;
