import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import Story from './components/Story';

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
			<div className="App">
				<h1>Hello World</h1>
				<Router>
					<Route exact path="/home" render={(props) => <Home {...props} data={this.state.data} />} />

					<Route path="/story/:id" render={(props) => <Story {...props} data={this.state.data} />} />
				</Router>
			</div>
		);
	}
}

export default App;
