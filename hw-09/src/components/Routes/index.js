import { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import { Button, ButtonGroup } from "@material-ui/core";

import { ChatPage } from "../ChatPage";
import { HomePage } from "../HomePage";
import { Page404 } from "../Page404";
import { ProfilePage } from "../ProfilePage";
import { ChackNorris } from "../ChackNorris";

import { PrivateRoute } from "../PrivateRoute";

import { login, signUp, signOut, auth } from "../../services/firebase";
import { onAuthStateChanged } from "firebase/auth";

export const Routes = () => {
  const authed = true;

  // const [authed, setAuthed] = useState(false);

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (user) => {
  //     !!user ? setAuthed(true) : setAuthed(false);
  //     // if (user) {
  //     //   setAuthed(true);
  //     // } else {
  //     //   setAuthed(false);
  //     // }
  //   });
  //   return unsubscribe;
  // }, []);

  // const handleLogin = async (email, pass) => {
  //   try {
  //     await login(email, pass);
  //     // setAuthed(true);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  // const handleSignUp = async (email, pass) => {
  //   try {
  //     await signUp(email, pass);
  //     // setAuthed(true);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  // const handleLogout = async () => {
  //   try {
  //     await signOut();
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

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
