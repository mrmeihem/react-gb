import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useParams, useHistory, Link } from "react-router-dom";

import { ButtonGroup, Button, Typography, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

import { addChat, deleteChat } from "../../store/chats/actions";

import { NewChatDialog } from "../NewChatDialog";
import { addMessageChat } from "../../store/messages/actions";

export const Chats = ({ chatsList }) => {
  // Regular button for a chat
  const ChatButton = (chatsList) => (
    <>
      <Button
        component={Link}
        variant="text"
        to={`/chats/${chatsList.chatObj.id}`}
      >
        {chatsList.chatObj.name}
      </Button>
    </>
  );

  // A button with delete section for the current chat
  const CurrentChat = (chatsList) => (
    <ButtonGroup fullWidth orientation="horizontal">
      <Button variant="text" disabled color="secondary">
        {chatsList.chatObj.name}
      </Button>
      <IconButton onClick={handleDeleteChat}>
        <DeleteIcon fontSize="small" />
      </IconButton>
    </ButtonGroup>
  );

  const dispatch = useDispatch();

  // Deleting the chat logic
  const history = useHistory();
  const { chatId } = useParams();
  const handleDeleteChat = useCallback(() => {
    dispatch(deleteChat(+chatId));
    history.push(`/chats`);
  }, [chatId, dispatch, history]);

  // This part makes a new id for the chat item
  const maxId = chatsList.reduce((acc, curr) => (acc.b > curr.b ? acc : curr));

  const handleAddChat = (inputValue) => {
    const newChat = { id: maxId.id + 1, name: inputValue };

    dispatch(addChat(newChat));
    dispatch(addMessageChat(maxId.id + 1));
  };

  return (
    <>
      <Typography align="center" variant="h6" color="secondary">
        Chats list
        <br />
      </Typography>
      <ButtonGroup fullWidth orientation="vertical" color="primary">
        {chatsList.map((chat) => {
          if (chat.id === +chatId) {
            return <CurrentChat key={chat.id} chatObj={chat} />;
          } else {
            return <ChatButton key={chat.id} chatObj={chat} />;
          }
        })}
      </ButtonGroup>
      <NewChatDialog handleAddChat={handleAddChat} />
    </>
  );
};
