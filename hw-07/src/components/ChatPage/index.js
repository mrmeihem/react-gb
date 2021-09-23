import { useRef, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

import { Paper, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { Chats } from "../Chats";
import { ChatForm } from "../ChatForm";
import { Message } from "../Message";

import { selectChats } from "../../store/chats/selectors";
import { selectMessages } from "../../store/messages/selectors";
import { addMessageAndReply } from "../../store/messages/actions";

export const ChatPage = () => {
  //Styling the page
  const useStyles = makeStyles((theme) => ({
    header: {
      fontWeight: "100",
      textTransform: "uppercase",
      margin: "20px",
    },
    chatWindow: {
      padding: "12px",
      height: "400px",
      overflowY: "auto",
    },
  }));
  const classes = useStyles();

  const dispatch = useDispatch();
  //Loading chats and messages
  const chatsList = useSelector(selectChats);
  const messagesList = useSelector(selectMessages);

  //Loading chatId from the URL
  const { chatId } = useParams();

  // renew the state
  const updateHistory = useCallback(
    (text, source) => {
      dispatch(addMessageAndReply(chatId, text, source));
    },
    [dispatch, chatId]
  );

  //Autoscroll to bottom
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const sendMessage = (inputValue) => {
    if (inputValue) {
      updateHistory(inputValue, "you");
      scrollToBottom();
    } else {
      console.log("input a message");
    }
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography
          className={classes.header}
          variant="h3"
          align="center"
          color="primary"
        >
          Chat app
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Paper>
          <Chats chatsList={chatsList} />
        </Paper>
      </Grid>
      <Grid item xs={8}>
        <Paper className={classes.chatWindow}>
          {!!chatId &&
            !!(chatId in messagesList) &&
            messagesList[chatId].map((message, i) => (
              <Message key={i} message={message} />
            ))}
          <div ref={messagesEndRef} />
        </Paper>
        {!!chatId && !!(chatId in messagesList) && (
          <ChatForm onSubmit={sendMessage} />
        )}
      </Grid>
    </Grid>
  );
};
