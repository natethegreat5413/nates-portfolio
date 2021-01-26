import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

// photos
import nz from '../images/new-zealand.jpg';
import todo from '../images/todo.png';
import youtube from '../images/youtube.png';
import storySquad from '../images/story-squad.png';
import Plants from '../images/plants.jpg';
import kickstarter from '../images/kickstart.jpg';
import weather from '../images/weather-app.png';
import disaster from '../images/disaster-app.png';

function Cards() {
	return (
		<div className="cards">
			<h1>Check out my work!</h1>
			<div className="cards__container">
				<div className="cards__wrapper">
					<ul className="cards__items">
						<CardItem
							src={kickstarter}
							text="This is a RESTful API built for a kickstarter app that allows you to Register, Login, Start, Edit, and Delete Campaigns. Works with data science to determine the success of the campaign."
							label="Kickstarter REST API"
							url="https://documenter.getpostman.com/view/12253302/TVKEVbXn"
							url1="https://github.com/buildweek-kickstarter/back-end"
							url2="https://documenter.getpostman.com/view/12253302/TVKEVbXn"
						/>
						<CardItem
							src={storySquad}
							text="Story Squad attempts to turn 'reluctant readers' into authors and illustrators through a collaborative world-building game."
							label="Story Squad"
							url="https://www.youtube.com/watch?v=fo_eAq-__RE"
							url1="https://github.com/natethegreat5413/story-squad-fe-b"
							url2="https://www.youtube.com/watch?v=fo_eAq-__RE"
						/>
						<CardItem
							src={disaster}
							text="Disaster Tracker uses google maps to mark wildfires, volcanoes, and icebergs across the globe using the NASA API."
							label="Disaster Tracker"
							url="https://disaster-tracker.vercel.app/"
							url1="https://github.com/natethegreat5413/disaster-tracker"
							url2="https://disaster-tracker.vercel.app/"
						/>
					</ul>
					<ul className="cards__items">
						<CardItem
							src={youtube}
							text="A clone of the youtube app which lets you search for videos on the youtube API."
							label="Youtube Clone"
							url="http://youtube-clone.natethegreat5413.vercel.app/"
							url1="https://github.com/natethegreat5413/youtube-clone"
							url2="http://youtube-clone.natethegreat5413.vercel.app/"
						/>
						<CardItem
							src={Plants}
							text="An app for all the plant lovers out there who just need a simple reminder when they need to water their plants each week."
							label="Water My Plants"
							url="https://plantparenthood-40nlewndt.vercel.app/"
							url1="https://github.com/natethegreat5413/front-end?organization=natethegreat5413&organization=natethegreat5413"
							url2="https://plantparenthood-40nlewndt.vercel.app/"
						/>
						<CardItem
							src={weather}
							text="A weather app retreiving information from an api that let's you see the weather anywhere in the world."
							label="How's the weather?"
							url="https://weather-app-black-eight.vercel.app/"
							url1="https://github.com/natethegreat5413/weather-app"
							url2="https://weather-app-black-eight.vercel.app/"
						/>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Cards;
