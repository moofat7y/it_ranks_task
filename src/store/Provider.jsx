import React from "react";
import { BackGroundContextProvider } from "./context/BackGroundContextProvider";
import { NewsContextProvider } from "./context/NewsProvider";
import { WeatherProvider } from "./context/WeatherProvider";
import { TimeProvider } from "./context/TimeProvide";

export default function Provider({ children }) {
  return (
    <WeatherProvider>
      <TimeProvider>
        <NewsContextProvider>
          <BackGroundContextProvider>{children}</BackGroundContextProvider>
        </NewsContextProvider>
      </TimeProvider>
    </WeatherProvider>
  );
}
