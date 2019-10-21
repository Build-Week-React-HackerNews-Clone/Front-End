import React, { Component } from "react";
import LogIn from "./Component/Users/Login";
import SignUp from "./Component/Users/SignUp";
import "./App.css";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './Component/Users/header/Header';



class App extends Component {
  render() {
    return (
      <Router>
        <Header/>
          <Route exact path="/SignUp" component={SignUp} />
        <Route exact path="/login" component={LogIn} />
      </Router>
    );
  }
}

export default App;
