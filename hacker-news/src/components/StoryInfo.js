import React from 'react';

const StoryInfo = (props) => {
	function routeToItem(ev, item) {
		ev.preventDefault();
		props.history.push(`/story/${item.id}`);
	}

	return (
		<div>{props.stories.map((story) => <h1 onClick={(ev) => routeToItem(ev, story)}>Name: {story.name}</h1>)}</div>
	);
};

export default StoryInfo;
