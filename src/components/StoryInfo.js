import React from 'react';
import '../Story.css';

const StoryInfo = (props) => {
	//converts UNIX time to readable date format
	function timePostedCalc(UNIX_timestamp) {
		var d = new Date(UNIX_timestamp * 1000).toLocaleDateString('en-US');
		var t = new Date(UNIX_timestamp * 1000).toLocaleTimeString('en-US');

		return d + ' at ' + t;
	}

	return (
		<div className="storyContainer">
			<h1 className="hackedTitle">Hacked News: Tops 20 Articles</h1>
			{props.stories.map((story) => (
				<div key={story.id} className="story">
					<h1 className="Title">{story.title}</h1>
					<div className="storyContent">
						<h2 className="Author storyItem">Author: {story.by}</h2>
						<h2 className="Type storyItem">Type of article: {story.type}</h2>
						<h2 className="Score storyItem">Score: {story.score}</h2>

						<h2 className="Date storyItem">Date posted: {timePostedCalc(story.time)}</h2>
						<h2 className="Number storyItem">Number of comments: {story.descendants}</h2>
						<a className="Link" href={story.url}>
							View Full Article
						</a>
					</div>
				</div>
			))}
		</div>
	);
};

export default StoryInfo;
