import { createContext, useEffect, useState } from "react";
import weatherService from "../services/weatherService";

export const weatherContext = createContext();
export const WeatherProvider = ({ children }) => {
  const [weather, setWeather] = useState([]);
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async function (position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const weather = await weatherService.getWeather(latitude, longitude);
        const weatherList = [];
        for (let i = 0; i < weather.list.length; i += 8) {
          const day = new Date(weather.list[i].dt_txt).toLocaleDateString(
            `${document.dir === "ltr" ? "en-US" : "ar"}`,
            {
              weekday: "long",
            }
          );
          weatherList.push({ ...weather.list[i], day });
        }
        setWeather(weatherList);
      });
    } else {
      console.log("An err happend");
    }
  }, []);

  return (
    <weatherContext.Provider value={{ weather }}>
      {children}
    </weatherContext.Provider>
  );
};
