import React from "react";
import { Box, Stack } from "@mui/material";

const ThirdPartyAuth: React.FC = () => {
  return (
    <Stack sx={{ width: { xs: "100%", sm: "50%" }, margin: " 10px auto" }}>
      <Box
        sx={{
          width: 230,
          height: 40,
          borderRadius: 5,
          border: "none",
          outline: "none",
          backgroundColor: "white",
          boxShadow:
            "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)",
          fontSize: 16,
          fontWeight: 500,
          margin: "0 auto 15px",
          color: "#2c444e",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
        onClick={() => {
          // window.open(`${config.api_url}/auth/google`, "_self");
        }}
      >
        <img
          src="./images/google.png"
          alt="google icon"
          style={{
            width: 30,
            height: 30,
            objectFit: "cover",
            marginRight: 10,
          }}
        />
        <span
          style={{
            marginLeft: 10,
            fontSize: 16,
            fontWeight: 500,
            color: "#2c444e",
          }}
        >
          Sign in with Google
        </span>
      </Box>
      <Box
        sx={{
          position: "relative",
          margin: "0.2em",
          padding: "5px 40px",
          border: "none",
          textAlign: "center",
          lineHeight: "34px",
          whiteSpace: "nowrap",
          borderRadius: "0.2em",
          fontSize: 16,
          color: "#FFF",
          backgroundColor: "#4C69BA",
          backgroundImage: "linear-gradient(#4C69BA, #3B55A0)",
          textShadow: "0 -1px 0 #354C8C",
          "&:before": {
            content: "''",
            boxSizing: "border-box",
            position: "absolute",
            top: 0,
            left: 0,
            width: 34,
            height: "100%",
            borderRight: "#364e92 1px solid",
            background:
              "url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_facebook.png') 6px 6px no-repeat",
          },
          "&:hover, &:focus": {
            cursor: "pointer",
            backgroundColor: "#5B7BD5",
            backgroundImage: "linear-gradient(#5B7BD5, #4864B1)",
          },
        }}
        onClick={() => {
          // window.open(`${config.api_url}/auth/facebook`, "_self");
        }}
      >
        Signin with Facebook
      </Box>
    </Stack>
  );
};

export default ThirdPartyAuth;
