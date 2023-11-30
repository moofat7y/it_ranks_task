import React from "react";
import { Box, Card, Skeleton } from "@mui/material";

export default function NewsCardSkeleton() {
  return (
    <Card
      sx={{
        display: "flex",
        height: "114px",
        backgroundColor: "transparent",
        boxShadow: "none",
        gap: "10px",
      }}
    >
      <Skeleton variant="rectangular" width={188} height={114} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          maxWidth: "297px",
        }}
      >
        <Skeleton height={30} width={"100%"} />
        <Skeleton height={30} width={"100%"} />
        <Skeleton height={30} width={"100%"} />
      </Box>
    </Card>
  );
}
