import { Stack, Typography } from "@mui/material";


export const ClientSays = () => {
  return (
    <Stack
      sx={{
        position: "sticky",
        top: 0,
        backgroundColor: "primary.main",
        paddingBottom:'2rem',
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
        direction="row"
        sx={{
          justifyContent: "right",
          alignItems: "center",
          marginRight: "4rem",
        }}
      >
        <Stack
          sx={{
            width: "30%",
            backgroundColor: "background.paper",
            marginRight: "2rem",
            padding: "0 3rem 3rem 3rem",
            color:'primary.main',
            fontWeight:'bold'
          }}
        >
          <Stack sx={{ width: "20%", margin: "-10% auto 0 auto" }}>
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
            width: "40%",
            minWidth:'10rem'
          }}
        >
          <img src="./food4.png" alt="food4" />
        </Stack>
      </Stack>
    </Stack>
  );
};
