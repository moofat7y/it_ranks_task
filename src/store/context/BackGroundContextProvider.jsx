import { createContext, useEffect, useState } from "react";
import { bgImgsConfig } from "../../utils/config";

export const BgContext = createContext();

export const BackGroundContextProvider = ({ children }) => {
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    document.body.style.backgroundImage = `url(${bgImgsConfig[bgIndex]})`;
  }, [bgIndex]);

  return (
    <BgContext.Provider value={{ bgIndex, setBgIndex }}>
      {children}
    </BgContext.Provider>
  );
};
