import React, { useContext, useState } from "react";
import { Box, Button, Card, CardActionArea, Typography } from "@mui/material";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { BgContext } from "../../store/context/BackGroundContextProvider";
import { bgImgsConfig } from "../../utils/config";
export default function BackGroundChanger({ setOpen }) {
  const { bgIndex, setBgIndex } = useContext(BgContext);
  const [selectedBg, setSelectedBg] = useState(bgIndex);

  const bgList = bgImgsConfig.map((item, index) => {
    return (
      <SwiperSlide key={index}>
        <CardActionArea
          onClick={() => setSelectedBg(index)}
          sx={{
            // width: "100%",
            height: "70px",
            borderRadius: "4px",
            overflow: "hidden",
            border: `2px solid ${index === selectedBg ? "#06BE8E" : "white"}`,
          }}
        >
          <img
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            src={item}
            alt=""
          />
        </CardActionArea>
      </SwiperSlide>
    );
  });
  return (
    <Card
      sx={{
        position: {
          xs: "fixed",
          md: "absolute",
        },
        display: "flex",
        flexDirection: "column",
        right: {
          xs: "50%",
          md: "0px",
        },
        top: {
          xs: "50%",
          md: "50px",
        },
        transform: {
          xs: "translate(50%,-50%)",
          md: "translate(0,0)",
        },
        width: {
          xs: "99%",
          sm: "80%",
          md: "428px",
        },
        height: "250px",
        backgroundColor: "#F1F5F9",
        padding: "12px",
        borderRadius: "20px",
        zIndex: "20",
      }}
    >
      <Typography fontSize={"22px"}>الخلفيات</Typography>

      <Swiper
        style={{ marginTop: "15px", width: "100%" }}
        breakpoints={{
          0: {
            slidesPerView: 3,
          },
          422: {
            slidesPerView: 4,
          },
          667: {
            slidesPerView: 4,
          },
        }}
        spaceBetween={4}
      >
        {bgList}
      </Swiper>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginTop: "auto",
        }}
      >
        <Button
          onClick={() => setBgIndex(selectedBg)}
          fullWidth={true}
          variant="contained"
        >
          تعيين
        </Button>
        <Button
          onClick={() => setOpen(false)}
          color="info"
          fullWidth={true}
          variant="text"
        >
          الغاء
        </Button>
      </Box>
    </Card>
  );
}
