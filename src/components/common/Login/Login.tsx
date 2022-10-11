import {
  Button,
  Card,
  TextField,
  TextFieldProps,
  useMediaQuery,
} from "@mui/material";
import { Stack } from "@mui/system";
import { FC } from "react";

const LoginTextField: FC<TextFieldProps> = ({ ...props }) => (
  <TextField
    {...props}
    variant="standard"
    sx={{ marginTop: "1rem", color: "white" }}
  />
);

export const Login: FC = () => {
  const isMobile = useMediaQuery((theme) =>
    (theme as any).breakpoints.down("sm")
  );
  return (
    <Card
      sx={{
        boxShadow: "none",
        border: "2px solid",
        borderColor: "primary.main",
        margin: "1rem",
        width: "100%",
        maxWidth: isMobile ? "90vw" : "30vw",
        minWidth: "260px",
        backgroundColor: "transparent",
        padding: "1rem",
        boxSizing: "border-box",
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
