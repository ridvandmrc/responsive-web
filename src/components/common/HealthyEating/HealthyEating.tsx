import { Stack, Typography, useMediaQuery } from "@mui/material";
import { HealthIndicator } from "./HealthIndicator";

export const HealthyEating = () => {
  const isMobile = useMediaQuery((theme) =>
    (theme as any).breakpoints.down("sm")
  );
  return (
    <Stack
      width="100%"
      sx={{
        position: isMobile ? "static" : "sticky",
        top: 0,
        backgroundColor: "background.paper",
        padding: "1rem 0",
        height: isMobile ? "fit-content" : "100vh",
        boxSizing: "border-box",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          margin: "0 auto",
          fontWeight: "bold",
          color: "primary.200",
          fontSize: "calc(1rem + 1vw)",
        }}
      >
        How it works
      </Typography>
      <Typography
        variant="h2"
        sx={{
          fontWeight: "bold",
          color: "primary.100",
          fontSize: "calc(1rem + 4vw)",
          margin: isMobile ? "0 0 0 2rem" : "0 auto",
        }}
      >
        3 Step For<span style={{ color: "#5a2f27" }}>Healthy Eating</span>
      </Typography>
      <Stack
        direction={isMobile ? "column" : "row"}
        justifyContent="space-around"
        sx={{ marginTop: "1rem" }}
      >
        <HealthIndicator order={1} />
        <HealthIndicator order={2} />
        <HealthIndicator order={3} />
      </Stack>
    </Stack>
  );
};
