import { Button, Stack, Typography, useMediaQuery } from "@mui/material";
import { Login } from "../Login";

export const Header = () => {
  const isMobile = useMediaQuery((theme) =>
    (theme as any).breakpoints.down("sm")
  );
  return (
    <Stack
      direction={isMobile ? "column" : "row"}
      justifyContent="center"
      alignItems="center"
      width={1}
      minWidth="200px"
      sx={{
        backgroundColor: "background.default",
        padding: "1rem",
        boxSizing: "border-box",
        position: isMobile ? "static" : "sticky",
        top: "0",
        height: "100vh",
      }}
    >
      <Stack width={isMobile ? "80vw" : "30vw"} marginRight="2rem">
        <Typography
          variant="h2"
          sx={{ color: "primary.main", fontSize: "calc(1rem + 5vw)" }}
        >
          Healthy Food Recipes
        </Typography>
        <Typography variant="body1" sx={{ color: "primary.main" }}>
          There are many variations of passages of Lorem Ipsum available, but
          the majorityomised words which don't look even slightly believable
        </Typography>
        <Button
          variant="contained"
          sx={{ borderRadius: 0, maxWidth: "10rem", margin: "1rem 0" }}
        >
          READ MORE
        </Button>
      </Stack>
      <Login />
    </Stack>
  );
};
