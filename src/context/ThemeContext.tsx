import { ReactNode, createContext, useState } from "react";

interface ScreenModeProp {
  screenMode: "dark" | "light";
  handleScreenModeChange: (screenMode: string) => void;
}

export const ScreenModeContext = createContext<ScreenModeProp | undefined>(
  undefined
);

export const ScreenModeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [screenMode, setScreenMode] = useState<"dark" | "light">("light");
  const handleScreenModeChange = (screenMode: string) => {
    setScreenMode(screenMode);
  };
  return (
    <ScreenModeContext.Provider value={{ screenMode, handleScreenModeChange }}>
      {children}
    </ScreenModeContext.Provider>
  );
};
