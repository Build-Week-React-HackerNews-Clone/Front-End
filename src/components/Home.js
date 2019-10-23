import React, { Component } from 'react';
import StoryInfo from './StoryInfo';
import '../App.css';

class Home extends Component {
	componentDidMount() {
		console.log('home data', this.props.data);
	}
	render() {
		return (
			<div>
				<StoryInfo stories={this.props.data} history={this.props.history} />
			</div>
		);
	}
}

export default Home;
