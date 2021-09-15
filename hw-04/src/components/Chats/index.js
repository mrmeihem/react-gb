import React from "react";
import { ButtonGroup, Button, Typography } from '@material-ui/core';
import { useParams } from "react-router";

import { Storage } from "../../utils/storage";

export const Chats = () => {

  const { chatId } = useParams();

  const ChatButton = (chats) => (
    <>
      <Button
        variant="text"
        href={`/chats/${chats.chatObj.id}`}
      >
        { chats.chatObj.name }
      </Button>
    </>
  );

  const CurrentChat = (chats) => (
    <ButtonGroup
      orientation='horizontal'
      fullWidth
    >
      <Button
        variant="text"
        disabled
      >
        { chats.chatObj.name }
      </Button>
      <Button
        variant="text"
      >
        Del
      </Button>
    </ButtonGroup>
  );

    return (
      <>
        <Typography
          align='center'
          variant='h6'
          color='secondary'
        >Chats list<br/></Typography>
        <ButtonGroup
          fullWidth
          orientation="vertical"
          color="primary"
        >
          { Storage.chatList.map((chat) => {
            if (chat.id === +chatId) {
              return <CurrentChat key={chat.id} chatObj={chat} />
            } else {
              return <ChatButton key={chat.id} chatObj={chat} />
            }
          })}
        </ButtonGroup>
        <Button
          color="secondary"
          variant="contained"
          fullWidth
        >Add new chat</Button>
      </>
    )
}