import { Stack, Typography, useMediaQuery } from "@mui/material";

export const ClientSays = () => {
  const isMobile = useMediaQuery((theme) =>
    (theme as any).breakpoints.down("sm")
  );
  return (
    <Stack
      sx={{
        position: "sticky",
        top: 0,
        backgroundColor: "primary.main",
        paddingBottom: "2rem",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          marginLeft: "2rem",
          fontWeight: "bold",
          color: "primary.100",
          fontSize: "min(calc(2rem + 7vw),9rem)",
        }}
      >
        Client <span style={{ color: "white" }}> Says</span>
      </Typography>
      <Stack
        direction={isMobile ? "column" : "row"}
        sx={{
          justifyContent: "right",
          alignItems: "center",
          marginRight: isMobile ? "0" : "4rem",
          marginTop: isMobile ? "4rem" : "0",
        }}
      >
        <Stack
          sx={{
            width: isMobile ? "90%" : "30%",
            backgroundColor: "background.paper",
            marginRight: isMobile ? "0" : "2rem",
            padding: isMobile ? "0 1rem 2rem 1rem " : "0 3rem 3rem 3rem",
            color: "primary.main",
            fontWeight: "bold",
            borderRadius: "1rem",
            boxSizing: "border-box",
          }}
        >
          <Stack
            sx={{ width: "20%", minWidth: "4rem", margin: "-10% auto 0 auto" }}
          >
            <img src="./client.png" alt="foto" />
          </Stack>
          <Typography
            variant="h5"
            sx={{
              margin: "2rem auto",
              color: "primary.100",
              fontWeight: "bold",
            }}
          >
            MARK DU
          </Typography>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters,
        </Stack>
        <Stack
          sx={{
            width: isMobile ? "70%" : "40%",
            minWidth: "10rem",
            marginTop: isMobile ? "4rem" : 0,
          }}
        >
          <img src="./food4.png" alt="food4" />
        </Stack>
      </Stack>
    </Stack>
  );
};
