import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { browserHistory } from 'react-router';
import Story from './components/Story';

class App extends Component {
	render() {
		return (
			<div className="App">
				<h1>Hello World</h1>
				<Router history={browserHistory}>
					<Route exact path="/" render={(props) => <Home {...props} />} />

					<Route path="/story/:id" render={(props) => <Story {...props} />} />
				</Router>
			</div>
		);
	}
}

export default App;
