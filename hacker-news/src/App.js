import React, { Component } from "react";
import SignUp from "./Component/Users/SignUp";
import Login from "./Component/Users/Login";
import Header from "./Component/header/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Route exact path="/SignUp" component={SignUp} />
        <Route exact path="/login" component={Login} />
      </Router>
    );
  }
}

export default App;
