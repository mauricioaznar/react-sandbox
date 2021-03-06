import * as React from "react";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import PetsIcon from "@mui/icons-material/Pets";
import Typography from "@mui/material/Typography";
import { useLoginMutation } from "../../../services/schema";
import { Grid } from "@mui/material";
import { useActions } from "../../../hooks/redux-hooks/use-actions";
import ThemeSelector from "../../dum/theme-selector/theme-selector";

// const theme-selector = createTheme();

export default function LoginForm() {
  // const history = useHistory()
  const [isDisabled, setIsDisabled] = useState(false);

  const [username, setUsername] = useState("john");
  const [password, setPassword] = useState("changeme");

  const [loginMutation] = useLoginMutation();

  const { login } = useActions();

  // eslint-disable-next-line no-undef
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsDisabled(true);

    try {
      const options = {
        loginInput: {
          username: username,
          password: password,
        },
      };

      const res = await loginMutation({
        variables: {
          ...options,
        },
      });

      const accessToken = res.data?.login?.accessToken;

      if (accessToken) {
        setIsDisabled(false);
        login(accessToken);
      }
    } catch (e: unknown) {
      setIsDisabled(false);
      console.error(e);
    }
  }

  return (
    <Grid
      container
      spacing={0}
      sx={{
        minHeight: "100vh",
        flexDirection: ["column", "column", "row"],
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid
        item
        container
        sx={{
          position: ["relative", "relative", "absolute"],
          top: [null, null, 0],
          alignSelf: "center",
          justifyContent: "center",
        }}
      >
        <Box>
          <ThemeSelector />
        </Box>
      </Grid>
      <Grid
        item
        container
        xs
        sx={{
          alignSelf: ["center", "center", "auto"],
          flexDirection: "column",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <PetsIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="color"
              label="User name"
              name="username"
              autoFocus
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <Button
              disabled={isDisabled}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
