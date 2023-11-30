import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "@mui/material";

export default function NewsCard({ item, index, setSelectedCard }) {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: {
          xs: "column",
          sm: "row",
        },
        backgroundColor: "transparent",
        boxShadow: "none",
      }}
    >
      <CardMedia
        component="img"
        sx={{
          width: {
            xs: "100%",
            sm: "188px",
          },
          height: {
            xs: "160px",
            sm: "114px",
          },
          objectFit: "cover",
          borderRadius: "6px",
        }}
        image={item.image}
        loading="lazy"
        alt="Live from space album cover"
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent
          sx={{
            maxWidth: {
              xs: "100%",
              sm: "297px",
            },
            paddingY: "0px !important",
            color: "white",
          }}
        >
          <Typography
            color={"#A7A7A7"}
            fontSize={"12px"}
            component="div"
            variant="h5"
          >
            {item.date}
          </Typography>
          <Typography
            sx={{
              WebkitLineClamp: "1",
            }}
            className="line-clamp"
            variant="subtitle1"
            component="div"
          >
            {item.headline}
          </Typography>
          <Typography
            color={"#A7A7A7"}
            fontSize={"12px"}
            sx={{ WebkitLineClamp: "2" }}
            className="line-clamp"
          >
            {item.content}...
          </Typography>{" "}
          <Link
            component="button"
            variant="body2"
            sx={{
              display: "inline-block",
              cursor: "pointer",
              color: "#FFCA31",
              fontSize: "11px",
            }}
            onClick={() => {
              setSelectedCard(index);
            }}
          >
            شاهد المزيد
          </Link>
        </CardContent>
      </Box>
    </Card>
  );
}
