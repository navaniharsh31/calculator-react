import React, { useState, useEffect } from "react";
import "./App.css";
import Button from "./Components/Button";
import Input from "./Components/Input";
import axios from "./axios";

function App() {
  const [input, setInput] = useState("");
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [operator, setOperator] = useState("");
  
  useEffect(()=>{
    console.log('a is ',a);
    console.log('b is ',b);
  })

  useEffect(()=>{
    const addition = `add/?a=${a}&b=${b}`;
    const subtraction = `subtract/?a=${a}&b=${b}`;
    const multiplication = `multiply/?a=${a}&b=${b}`;
    const division = `divide/?a=${a}&b=${b}`;
    if (operator === "+") {
      axios.get(addition).then((res) => {
        const response = res.data;
        setInput(response.result);
      });
    } else if (operator === "-") {
      axios.get(subtraction).then((res) => {
        const response = res.data;
        setInput(response.result);
      });
    } else if (operator === "*") {
      axios.get(multiplication).then((res) => {
        const response = res.data;
        setInput(response.result);
      });
    } else if (operator === "/") {
      axios.get(division).then((res) => {
        const response = res.data;
        setInput(response.result);
      });
    }
  },[b])

  const set = (val) => {
    if (input === "" && val === 0) {
    } else setInput(input + val);
  };

  const clear = () => {
    setInput("");
  };

  const add = () => {
    setA(input);
    // console.log('a is ',a);
    setInput("");
    setOperator("+");
  };

  const sub = () => {
    setA(input);
    console.log(a);
    setInput("");
    setOperator("-");
  };

  const mul = () => {
    setA(input);
    console.log(a);
    setInput("");
    setOperator("*");
  };

  const div = () => {
    setA(input);
    console.log(a);
    setInput("");
    setOperator("/");
  };

  const evaluate = () => {
    console.log('---------');
    setB(input);
    setInput("");
  };

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <Input>{input}</Input>
        </div>
        <div className="row">
          <Button click={set}>7</Button>
          <Button click={set}>8</Button>
          <Button click={set}>9</Button>
          <Button click={add}>+</Button>
        </div>
        <div className="row">
          <Button click={set}>4</Button>
          <Button click={set}>5</Button>
          <Button click={set}>6</Button>
          <Button click={sub}>-</Button>
        </div>
        <div className="row">
          <Button click={set}>1</Button>
          <Button click={set}>2</Button>
          <Button click={set}>3</Button>
          <Button click={mul}>*</Button>
        </div>
        <div className="row">
          <Button click={clear}>CLR</Button>
          <Button click={set}>0</Button>
          <Button click={evaluate}>=</Button>
          <Button click={div}>/</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
