import React from "react";
import { ButtonGroup, Button, Typography } from '@material-ui/core';

const chatList = [
  'Chat-1', 
  'Chat-2', 
  'Chat-3'
];

export const Chats = () => {
  const ChatButton = (chat) => (
    <Button
      variant="text"
    >
      { chat.chat }
    </Button>
  );

    return (
      <>
        <Typography
          align='center'
          variant='h6'
          color='secondary'
        >Chats list</Typography>
        <ButtonGroup
          fullWidth
          orientation="vertical"
          color="primary"
        >
          { chatList.map((chat, i) => <ChatButton key={i} chat={chat} />)}
        </ButtonGroup>
      </>
    )
}