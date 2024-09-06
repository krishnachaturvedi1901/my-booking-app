import { ReactNode, createContext, useState } from "react";
import { useTranslation } from "react-i18next";

export interface LanguageContextProp {
  language: string;
  handleLanguageChange: (lang: string) => void;
}

export const LanguageContext = createContext<LanguageContextProp | undefined>(
  undefined
);

interface LanguageProviderProp {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProp> = ({
  children,
}) => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState<string>("en");
  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    i18n.changeLanguage(lang);
  };
  console.log("language in context-", language);
  return (
    <LanguageContext.Provider value={{ language, handleLanguageChange }}>
      {children}
    </LanguageContext.Provider>
  );
};
