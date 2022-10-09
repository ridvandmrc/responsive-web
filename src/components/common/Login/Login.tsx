import { Button, Card, TextField, TextFieldProps } from "@mui/material";
import { Stack } from "@mui/system";
import { FC } from "react";

const LoginTextField: FC<TextFieldProps> = ({ ...props }) => (
  <TextField
    {...props}
    variant="standard"
    sx={{ marginTop: "1rem", color: "white", height: "4vw" }}
  />
);

export const Login: FC = () => {
  return (
    <Card
      sx={{
        boxShadow: "none",
        border: "2px solid",
        borderColor: "primary.main",
        margin: "1rem",
        width: "100%",
        maxWidth: "30vw",
        minWidth: "300px",
        backgroundColor: "transparent",
        padding:'1rem'
      }}
    >
      <Stack sx={{ margin: "auto 1rem" }}>
        <LoginTextField label="Name" placeholder="Name" />
        <LoginTextField label="Email" placeholder="Email" />
        <LoginTextField label="Phone Number" placeholder="Phone Number" />
        <Button variant="contained" sx={{ marginTop: "1rem" }}>
          SEND
        </Button>
      </Stack>
    </Card>
  );
};
