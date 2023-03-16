import React, {useState, useRef} from "react";
import './App.css';
import Button from "./components/Buttom";

export default function App() {
  const [count, setCount] = useState(0)

  function handleClick(msgFromChild) {
    console.log("Clicked", msgFromChild)
  }

  return <div className="App">
    <Button handleBtnClick={handleClick}>Child to parent</Button>
    <input value={count} />
    <button onClick={() => setCount(count + 1)}>Increment</button>
    <button onClick={() => setCount(count - 1)}>Decrement</button>
    {count === 5 ? <h1>Hey It's your lucky number</h1>: <h1>You loose</h1>}
  </div>
}
