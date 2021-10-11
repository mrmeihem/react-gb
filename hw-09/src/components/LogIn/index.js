import { useState } from "react";
import {
  Paper,
  Typography,
  Button,
  TextField,
  Container,
  Box,
} from "@material-ui/core";

import { login, signUp } from "../../services/firebase";
// import { getAuth } from "firebase/auth";

export const Login = () => {
  const [userName, setUserName] = useState("");
  const [loginEmail, setLogin] = useState("");
  const [pass, setPass] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [isSignUp, setIsSignUp] = useState(false);

  const changeSignUp = () => {
    setIsSignUp(!isSignUp);
  };

  const handleLogin = async (email, pass) => {
    try {
      await login(email, pass);
    } catch (e) {
      console.log(e);
      setErrorMessage(e.message);
    }
  };
  const handleSignUp = async (email, pass) => {
    try {
      await signUp(email, pass);
    } catch (e) {
      console.log(e.message);
    }
  };

  // const auth = getAuth();
  // const user = auth.currentUser;
  // if (user !== null) {
  //   const uid = user.displayName;
  //   console.log(uid);
  //   console.log(user);
  // }

  // const addProfileNameFb = (chatId, messageId, text, source) => () => {
  //   const messagesDbRef = ref(db, `messages/${chatId}/${messageId}`);
  //   set(messagesDbRef, {
  //     text,
  //     source,
  //     messageId,
  //   });
  // };

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };
  const handleLoginChange = (e) => {
    setLogin(e.target.value);
  };

  const handlePassChange = (e) => {
    setPass(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLogin("");
    setPass("");

    // handleLogin(loginEmail, pass);
    if (!!isSignUp) {
      handleSignUp(loginEmail, pass);
    } else {
      handleLogin(loginEmail, pass);
    }
  };

  return (
    <>
      <Typography align="center" variant="h2" color="secondary">
        {isSignUp ? "Sign Up" : "Login"}
      </Typography>
      <Paper>
        <Container maxWidth="xs">
          {isSignUp ? (
            <form onSubmit={handleSubmit}>
              <Box sx={{ m: 3 }}>
                <TextField
                  id="outlined-userName-input"
                  label="User Name"
                  type="text"
                  autoComplete="current-userName"
                  fullWidth
                  value={userName}
                  onChange={handleUserNameChange}
                />
              </Box>
              <Box sx={{ m: 3 }}>
                <TextField
                  id="outlined-login-input"
                  label="Login"
                  type="login"
                  autoComplete="current-login"
                  fullWidth
                  value={loginEmail}
                  onChange={handleLoginChange}
                />
              </Box>
              <Box sx={{ m: 3 }}>
                <TextField
                  id="password-input"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  fullWidth
                  value={pass}
                  onChange={handlePassChange}
                />
              </Box>
              <Box sx={{ m: 3 }}>
                <Button
                  variant="contained"
                  disableElevation
                  color="secondary"
                  type="submit"
                  fullWidth
                >
                  Submit
                </Button>
              </Box>
            </form>
          ) : (
            <form onSubmit={handleSubmit}>
              <Box sx={{ m: 3 }}>
                <TextField
                  id="outlined-login-input"
                  label="Login"
                  type="login"
                  autoComplete="current-login"
                  fullWidth
                  value={loginEmail}
                  onChange={handleLoginChange}
                />
              </Box>
              <Box sx={{ m: 3 }}>
                <TextField
                  id="password-input"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  fullWidth
                  value={pass}
                  onChange={handlePassChange}
                />
              </Box>
              <Box sx={{ m: 3 }}>
                <Button
                  variant="contained"
                  disableElevation
                  color="secondary"
                  type="submit"
                  fullWidth
                >
                  Submit
                </Button>
              </Box>
            </form>
          )}
          <Box sx={{ m: 3 }}>
            <Typography align="center" color="secondary" variant="h5">
              {errorMessage}
            </Typography>
            <Button fullWidth onClick={changeSignUp}>
              {isSignUp
                ? "Already regestered? Log in"
                : "Not yet regestered? Sign up"}
            </Button>
          </Box>
        </Container>
      </Paper>
    </>
  );
};
