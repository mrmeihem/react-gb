// import logo from './logo.svg';
import './App.scss';
import { Message } from './components/Message';
import { useEffect, useState, useRef } from "react";
import 'react-native-get-random-values';
import { v4 as uuid } from 'uuid';

function App() {
  const [messageList, setMessageList] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [botMessageList, setBotMessageList] = useState([
    "All your bases belong to us! Resign!",
    "I'm a humble tin human beeing...",
    "Don't you dare to keep it simple!",
    "I'm not the man. Enough!",
    "You are totally right!",
    "NO WAY!!!",
    "Silence!",
    "(っ ͡❛ ͜ʖ ͡❛)っ",
    "≧◉◡◉≦"
  ]);

  const changeValue = (event) => {
    setInputValue(event.target.value);
  };
  const sendMessage = () => {
    if (inputValue) {
      setMessageList((oldMessageList) => [...oldMessageList, { text: inputValue, source: 'you'}]);
      scrollToBottom();
    } else {
      console.log('input a message');
    }
  };

  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (messageList[messageList.length - 1]?.source === 'you') {
      setBotMessageList((oldBotMessageList) => [...oldBotMessageList, inputValue]);
      setInputValue('');
      setTimeout(() => {
        setMessageList((oldMessageList) => [...oldMessageList, { text: botMessageList[Math.floor(Math.random() * (botMessageList.length - 1))], source: 'bot'}]);
        scrollToBottom();
      }, 1500);
    }
  }, [messageList]);

  return (
      <div className="App">
        <div className="messageswindow">
          {/* Странным образом uuid выдает одинаковые значения, на что ругается консоль. Не успеваю разобраться */}
          {messageList.map((message, i) => <Message key={uuid + i} message = {message} />)}
          <div ref={messagesEndRef} />
        </div>
        <div>
          <input value = {inputValue} onChange = {changeValue} />
          <button onClick={sendMessage}>Send Message</button>
        </div>
      </div>
  );
}

export default App;
