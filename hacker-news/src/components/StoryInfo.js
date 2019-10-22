import React from 'react';

const StoryInfo = (props) => {
	function routeToItem(ev, item) {
		ev.preventDefault();
		props.history.push(`/story/${item.id}`);
	}
	function timeConverter(UNIX_timestamp) {
		var a = new Date(UNIX_timestamp * 1000);
		var months = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ];
		var year = a.getFullYear();
		var month = months[a.getMonth()];
		var date = a.getDate();
		var time = month + ' ' + date + ' ' + year;
		return time;
	}

	return (
		<div>
			{props.stories.map((story) => (
				<div>
					<h1 onClick={(ev) => routeToItem(ev, story)}>Title: {story.title}</h1>
					<h2>Author: {story.by}</h2>
					<h2>Type of article: {story.type}</h2>
					<h2>Score: {story.score}</h2>
					<h2>Date posted: {timeConverter(story.time)}</h2>
					<h2>Number of comments: {story.kids.length}</h2>
					<a href={story.url}>View Full Article</a>
				</div>
			))}
		</div>
	);
};

export default StoryInfo;
