import React, {useState, useRef} from "react";
import './App.css';
import Button from "./components/Buttom";

export default function App() {
  function handleClick(msgFromChild) {
    console.log("Clicked", msgFromChild)
  }

  return <div className="App">
    <Button handleBtnClick={handleClick}>Child to parent</Button>
  </div>
}
