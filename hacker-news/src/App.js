import React, { Component } from "react";
import SignUp from "./Component/Users/SignUp";
import Login from "./Component/Users/Login";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
        <SignUp />
        </div>
        <div>
        <Login />
        </div>
      </div>
    );
  }
}

export default App;
