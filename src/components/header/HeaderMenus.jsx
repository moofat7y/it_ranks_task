import React from "react";
import IconButton from "@mui/material/IconButton";
import { Box, Stack, Avatar, Typography } from "@mui/material";

import newsI from "../../assets/icons/header/news.png";
import profileI from "../../assets/icons/header/profile.png";
import arrow from "../../assets/icons/header/arrow.png";
import NewsListToggler from "./NewsListToggler";
import BackGroundCardToggler from "./BackGroundCardToggler";
export default function HeaderMenus() {
  return (
    <>
      <Stack
        sx={{
          gap: { xs: "15px", md: "25px" },
          flexDirection: { xs: "column", lg: "row" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            borderRadius: "26px",
            padding: "4px 8px",
            width: "166px",
            height: "40px",
            backgroundColor: "#FFFFFF20",
            backdropFilter: "blur(8px)",
          }}
        >
          <Avatar
            sx={{ marginLeft: "10px", width: 32, height: 32 }}
            src={profileI}
          />
          <Typography lineHeight={1}>عمر الالفي</Typography>
          <img
            style={{ objectFit: "contain", marginRight: "15px" }}
            width={11}
            height={6}
            src={arrow}
            alt=""
          />
        </Box>

        <Box sx={{ display: "flex", gap: "25px" }}>
          <BackGroundCardToggler />

          <NewsListToggler />

          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{
              backgroundColor: "#FFFFFF20",
              backdropFilter: "blur(8px)",
              width: "40px",
              height: "40px",
            }}
          >
            <img
              width={24}
              height={24}
              style={{ objectFit: "contain" }}
              src={newsI}
            />
          </IconButton>
        </Box>
      </Stack>
    </>
  );
}
