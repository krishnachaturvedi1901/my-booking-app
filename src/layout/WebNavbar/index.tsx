import React, { useState } from "react";
import { NavWrapper } from "./styles";
import { Link } from "@tanstack/react-router";
import { Box, Typography, Menu, MenuItem, IconButton } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import AccountCircle from "@mui/icons-material/AccountCircle";

const WebNavbar: React.FC = () => {
  const [languageAnchorEl, setLanguageAnchorEl] = useState<null | HTMLElement>(
    null
  );
  const [accountAnchorEl, setAccountAnchorEl] = useState<null | HTMLElement>(
    null
  );

  const handleLanguageClick = (event: React.MouseEvent<HTMLElement>) => {
    setLanguageAnchorEl(event.currentTarget);
  };

  const handleAccountClick = (event: React.MouseEvent<HTMLElement>) => {
    setAccountAnchorEl(event.currentTarget);
  };

  const handleCloseLanguageMenu = () => {
    setLanguageAnchorEl(null);
  };

  const handleCloseAccountMenu = () => {
    setAccountAnchorEl(null);
  };

  const changeLanguage = (language: string) => {
    console.log(`Language changed to: ${language}`);
    handleCloseLanguageMenu();
  };

  return (
    <NavWrapper>
      <Box sx={{ display: "flex", gap: 4, alignItems: "center" }}>
        <Link to="/">
          <img
            src="/images/bus.png"
            height={"50px"}
            width={"50px"}
            alt="Logo"
          />
        </Link>
        <Typography variant="h6">My-Booking-App</Typography>
      </Box>
      <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
        <IconButton onClick={handleLanguageClick}>
          <LanguageIcon />
        </IconButton>
        <Menu
          anchorEl={languageAnchorEl}
          open={Boolean(languageAnchorEl)}
          onClose={handleCloseLanguageMenu}
        >
          <MenuItem onClick={() => changeLanguage("English")}>English</MenuItem>
          <MenuItem onClick={() => changeLanguage("Hindi")}>Hindi</MenuItem>
        </Menu>

        <IconButton onClick={handleAccountClick}>
          <AccountCircle />
        </IconButton>
        <Menu
          anchorEl={accountAnchorEl}
          open={Boolean(accountAnchorEl)}
          onClose={handleCloseAccountMenu}
        >
          <MenuItem onClick={handleCloseAccountMenu}>Profile</MenuItem>
          <MenuItem onClick={handleCloseAccountMenu}>Logout</MenuItem>
        </Menu>
      </Box>
    </NavWrapper>
  );
};

export default WebNavbar;
