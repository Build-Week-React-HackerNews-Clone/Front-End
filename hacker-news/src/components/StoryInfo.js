import React from 'react';
import '../Story.css';

const StoryInfo = (props) => {
	function routeToItem(ev, item) {
		ev.preventDefault();
		props.history.push(`/story/${item.id}`);
	}

	//Converts UNIX time to readable date format
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
		<div className="storyContainer">
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
							<h2 className="Date">Date posted: {timeConverter(story.time)}</h2>
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
							<h2 className="Date">Date posted: {timeConverter(story.time)}</h2>
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
							<h2 className="Date">Date posted: {timeConverter(story.time)}</h2>
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
							<h2 className="Date">Date posted: {timeConverter(story.time)}</h2>
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
							<h2 className="Date">Date posted: {timeConverter(story.time)}</h2>
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
							<h2 className="Date">Date posted: {timeConverter(story.time)}</h2>
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
							<h2 className="Date">Date posted: {timeConverter(story.time)}</h2>
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
							<h2 className="Date">Date posted: {timeConverter(story.time)}</h2>
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
							<h2 className="Date">Date posted: {timeConverter(story.time)}</h2>
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
							<h2 className="Date">Date posted: {timeConverter(story.time)}</h2>
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
