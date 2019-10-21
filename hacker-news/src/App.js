import React, { Component } from "react";
import LogIn from "./Component/Users/Login";
import SignUp from "./Component/Users/SignUp";
import "./App.css";
import {BrowerRouter as Router, Route} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <SignUp />
        <LogIn />
      </Router>
    );
  }
}

export default App;
