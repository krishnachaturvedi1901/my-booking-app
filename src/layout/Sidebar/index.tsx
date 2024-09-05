import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import LanguageIcon from "@mui/icons-material/Language";
import HomeIcon from "@mui/icons-material/Home";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import CancelIcon from "@mui/icons-material/Cancel";
import UpdateIcon from "@mui/icons-material/Update";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import EmailIcon from "@mui/icons-material/Email";
import SettingsIcon from "@mui/icons-material/Settings";
import Switch from "@mui/material/Switch";
import { useNavigate } from "@tanstack/react-router";
import { useTheme } from "@mui/material";

const serviceItems = [
  { title: "Sign in/Sign up", route: "/login", icon: <LanguageIcon /> },
  { title: "Search Buses", route: "/", icon: <HomeIcon /> },
  { title: "Offers", route: "/offers", icon: <LocalOfferIcon /> },
  { title: "Cancel Ticket", route: "/cancellation", icon: <CancelIcon /> },
  { title: "Reschedule Ticket", route: "/reschedule", icon: <UpdateIcon /> },
  {
    title: "Show My Ticket",
    route: "/displayTicket",
    icon: <ConfirmationNumberIcon />,
  },
  { title: "Email/SMS", route: "/smsEmailTicket", icon: <EmailIcon /> },
  { title: "Settings", route: "/settings", icon: <SettingsIcon /> },
];

export default function Sidebar() {
  const theme = useTheme();
  const navigate = useNavigate();
  const [state, setState] = React.useState({
    left: false,
  });

  // Language switch state
  const [language, setLanguage] = React.useState("English");

  const toggleDrawer =
    (anchor: "left", open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setState({ ...state, [anchor]: open });
    };

  const handleLanguageSwitch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLanguage(event.target.checked ? "Hindi" : "English");
  };

  const list = (anchor: "left") => (
    <Box
      sx={{ width: 250, paddingTop: `${theme.navHeight.maxHeight + 10}px` }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {/* Navigation Items */}
      <List>
        {serviceItems.map((item) => (
          <ListItem key={item.title} disablePadding>
            <ListItemButton onClick={() => navigate({ to: item.route })}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider />

      {/* Language Switcher */}
      <Box display="flex" justifyContent="center" alignItems="center" p={2}>
        <LanguageIcon />
        <Switch
          checked={language === "Hindi"}
          onChange={handleLanguageSwitch}
          inputProps={{ "aria-label": "Language Switch" }}
        />
        <ListItemText primary={language} />
      </Box>
    </Box>
  );

  return (
    <div>
      {(["left"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <MenuIcon />
          </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
