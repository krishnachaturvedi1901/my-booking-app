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
import { routes } from "../../constants/route";

const serviceItems = [
  { title: "Sign in/Sign up", route: routes.login, icon: <LanguageIcon /> },
  { title: "Search Buses", route: routes.home, icon: <HomeIcon /> },
  { title: "Offers", route: routes.offers, icon: <LocalOfferIcon /> },
  { title: "Cancel Ticket", route: routes.cancellation, icon: <CancelIcon /> },
  {
    title: "Reschedule Ticket",
    route: routes.reschedule,
    icon: <UpdateIcon />,
  },
  {
    title: "Show My Ticket",
    route: routes.displayTicket,
    icon: <ConfirmationNumberIcon />,
  },
  { title: "Email/SMS", route: routes.smsEmailTicket, icon: <EmailIcon /> },
  { title: "Settings", route: routes.settings, icon: <SettingsIcon /> },
];

export default function Sidebar() {
  const theme = useTheme();
  const navigate = useNavigate();
  const [state, setState] = React.useState({
    left: false,
  });

  // Language switch state
  const languageContext = useContext(LanguageContext);
  if (!languageContext) return null;
  const { language, handleLanguageChange } = languageContext;
  const [screenMode, setScreenMode] = React.useState("light");

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
    handleLanguageChange(event.target.checked ? "hi" : "en");
  };
  const handleScreenModeSwitch = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setScreenMode(event.target.checked ? "dark" : "light");
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
      <Box display="flex" justifyContent="center" alignItems="center" p={1}>
        <Switch
          checked={language === "hi"}
          onChange={handleLanguageSwitch}
          inputProps={{ "aria-label": "Language Switch" }}
        />
        <ListItemText secondary={language === "hi" ? "हिंदी" : "English"} />
      </Box>
      {/* Darkmode switch */}
      <Box display="flex" justifyContent="center" alignItems="center" p={1}>
        <Switch
          checked={screenMode === "dark"}
          onChange={handleScreenModeSwitch}
          inputProps={{ "aria-label": "Language Switch" }}
        />
        <ListItemText primary={screenMode === "dark" ? "Dark" : "Light"} />
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
