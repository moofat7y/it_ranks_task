import * as React from "react";

import { Button, Divider, Stack, Typography } from "@mui/material";
import callender from "../../../assets/icons/header/callender.png";
import { weatherContext } from "../../../store/context/WeatherProvider";
import { timeContext } from "../../../store/context/TimeProvide";
import { convertToCelsius } from "../../../utils/helpers";
import { useNavigate } from "react-router-dom";

export default function WeatherCard() {
  const { weather } = React.useContext(weatherContext);
  const { time } = React.useContext(timeContext);
  const navigate = useNavigate();

  const min_deg = convertToCelsius(weather[0]?.main?.temp_min);
  const max_deg = convertToCelsius(weather[0]?.main?.temp_max);
  return (
    <Button
      sx={{
        position: "absolute",
        top: {
          xs: "170px",
          md: "33px",
        },
        left: "50%",
        transform: "translateX(-50%)",
        padding: "10px",
        borderRadius: "6px",
        backgroundColor: "#FFFFFF30",
        boxShadow: "none",
        backdropFilter: "blur(8px)",
        color: "white",
        zIndex: "1300",
      }}
      onClick={() => navigate("?weather=true")}
    >
      <Stack
        direction="row"
        divider={
          <Divider
            sx={{ backgroundColor: "white", marginX: "15px" }}
            orientation="vertical"
            flexItem
          />
        }
      >
        <div>
          <div style={{ display: "flex", gap: "30px", alignItems: "center" }}>
            <Typography
              variant="caption"
              sx={{ fontWeight: "700", fontSize: "16px" }}
            >
              التقويم
            </Typography>
            <img
              style={{ objectFit: "contain" }}
              src={callender}
              width={24}
              height={24}
              alt=""
            />
          </div>
          <Typography sx={{ fontWeight: "400" }}>{time?.arabicDate}</Typography>
        </div>
        <div>
          <div style={{ display: "flex", gap: "30px", alignItems: "center" }}>
            <Typography
              variant="caption"
              sx={{ fontWeight: "700", fontSize: "16px" }}
            >
              الطقس
            </Typography>
            {weather[0]?.weather[0]?.icon && (
              <img
                style={{ objectFit: "contain" }}
                src={`http://openweathermap.org/img/w/${weather[0]?.weather[0]?.icon}.png`}
                width={24}
                height={24}
                alt="weather icon"
              />
            )}
          </div>
          <Typography sx={{ fontWeight: "400" }}>
            {min_deg} <sup>o</sup> / {max_deg} <sup>o</sup>
          </Typography>
        </div>
      </Stack>
    </Button>
  );
}
