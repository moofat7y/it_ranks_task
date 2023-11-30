import { Stack, Typography } from "@mui/material";
import React from "react";
import searchI from "../../assets/icons/side-bar/search.png";
import folderI from "../../assets/icons/side-bar/folder.png";

export default function SideMenu() {
  return (
    <Stack
      spacing={2}
      sx={{
        position: "absolute",
        right: "0px",
        width: "60px",
        top: "50%",
        transform: "translateY(-50%)",
        padding: "10px 10px 35px",
        borderTopLeftRadius: "12px",
        borderBottomLeftRadius: "12px",
        backgroundColor: "#FFFFFF10",
        backdropFilter: "blur(8px)",
      }}
      direction={"column"}
      alignItems={"center"}
    >
      <img
        src={searchI}
        style={{ objectFit: "contain" }}
        width={18}
        height={18}
        alt=""
      />

      <Typography sx={{ fontSize: { xs: "12px", md: "16px" } }}>
        الخدمات الذاتيه
      </Typography>

      <Stack
        spacing={3}
        direction={"column"}
        alignItems={"center"}
        sx={{ width: "100%" }}
      >
        <img
          src={folderI}
          style={{ objectFit: "contain" }}
          width={32}
          height={26}
          alt=""
        />
        <img
          src={folderI}
          style={{ objectFit: "contain" }}
          width={32}
          height={26}
          alt=""
        />
        <img
          src={folderI}
          style={{ objectFit: "contain" }}
          width={32}
          height={26}
          alt=""
        />
        <img
          src={folderI}
          style={{ objectFit: "contain" }}
          width={32}
          height={26}
          alt=""
        />
      </Stack>
    </Stack>
  );
}
