import React from "react";
import { LayoutWrapper, PageWrapper } from "./styles";
import { Box } from "@mui/material";
import WebNavbar from "./WebNavbar";
import Footer from "./Footer";

interface LayoutProp {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProp> = ({ children }) => {
  return (
    <LayoutWrapper>
      <WebNavbar />
      <PageWrapper>{children}</PageWrapper>
      <Footer />
    </LayoutWrapper>
  );
};

export default Layout;
