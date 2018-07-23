import React, { Component } from 'react';
import './Home.css';
import ReactPlayer from 'react-player'
import PlatformChooser from './PlatformChooser';

class Home extends Component {

	constructor(props) {
		super(props);

		this.state = {
			platform: "YouTube",
			playing: false,
			url: 'https://www.youtube.com/watch?v=Fm5iP0S1z9w',
			chatName: ""
		};
	}

	handlePauseCheckbox = (event) => {this.setState({ playing: event.target.checked });}

	onPauseVideo = () => {this.setState({ playing: false });}

	onPlayingVideo = () => {this.setState({ playing: true });}

	changeVideo = (e) => {
		e.preventDefault();
		let url = this.refs.link.value;

		if (url.includes("twitch")) {
			let name = url.substring(url.lastIndexOf('/') + 1);
			this.setState({
				platform: "Twitch",
				url: url,
				chatName: name
			});
		} else if (url.includes("rapidvideo")) {
			this.setState({
				platform: "Anime",
				url: url
			});
		}
		else if (url.includes("youtube")){
			this.setState({
				platform: "YouTube",
				url: url
			});
		} else {
			alert("Not valid URL");
		}
	}

	render() {
		return (
			<div className="WatchWithFriends">

				<h1 className="header">Gerry and Annie's Movie Theater</h1>

				<div className="player">
					<form onSubmit={this.changeVideo}>
						<input type="text" className="video-url" ref="link" spellCheck={false} placeholder="Paste video URL here" />
						<button className="submit-video" type="submit">Submit</button>
					</form>
					<div className="video">
						<PlatformChooser
							config={this.state}
							onPlay={this.onPlay}
							onPause={this.onPauseVideo}
						/>
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
