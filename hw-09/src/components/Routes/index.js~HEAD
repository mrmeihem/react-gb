import { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import { Button, ButtonGroup } from "@material-ui/core";

import { ChatPage } from "../ChatPage";
import { HomePage } from "../HomePage";
import { Page404 } from "../Page404";
import { ProfilePage } from "../ProfilePage";
import { ChackNorris } from "../ChackNorris";
import { Login } from "../LogIn";

import { PrivateRoute } from "../PrivateRoute";
import { PublicRoute } from "../PublicRoute";

import { signOut, auth } from "../../services/firebase";
import { onAuthStateChanged } from "firebase/auth";

export const Routes = () => {
  const [authed, setAuthed] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log(user);
      !!user ? setAuthed(true) : setAuthed(false);
    });
    return unsubscribe;
  }, []);

  const handleLogout = async () => {
    try {
      await signOut();
    } catch (e) {
      console.log(e.message);
    }
  };

  const Menu = () => (
    <>
      <ButtonGroup variant="contained" disableElevation fullWidth>
        <Button component={Link} to="/">
          Home
        </Button>
        <Button disabled={!authed} component={Link} to="/profile">
          Profile
        </Button>
        <Button component={Link} to="/norris">
          Chack Norris
        </Button>
        <Button disabled={!authed} component={Link} to="/chats">
          Chats
        </Button>
        {!!authed ? (
          <Button
            color="secondary"
            variant="contained"
            disableElevation
            fullWidth
            onClick={handleLogout}
          >
            Log out
          </Button>
        ) : (
          <Button
            variant="contained"
            disableElevation
            fullWidth
            color="secondary"
            component={Link}
            to="/login"
          >
            LogIn
          </Button>
        )}
      </ButtonGroup>
    </>
  );

  return (
    <BrowserRouter>
      <Menu />
      <Switch>
        <Route path="/" exact authed={authed}>
          <HomePage />
        </Route>
        <PublicRoute path="/login" exact authed={authed}>
          <Login />
        </PublicRoute>
        <PrivateRoute path="/chats/:chatId?" exact authed={authed}>
          <ChatPage />
        </PrivateRoute>
        <PrivateRoute path="/profile" exact authed={authed}>
          <ProfilePage />
        </PrivateRoute>
        <Route path="/norris" exact authed={authed}>
          <ChackNorris />
        </Route>
        <Route>
          <Page404 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
