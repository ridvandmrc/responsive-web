import { FC } from "react";
import { Stack, Typography, useMediaQuery } from "@mui/material";

export const HealthIndicator: FC<{ order: number }> = ({ order }) => {
  const isMobile = useMediaQuery((theme) =>
    (theme as any).breakpoints.down("sm")
  );
  return (
    <Stack
      sx={{
        width: isMobile ? "90%" : "25vw",
        margin: isMobile ? "1rem auto" : 0,
        minHeight: "25vw",
        padding: "calc(1rem + 1vw)",
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
          maxWidth: "100px",
          maxHeight: "100px",
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
        <Typography
          sx={{
            color: "background.paper",
            fontWeight: "bold",
            fontSize: "calc(0.5rem + 1vw)",
          }}
        >
          {order}
        </Typography>
      </Stack>
      <Typography
        variant="h6"
        sx={{
          color: "background.paper",
          fontWeight: "bold",
          fontSize: "calc(1rem)",
        }}
      >
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which don't look even slightly believable{" "}
      </Typography>
    </Stack>
  );
};
