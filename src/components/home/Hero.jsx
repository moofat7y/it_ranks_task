import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { timeContext } from "../../store/context/TimeProvide";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();
  const { time } = React.useContext(timeContext);

  const handleCalendarOpen = () => {
    navigate("?calendar=true");
  };
  return (
    <section id="hero">
      <Container
        sx={{
          width: "100%",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div onClick={handleCalendarOpen}>
          <Typography
            sx={{
              fontFamily: "cocon",
              fontSize: {
                xs: "25px",
                md: "36px",
              },
              fontWeight: "700",
              textAlign: "center",
            }}
            variant="h1"
          >
            مرحبا بك احمد محمد !
          </Typography>

          <Typography
            sx={{
              fontFamily: "cocon",
              fontSize: {
                xs: "40px",
                md: "80px",
              },
              fontWeight: "700",
              letterSpacing: "16px",
              textAlign: "center",
            }}
            variant="h1"
          >
            {time?.arabicTime}
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-between",
              alignItems: "center",
              gap: {
                xs: "30px",
                md: "166px",
              },
              marginTop: "20px",
            }}
          >
            <Typography
              sx={{
                fontFamily: "cocon",
                fontSize: {
                  xs: "16px",
                  md: "24px",
                },
                fontWeight: "700",
                textAlign: "center",
              }}
              variant="h1"
            >
              {time?.hijriDate}
            </Typography>

            <Typography
              sx={{
                fontFamily: "cocon",
                fontSize: {
                  xs: "16px",
                  md: "24px",
                },
                fontWeight: "700",
                textAlign: "center",
              }}
              variant="h1"
            >
              {time?.arabicDate}
            </Typography>
          </Box>
        </div>
      </Container>
    </section>
  );
}
