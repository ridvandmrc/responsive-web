import { FC } from "react";
import { Stack, Typography } from "@mui/material";

export const HealthIndicator: FC<{ order: number }> = ({ order }) => {
  return (
    <Stack
      sx={{
        width: "25vw",
        minHeight:'25vw',
        padding: "2vw",
        backgroundColor: "primary.100",
        boxSizing: "border-box",
        borderTopRightRadius: "1.5rem",
        borderBottomLeftRadius: "1.5rem",
        position: "relative",
      }}
    >
      <Stack
        sx={{
          borderRadius: "50%",
          width: "3vw",
          height: "3vw",
          maxWidth:'100px',
          maxHeight:'100px',
          minWidth: "30px",
          minHeight: "30px",
          backgroundColor: "primary.main",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          left: "-1vw",
          top: "-1vw",
        }}
      >
        <Typography sx={{ color: "background.paper", fontWeight: "bold",
          fontSize:'calc(1vw)' }}>
          {order}
        </Typography>
      </Stack>
      <Typography
        variant="h6"
        sx={{
          color: "background.paper",
          fontWeight: "bold",
          fontSize:'calc(0.3rem + 1vw)'
        }}
      >
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which don't look even slightly believable{" "}
      </Typography>
    </Stack>
  );
};
