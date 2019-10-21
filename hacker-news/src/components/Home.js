import React, { Component } from 'react';
import StoryInfo from './StoryInfo';

class Home extends Component {
	render() {
		return (
			<div>
				<h1>Home Page</h1>
				<StoryInfo stories={this.props.data} history={this.props.history} />
			</div>
		);
	}
}

export default Home;
