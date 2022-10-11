import { Typography, useMediaQuery } from "@mui/material";
import { Stack } from "@mui/system";
import { Dishes } from "./Dishes";

export const FoodPackages = () => {
  const isMobile = useMediaQuery((theme) =>
    (theme as any).breakpoints.down("sm")
  );

  console.log("isMobile: ", isMobile);
  return (
    <Stack
      sx={{
        backgroundColor: "background.paper",
        position: "relative",
        padding: "3rem",
        minHeight: "100vh",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          margin: "1rem auto",
          color: "primary.100",
          fontWeight: 700,
          fontSize: "calc(1rem + 5vw)",
        }}
      >
        Food<span style={{ color: "#5a2f27" }}>Packages</span>
      </Typography>

      <Typography
        variant="h6"
        sx={{
          color: "primary.main",
          margin: "0 auto",
          fontWeight: "bold",
          fontSize: "calc(1rem + 1vw)",
        }}
      >
        There are many variations of passages of Lorem Ipsum available, but the
        majorityomised words which don't look even slightly believable
      </Typography>

      <Stack
        direction={isMobile ? "column" : "row"}
        sx={{
          width: "100%",
          justifyContent: "space-around",
          marginTop: "7vw",
          marginBottom: "7vw",
        }}
      >
        <Dishes food="./food1.png" />
        <Dishes food="./food2.png" />
        <Dishes food="./food3.png" />
      </Stack>
    </Stack>
  );
};
