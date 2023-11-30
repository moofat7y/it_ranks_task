import { createContext, useEffect, useState } from "react";
import { handleDate } from "../../utils/helpers";

export const timeContext = createContext();

export const TimeProvider = ({ children }) => {
  const [time, setTime] = useState(handleDate(new Date()));
  const [newTime, setNewTime] = useState(null);

  useEffect(() => {
    if (newTime) {
      setTime(handleDate(newTime));
    }
  }, [newTime]);
  return (
    <timeContext.Provider value={{ time, setNewTime }}>
      {children}
    </timeContext.Provider>
  );
};
