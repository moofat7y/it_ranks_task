import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import { Tooltip } from "@mui/material";
import { bottomNavigationConfig } from "../../utils/config";

const NavItem = ({ item }) => {
  return (
    <Tooltip placement={"top"} title={item.title} arrow>
      <div
        style={{
          width: "42px",
          borderRadius: "8px",
          height: "42px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: item.bg,
        }}
      >
        <img
          style={{ objectFit: "contain" }}
          src={item.icon}
          width={24}
          height={24}
        />
      </div>
    </Tooltip>
  );
};

export default function BNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: "30px",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: "4",
      }}
    >
      <BottomNavigation
        showLabels
        sx={{
          backgroundColor: "#7A7A7A90",
          backdropFilter: "blur(12px)",
          borderRadius: "24px",
          padding: "14px",
          gap: "32px",
          height: "71px",
        }}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        {bottomNavigationConfig.map((item, index) => {
          return <NavItem key={index} item={item} />;
        })}
      </BottomNavigation>
    </Box>
  );
}
