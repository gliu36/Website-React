import React, { Component } from 'react';
import './Home.css';
import ReactPlayer from 'react-player'
import YouTube from './Platforms/YouTube'
import Twitch from './Platforms/Twitch'
import Other from './Platforms/Other'

class Home extends Component {

	constructor(props) {
		super(props);

		this.state = {
			youtube: true,
			twitch: false,
			playing: false,
			url: 'https://www.youtube.com/watch?v=Fm5iP0S1z9w',
			chat: false,
			chatName: "",
			other: false
		};
	}

	handlePauseCheckbox = (event) => {
		console.log(event.target.checked);
		this.setState({
			playing: event.target.checked
		});
	}

	onPauseVideo = () => {
		console.log("pause");
		this.setState({
			playing: false
		});
	}

	onPlayingVideo = () => {
		console.log("playing");
		this.setState({
			playing: true
		});
	}

	changeVideo = (e) => {
		e.preventDefault();
		let url = this.refs.link.value;

		if (url.includes("twitch")) {
			let name = url.substring(url.lastIndexOf('/') + 1);
			this.setState({
				youtube: false,
				url: url,
				twitch: true,
				chatName: name
			});
		} else if (url.includes("rapidvideo")) {
			this.setState({
				youtube: false,
				twitch: false,
				other: true
			});
		}
		else if (url.includes("youtube")){
			this.setState({
				youtube: true,
				url: url,
				chat: false,
				twitch: false,
				chatName: ""
			});
		}
	}

	render() {
		return (
			<div className="WatchWithFriends">

				<h4 className="header">Gerry and Annie's Movie Theater</h4>

				<div className="player">
					<form onSubmit={this.changeVideo}>
						<input type="text" className="video-url" ref="link" placeholder="Paste video URL here" />
						<button className="submit-video" type="submit">Submit</button>
					</form>
					<div className="video">

						{this.state.youtube &&
							<YouTube
								url={this.state.url}
								playing={this.state.playing}
								onPlay={this.onPlayingVideo}
								onPause={this.onPauseVideo}
								controls={true}
							/>}

						{this.state.other &&
							<Other
							/>}

						{this.state.twitch &&
							<Twitch
								url={this.state.url}
								src={`http://www.twitch.tv/embed/${this.state.chatName}/chat`}
								playing={this.state.playing}
								onPlay={this.onPlayingVideo}
								onPause={this.onPauseVideo}
							/>}
					</div>
					<div className="play">
						<input
							type="checkbox"
							id="play-pause"
							checked={this.state.playing}
							onChange={this.handlePauseCheckbox}
						/>
						<label htmlFor="play-pause" id="play-pause-label" className="win-button"></label>
					</div>
				</div>
			</div>

		);
	}
}

export default Home;
