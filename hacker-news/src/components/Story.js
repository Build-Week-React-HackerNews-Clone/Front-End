import React from 'react';

const Story = (props) => {
	function linkToHome() {
		props.history.push(`/`);
	}

	return (
		<div>
			<h1 onClick={() => linkToHome()}>Home</h1>
			<h1>Story</h1>
		</div>
	);
};

export default Story;
