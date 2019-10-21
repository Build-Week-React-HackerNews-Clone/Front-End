import React, { Component } from 'react';
import SignUp from './Component/Users/SignUp';
// import Login from './Component/Users/Login';
import Header from './Component/header/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Login from './Component/Users/LogIn';

class App extends Component {
	render() {
		return (
			<Router>
				<Header />
				<div>
					<Route exact path="/SignUp" component={SignUp} />
				</div>
				<div>
					<Route exact path="/login" component={Login} />
				</div>
			</Router>
		);
	}
}

export default App;
