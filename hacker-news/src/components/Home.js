import React, { Component, useEffect } from 'react';
import axios from 'axios';
import StoryInfo from './StoryInfo';
import { Router, broswerHistory } from 'react-router';

class Home extends Component {
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
			<div>
				<h1>Home Page</h1>
				<StoryInfo stories={this.state.data} history={this.props.history} />
			</div>
		);
	}
}

export default Home;
