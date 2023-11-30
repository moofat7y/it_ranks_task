import React, { useContext } from "react";
import { Box, Button, Typography } from "@mui/material";
import arrowI from "../../assets/icons/modal/arrowleft.svg";
import { newsConfig } from "../../utils/config";
import { newsContext } from "../../store/context/NewsProvider";

export default function NewDetails({ selectedCard, setSelectedCard }) {
  const {
    data: { news },
  } = useContext(newsContext);
  const selectedNewDetails = news[selectedCard];
  return (
    <div>
      <Button
        color="inherit"
        variant="outlined"
        onClick={() => setSelectedCard(null)}
        sx={{
          display: "inline-flex",
          padding: "8px",
          alignItems: "center",
          borderRadius: "8px",
          gap: "8px",
          border: "1px solid #FAFAFA",
        }}
      >
        <Typography sx={{ color: "white" }}>الرجوع لكل الاخبار</Typography>
        <img
          src={arrowI}
          style={{ objectFit: "contain" }}
          width={24}
          height={24}
        />
      </Button>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          marginTop: "20px",
        }}
      >
        <img
          src={selectedNewDetails?.image}
          height={231}
          width={"100%"}
          style={{ objectFit: "cover", borderRadius: "6px" }}
        />

        <Typography sx={{ fontSize: "12px", color: "#A7A7A7" }}>
          {selectedNewDetails?.date}
        </Typography>

        <Typography sx={{ color: "#fff" }}>
          {selectedNewDetails?.headline}
        </Typography>

        <Typography sx={{ fontSize: "12px", color: "#A7A7A7" }}>
          {selectedNewDetails?.content}
        </Typography>
      </Box>
    </div>
  );
}
