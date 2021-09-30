import { Button, ButtonGroup } from "@material-ui/core";

import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import { ChatPage } from "../ChatPage";
import { HomePage } from "../HomePage";
import { Page404 } from "../Page404";
import { ProfilePage } from "../ProfilePage";
import { ChackNorris } from "../ChackNorris"

export const Routes = () => {
  const Menu = () => (
    <>
      <ButtonGroup variant="contained" disableElevation fullWidth>
        <Button component={Link} to="/">
          Home
        </Button>
        <Button component={Link} to="/profile">
          Profile
        </Button>
        <Button component={Link} to="/norris">
          Chack Norris
        </Button>
        <Button component={Link} to="/chats">
          Chats
        </Button>
      </ButtonGroup>
    </>
  );

  return (
    <BrowserRouter>
      <Menu />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/chats/:chatId?">
          <ChatPage />
        </Route>
        <Route path="/profile">
          <ProfilePage />
        </Route>
        <Route path="/norris">
          <ChackNorris />
        </Route>
        <Route>
          <Page404 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
