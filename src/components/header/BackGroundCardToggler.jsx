import React from "react";
import { Backdrop, IconButton } from "@mui/material";
import backgroundI from "../../assets/icons/header/background.png";
import BackGroundChanger from "./BackGroundChanger";

export default function BackGroundCardToggler() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <div style={{ position: "relative" }}>
      <Backdrop
        sx={{ color: "#fff", zIndex: "1" }}
        open={open}
        onClick={handleClose}
      ></Backdrop>
      <IconButton
        onClick={handleOpen}
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
          src={backgroundI}
        />
      </IconButton>
      {open && <BackGroundChanger setOpen={setOpen} />}
    </div>
  );
}
