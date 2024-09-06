import React from "react";
import { HomeWrapper } from "./styles";
import { useTranslation } from "react-i18next";
import { Typography } from "@mui/material";

const Homepage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <HomeWrapper>
      <Typography variant="h1">{t("home.welcome")}</Typography>
      <Typography variant="body1" sx={{ marginTop: 2 }}>
        {t("home.description")}
      </Typography>
    </HomeWrapper>
  );
};

export default Homepage;
