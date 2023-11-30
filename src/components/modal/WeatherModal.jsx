import { Box, Dialog, DialogContent, Stack, Typography } from "@mui/material";
import React, { useContext } from "react";
import { useSearchParams } from "react-router-dom";
import { weatherContext } from "../../store/context/WeatherProvider";
import { convertToCelsius } from "../../utils/helpers";
export default function WeatherModal() {
  const { weather } = useContext(weatherContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const open = searchParams.get("weather") ? true : false;

  console.log(weather);

  const handleClose = () => setSearchParams("");

  const weatherList = weather.map((item, index) => {
    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "280px",
        }}
        key={index}
      >
        <Typography
          sx={{
            color: "#415D5F",
            width: "50px",
            fontSize: "15px",
            fontWeight: "400",
          }}
        >
          {item.day}
        </Typography>

        <img
          style={{ objectFit: "contain" }}
          src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`}
          width={24}
          height={24}
          alt="weather icon"
        />

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            width: "150px",
          }}
        >
          <Typography
            sx={{
              width: "25px",
              color: "#378AD7",
              fontWeight: "700",
              fontSize: "16px",
            }}
          >
            {convertToCelsius(item.main.temp_min)}
            <sup>o</sup>
          </Typography>
          <div
            style={{
              height: "4px",
              width: "70px",
              background:
                "linear-gradient(90deg, #FFC47E 24.85%, #FF5858 60.9%)",
              borderRadius: "10px",
            }}
          ></div>
          <Typography
            sx={{ width: "25px", fontWeight: "700", fontSize: "16px" }}
          >
            {convertToCelsius(item.main.temp_min)}
            <sup>o</sup>
          </Typography>
        </Box>
      </Box>
    );
  });
  return (
    <Dialog
      PaperProps={{
        sx: {
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0.78) 0%, rgba(237, 240, 255, 0.78) 100%)",
          backdropFilter: "blur(15px)",
          padding: "12px",
          borderRadius: "20px !important",
        },
      }}
      onClose={handleClose}
      open={open}
    >
      <DialogContent>
        <Stack spacing={2}>{weatherList}</Stack>
      </DialogContent>
    </Dialog>
  );
}
