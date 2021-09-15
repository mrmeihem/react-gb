import { Button, ButtonGroup } from "@material-ui/core"

import { BrowserRouter, Switch, Route } from "react-router-dom"

import { ChatPage } from "../ChatPage"
import { HomePage } from "../HomePage"
import { Page404 } from "../Page404"
import { ProfilePage } from "../ProfilePage"

export const Routes = () => {

    const Menu = () => (
            <>
                <ButtonGroup
                    variant="contained"
                    disableElevation
                    fullWidth
                >
                    <Button href='/'>Home</Button>
                    <Button href='/profile'>Profile</Button>
                    <Button href='/chats'>Chats</Button>
                </ButtonGroup>
            </>
    );


    return (
        <BrowserRouter>
            <Menu />
            <Switch>
                <Route path='/' exact>
                    <HomePage />
                </Route>
                <Route path='/chats/:chatId?'>
                    <ChatPage />
                </Route>
                <Route path='/profile'>
                    <ProfilePage />
                </Route>
                <Route>
                    <Page404 />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}