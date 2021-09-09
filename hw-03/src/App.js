import { useEffect, useState, useRef } from "react";
import './App.scss';

import 'react-native-get-random-values';
import { v4 as uuid } from 'uuid';

import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider, Button, TextField, Container, Paper, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { Message } from './components/Message';
import { Chats } from "./components/Chats";


const theme = createTheme ({
  palette: {
    primary: {
      main: '#333'
    },
    text: {
      primary: '#333'
    }
  }
});

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
  },
  form: {
    padding: '12px'
  }
}));

// Массив сообщений бота, в конец дописываются сообщения юзера.
// Вынес выше, тут реактивность не нужна
let botMessageList = [
  "All your bases belong to us! Resign!",
  "I'm a humble tin human beeing...",
  "Don't you dare to keep it simple!",
  "I'm not the man. Enough!",
  "You are totally right!",
  "NO WAY!!!",
  "Silence!",
  "(っ ͡❛ ͜ʖ ͡❛)っ",
  "≧◉◡◉≦"
];

function App() {

  const classes = useStyles();

  // Список сообщений, отображается на экране реактивно
  const [messageList, setMessageList] = useState([]);
  // Сообщение, которое вводит юзер.
  const [inputValue, setInputValue] = useState('');

  const changeValue = (event) => {
    setInputValue(event.target.value); 
  };
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };


  const sendMessage = (event) => {
    event.preventDefault();
    if (inputValue) {
      setMessageList((oldMessageList) => [...oldMessageList, { text: inputValue, source: 'you'}]);
      scrollToBottom();
    } else {
      console.log('input a message');
    }
  };

  useEffect(() => {
    let botInterval;

    if (messageList[messageList.length - 1]?.source === 'you') {
      botMessageList = [...botMessageList, inputValue];
      setInputValue('');
      botInterval = setTimeout(() => {
        setMessageList((oldMessageList) => [...oldMessageList, { text: botMessageList[Math.floor(Math.random() * (botMessageList.length - 1))], source: 'bot'}]);
        scrollToBottom();
      }, 1500);
    }
    return () => clearTimeout(botInterval);
  }, [messageList]);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Container maxWidth="md">
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
                <Chats chatList = 'chatList'/ >
              </Paper>
            </Grid>
            <Grid item xs={8}>
              <Paper className={classes.chatWindow}>
              <div className="messageswindow">
                {/* Странным образом uuid выдает одинаковые значения, на что ругается консоль. Не успеваю разобраться */}
                {messageList.map((message, i) => <Message key={uuid + i} message = {message} />)}
                <div ref={messagesEndRef} />
              </div>
              </Paper>
              <form onSubmit={sendMessage} className={classes.form}>
                <Grid container spacing={3}>
                  <Grid item xs={8}>
                    <TextField 
                      fullWidth 
                      autoFocus
                      color='primary' 
                      margin="dense"
                      value={inputValue} 
                      onChange={changeValue} 
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <Button
                      fullWidth
                      size="large"
                      type="submit" 
                      color='primary' 
                      variant='outlined'
                    >Send Message</Button>
                  </Grid>
                </Grid>
              </form>
            </Grid>
          </Grid>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
