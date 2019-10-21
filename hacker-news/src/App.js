import React, { Component } from "react";
import LogIn from "./Component/Users/Login";
import SignUp from "./Component/Users/SignUp";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SignUp />
        <LogIn />
      </div>
    );
  }
}

export default App;
