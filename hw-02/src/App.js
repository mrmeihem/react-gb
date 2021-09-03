// import logo from './logo.svg';
import './App.scss';
import { Message } from './components/Message';
import { useState } from "react";

function App() {
  // const [count, setCount] = useState({ number: 0 });
  return (
    <div className="App">
      <Message message='Here I am' />
    </div>
  );
}

export default App;
