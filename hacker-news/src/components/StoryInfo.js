import React from 'react';
import '../Story.css';

const StoryInfo = (props) => {
	function routeToItem(ev, item) {
		ev.preventDefault();
		props.history.push(`/story/${item.id}`);
	}

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
				<div className="story">
					<h1 className="Title">Title: {story.title}</h1>
					<div className="storyContent">
						<div className="leftStory">
							<h2 className="Author">Author: {story.by}</h2>
							<h2 className="Type">Type of article: {story.type}</h2>
							<h2 className="Score">Score: {story.score}</h2>
						</div>
						<div className="rightStory">
							<h2 className="Date">Date posted: {timePostedCalc(story.time)}</h2>
							<h2 className="Number">Number of comments: {story.descendants}</h2>
							<a className="Link" href={story.url}>
								View Full Article
							</a>
						</div>
					</div>
				</div>
			))}
			{props.stories.map((story) => (
				<div className="story">
					<h1 className="Title">Title: {story.title}</h1>
					<div className="storyContent">
						<div className="leftStory">
							<h2 className="Author">Author: {story.by}</h2>
							<h2 className="Type">Type of article: {story.type}</h2>
							<h2 className="Score">Score: {story.score}</h2>
						</div>
						<div className="rightStory">
							<h2 className="Date">Date posted: {timePostedCalc(story.time)}</h2>
							<h2 className="Number">Number of comments: {story.descendants}</h2>
							<a className="Link" href={story.url}>
								View Full Article
							</a>
						</div>
					</div>
				</div>
			))}
			{props.stories.map((story) => (
				<div className="story">
					<h1 className="Title">Title: {story.title}</h1>
					<div className="storyContent">
						<div className="leftStory">
							<h2 className="Author">Author: {story.by}</h2>
							<h2 className="Type">Type of article: {story.type}</h2>
							<h2 className="Score">Score: {story.score}</h2>
						</div>
						<div className="rightStory">
							<h2 className="Date">Date posted: {timePostedCalc(story.time)}</h2>
							<h2 className="Number">Number of comments: {story.descendants}</h2>
							<a className="Link" href={story.url}>
								View Full Article
							</a>
						</div>
					</div>
				</div>
			))}
			{props.stories.map((story) => (
				<div className="story">
					<h1 className="Title">Title: {story.title}</h1>
					<div className="storyContent">
						<div className="leftStory">
							<h2 className="Author">Author: {story.by}</h2>
							<h2 className="Type">Type of article: {story.type}</h2>
							<h2 className="Score">Score: {story.score}</h2>
						</div>
						<div className="rightStory">
							<h2 className="Date">Date posted: {timePostedCalc(story.time)}</h2>
							<h2 className="Number">Number of comments: {story.descendants}</h2>
							<a className="Link" href={story.url}>
								View Full Article
							</a>
						</div>
					</div>
				</div>
			))}
			{props.stories.map((story) => (
				<div className="story">
					<h1 className="Title">Title: {story.title}</h1>
					<div className="storyContent">
						<div className="leftStory">
							<h2 className="Author">Author: {story.by}</h2>
							<h2 className="Type">Type of article: {story.type}</h2>
							<h2 className="Score">Score: {story.score}</h2>
						</div>
						<div className="rightStory">
							<h2 className="Date">Date posted: {timePostedCalc(story.time)}</h2>
							<h2 className="Number">Number of comments: {story.descendants}</h2>
							<a className="Link" href={story.url}>
								View Full Article
							</a>
						</div>
					</div>
				</div>
			))}
			{props.stories.map((story) => (
				<div className="story">
					<h1 className="Title">Title: {story.title}</h1>
					<div className="storyContent">
						<div className="leftStory">
							<h2 className="Author">Author: {story.by}</h2>
							<h2 className="Type">Type of article: {story.type}</h2>
							<h2 className="Score">Score: {story.score}</h2>
						</div>
						<div className="rightStory">
							<h2 className="Date">Date posted: {timePostedCalc(story.time)}</h2>
							<h2 className="Number">Number of comments: {story.descendants}</h2>
							<a className="Link" href={story.url}>
								View Full Article
							</a>
						</div>
					</div>
				</div>
			))}
			{props.stories.map((story) => (
				<div className="story">
					<h1 className="Title">Title: {story.title}</h1>
					<div className="storyContent">
						<div className="leftStory">
							<h2 className="Author">Author: {story.by}</h2>
							<h2 className="Type">Type of article: {story.type}</h2>
							<h2 className="Score">Score: {story.score}</h2>
						</div>
						<div className="rightStory">
							<h2 className="Date">Date posted: {timePostedCalc(story.time)}</h2>
							<h2 className="Number">Number of comments: {story.descendants}</h2>
							<a className="Link" href={story.url}>
								View Full Article
							</a>
						</div>
					</div>
				</div>
			))}
			{props.stories.map((story) => (
				<div className="story">
					<h1 className="Title">Title: {story.title}</h1>
					<div className="storyContent">
						<div className="leftStory">
							<h2 className="Author">Author: {story.by}</h2>
							<h2 className="Type">Type of article: {story.type}</h2>
							<h2 className="Score">Score: {story.score}</h2>
						</div>
						<div className="rightStory">
							<h2 className="Date">Date posted: {timePostedCalc(story.time)}</h2>
							<h2 className="Number">Number of comments: {story.descendants}</h2>
							<a className="Link" href={story.url}>
								View Full Article
							</a>
						</div>
					</div>
				</div>
			))}
			{props.stories.map((story) => (
				<div className="story">
					<h1 className="Title">Title: {story.title}</h1>
					<div className="storyContent">
						<div className="leftStory">
							<h2 className="Author">Author: {story.by}</h2>
							<h2 className="Type">Type of article: {story.type}</h2>
							<h2 className="Score">Score: {story.score}</h2>
						</div>
						<div className="rightStory">
							<h2 className="Date">Date posted: {timePostedCalc(story.time)}</h2>
							<h2 className="Number">Number of comments: {story.descendants}</h2>
							<a className="Link" href={story.url}>
								View Full Article
							</a>
						</div>
					</div>
				</div>
			))}
			{props.stories.map((story) => (
				<div className="story">
					<h1 className="Title">Title: {story.title}</h1>
					<div className="storyContent">
						<div className="leftStory">
							<h2 className="Author">Author: {story.by}</h2>
							<h2 className="Type">Type of article: {story.type}</h2>
							<h2 className="Score">Score: {story.score}</h2>
						</div>
						<div className="rightStory">
							<h2 className="Date">Date posted: {timePostedCalc(story.time)}</h2>
							<h2 className="Number">Number of comments: {story.descendants}</h2>
							<a className="Link" href={story.url}>
								View Full Article
							</a>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default StoryInfo;
