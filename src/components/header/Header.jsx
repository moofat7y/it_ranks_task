import AppBar from "@mui/material/AppBar";

import logo from "/public/logo.svg";
import HeaderMenus from "./HeaderMenus";

export default function Header() {
  return (
    <AppBar
      color="transparent"
      sx={{
        boxShadow: "none",
        padding: {
          xs: "33px 20px",
          md: "33px 48px",
        },
        flexDirection: "row",
        alignItems: "start",
        justifyContent: "space-between",
      }}
      position="fixed"
    >
      <HeaderMenus />

      <img
        src={logo}
        style={{ objectFit: "contain", marginRight: "auto" }}
        width={68}
        height={77}
        alt="It Ranks"
      />
    </AppBar>
  );
}
