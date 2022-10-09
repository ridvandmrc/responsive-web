import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { Dishes } from "./Dishes";

export const FoodPackages = () => {
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
          fontSize: "calc(7vw)",
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
          fontSize: "calc(2vw)",
        }}
      >
        There are many variations of passages of Lorem Ipsum available, but the
        majorityomised words which don't look even slightly believable
      </Typography>

      <Stack
        direction="row"
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
