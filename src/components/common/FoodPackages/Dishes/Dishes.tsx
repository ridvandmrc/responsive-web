import { FC } from "react";
import { Stack, Typography, useMediaQuery } from "@mui/material";

export const Dishes: FC<{ food: string }> = ({ food }) => {
  const isMobile = useMediaQuery((theme) =>
    (theme as any).breakpoints.down("sm")
  );
  return (
    <Stack
      sx={{
        backgroundColor: "primary.main",
        width: isMobile ? "100%" : "25vw",
        marginTop: isMobile ? "4rem" : 0,
        alignItems: "center",
        paddingBottom: "2rem",
      }}
    >
      <Stack
        sx={{
          width: "10vw",
          minWidth: "70px",
          position: "absolute",
          marginTop: "-5vw",
        }}
      >
        <img
          src={food}
          alt="Food 1"
          style={{ width: "100%", height: "100%" }}
        />
      </Stack>
      <Typography
        sx={{
          marginTop: "calc(2rem + 4vw)",
          color: "background.paper",
          width: "80%",
          fontSize: "calc(0.5rem + 1vw)",
        }}
      >
        <span
          style={{
            margin: "0 auto",
            display: "flex",
            justifyContent: "center",
          }}
        >
          Homemade
        </span>
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which don't look even slightly believable
      </Typography>
    </Stack>
  );
};
