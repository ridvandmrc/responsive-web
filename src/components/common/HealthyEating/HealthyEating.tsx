import { Stack, Typography } from "@mui/material";
import { HealthIndicator } from "./HealthIndicator";

export const HealthyEating = () => {
  return (
    <Stack
      width="100%"
      sx={{
        position: "sticky",
        top: 0,
        backgroundColor: "background.paper",
        padding: "1rem 0",
        minHeight: "30vw",
        height: "100vh",
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
          margin: "0 auto",
          fontWeight: "bold",
          color: "primary.100",
          fontSize: "calc(4rem + 1vw)",
        }}
      >
        3 Step For<span style={{ color: "#5a2f27" }}>Healthy Eating</span>
      </Typography>
      <Stack
        direction="row"
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
