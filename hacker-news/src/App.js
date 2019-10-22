import React, { Component } from 'react';
import LogIn from './Component/Users/Login';
import SignUp from './Component/Users/SignUp';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Component/header/Header';
import axios from 'axios';
import Story from './components/Story';
import Home from './components/Home';

class App extends Component {
	state = {
		data: []
	};

	componentDidMount() {
		axios
			.get(`https://reqres.in/api/unknown`)
			.then((response) => {
				console.log(response.data.data);
				console.log('home props', this.props);
				this.setState({
					data: response.data.data
				});
			})
			.catch((err) => console.log(err.response));
	}
	render() {
		return (
			<Router>
				<Header />
				<Route exact path="/SignUp" component={SignUp} />
				<Route exact path="/login" component={LogIn} />
				<Route exact path="/home" render={(props) => <Home {...props} data={this.state.data} />} />

				<Route path="/story/:id" render={(props) => <Story {...props} data={this.state.data} />} />
			</Router>
		);
	}
}

export default App;
