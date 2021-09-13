import { useEffect, useState, useRef, useCallback } from "react";

import { Paper, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useParams } from "react-router";


import { Chats } from "../Chats";
import { ChatForm } from "../ChatForm";
import { Storage } from "../../utils/storage.js";
import { chatsHistory } from "../../utils/chats.js";
import { Message } from "../Message";


const useStyles = makeStyles((theme) => ({
  header: {
    fontWeight: '100',
    textTransform: 'uppercase',
    margin: '20px'
  },
  chatWindow: {
    padding: '12px',
    height: '400px',
    overflowY: 'auto'
  }
}));


export const ChatPage = () => {

  const {chatId} = useParams();
  
  const classes = useStyles();

  const [messageList, setMessageList] = useState(chatsHistory[chatId]);

  const updateHistory = useCallback((message) => {
    chatsHistory[chatId].push(message);
    console.log(chatsHistory[chatId]);
  }, [chatId]);

  const showMessage = useCallback((message) => {
    setMessageList((oldMessageList) => [...oldMessageList, message]);
  }, [setMessageList]);

  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const sendMessage = (inputValue) => {
    if (inputValue) {
      showMessage({ text: inputValue, source: 'you'});
      console.log('update you text');
      updateHistory({ text: inputValue, source: 'you'});
      scrollToBottom();
    } else {
      console.log('input a message');
    }
  };

  useEffect(() => {
    let botInterval;

    if (!!chatId && messageList[messageList.length - 1]?.source === 'you') {
      botInterval = setTimeout(() => {
        const reply = Storage.botMessageList[Math.floor(Math.random() * (Storage.botMessageList.length - 1))];
        showMessage({ text: reply, source: 'bot'});
        console.log('update bot text');
        updateHistory({ text: reply, source: 'bot'});
        scrollToBottom();
      }, 1500);
    }
    return () => clearTimeout(botInterval);
  }, [showMessage, updateHistory, chatId, messageList]);

  return (
    <Grid container spacing={3}>
    <Grid item xs={12}>
        <Typography className={classes.header}
        variant="h3"
        align="center"
        color="primary"
        >
        Chat app
        </Typography>
    </Grid>
    <Grid item xs={4}>
        <Paper>
        <Chats />
        </Paper>
    </Grid>
    <Grid item xs={8}>
        <Paper className={classes.chatWindow}>
        {!!chatId && messageList.map((message, i) => <Message key={i} message={message} />)}
        <div ref={messagesEndRef} />
        </Paper>
        {!!chatId && <ChatForm onSubmit={sendMessage}/>}
    </Grid>
    </Grid>
  );
}