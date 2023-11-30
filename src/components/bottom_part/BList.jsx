import { Box, Typography } from "@mui/material";
import React from "react";

import taskI from "../../assets/icons/nav/tasks.png";
import { socialLinks } from "../../utils/config";
export default function BList() {
  const socialLinksList = socialLinks.map((item, index) => {
    return (
      <a
        key={index}
        href={item.href}
        style={{
          padding: "7px 7px",
          borderRadius: "4px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#19373F",
        }}
      >
        <img
          width={19}
          height={19}
          style={{ objectFit: "contain" }}
          src={item.icon}
        />
      </a>
    );
  });
  return (
    <Box
      sx={{
        position: "fixed",
        gap: {
          xs: "12px",
          md: "0px",
        },
        bottom: "30px",
        padding: {
          xs: "0px 20px 90px",
          md: "0px 48px",
        },
        left: "0px",
        zIndex: "3",
        width: {
          xs: "80px",
          md: "100%",
        },
        display: "flex",
        flexDirection: {
          xs: "column",
          md: "row",
        },
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: {
            xs: "12px",
            md: "24px",
          },
        }}
      >
        {socialLinksList}
      </Box>

      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <img
          style={{ objectFit: "contain" }}
          width={24}
          height={18.5}
          src={taskI}
        />
        <Typography sx={{ display: { xs: "none", md: "block" } }}>
          قائمة المهام
        </Typography>
      </div>
    </Box>
  );
}
