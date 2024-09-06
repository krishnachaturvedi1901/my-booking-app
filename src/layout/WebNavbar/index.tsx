import React, { useContext, useState } from "react";
import { NavWrapper } from "./styles";
import { Link, useNavigate } from "@tanstack/react-router";
import {
  Box,
  Typography,
  Menu,
  MenuItem,
  IconButton,
  Divider,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Sidebar from "../Sidebar";
import { routes } from "../../constants/route";
import { LanguageContext } from "../../context/LanguageContext";

const accountItems = [
  { title: "Cancel Ticket", route: routes.cancellation },
  { title: "Change Travel Date", route: routes.reschedule },
  { title: "Show My Ticket", route: routes.displayTicket },
  { title: "Email/SMS", route: routes.smsEmailTicket },
];

const WebNavbar: React.FC = () => {
  const languageContext = useContext(LanguageContext);
  if (!languageContext) return null;
  const { language, handleLanguageChange } = languageContext;
  const navigate = useNavigate();
  const theme = useTheme();
  // Media query that matches when the screen width is below 'sm' (600px)
  const isBelowSm = useMediaQuery(theme.breakpoints.down("sm"));

  const [languageAnchorEl, setLanguageAnchorEl] = useState<null | HTMLElement>(
    null
  );
  const [accountAnchorEl, setAccountAnchorEl] = useState<null | HTMLElement>(
    null
  );

  const handleLanguageClick = (event: React.MouseEvent<HTMLElement>) => {
    console.log("event.currentTar", event.currentTarget);
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
    handleLanguageChange(language);
    handleCloseLanguageMenu();
  };

  return (
    <NavWrapper>
      <Box sx={{ display: "flex", gap: 4, alignItems: "center" }}>
        {isBelowSm && <Sidebar />}
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
        {!isBelowSm && (
          <IconButton onClick={handleLanguageClick}>
            <LanguageIcon />
            {language}
          </IconButton>
        )}
        <Menu
          anchorEl={languageAnchorEl}
          open={Boolean(languageAnchorEl)}
          onClose={handleCloseLanguageMenu}
        >
          <MenuItem onClick={() => changeLanguage("en")}>English</MenuItem>
          <MenuItem onClick={() => changeLanguage("hi")}>हिंदी</MenuItem>
        </Menu>

        {!isBelowSm && (
          <IconButton onClick={handleAccountClick}>
            <AccountCircle />
          </IconButton>
        )}
        <Menu
          anchorEl={accountAnchorEl}
          open={Boolean(accountAnchorEl)}
          onClose={handleCloseAccountMenu}
        >
          {accountItems?.map((item) => {
            return (
              <MenuItem
                key={item.route}
                onClick={() => {
                  handleCloseAccountMenu();
                  navigate({ to: item?.route });
                }}
              >
                {item.title}
              </MenuItem>
            );
          })}
          <Divider />
          <MenuItem onClick={() => handleCloseAccountMenu()}>
            Login/Signup
          </MenuItem>
        </Menu>
      </Box>
    </NavWrapper>
  );
};

export default WebNavbar;
