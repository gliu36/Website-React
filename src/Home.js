import React, { Component } from 'react';
import './Home.css';
import ReactPlayer from 'react-player'
import PlatformChooser from './PlatformChooser';

class Home extends Component {

	constructor(props) {
		super(props);

		this.state = {
			platform: null,
			playing: false,
			url: null,
			chatName: null
		};
	}
	
	componentDidMount() {
		this.callApi()
		  .then(res => this.setState({
			  url: res.video,
			  platform: res.platform,
			  playing: res.playing,
			  chatName: res.chatName
			}))
		  .catch(err => console.log(err));
	  }
	
	  callApi = async () => {
		const response = await fetch('/api/sync');
		const body = await response.json();
	
		if (response.status !== 200) throw Error(body.message);
	
		return body;
	  };

	handlePauseCheckbox = (event) => {this.setState({ playing: event.target.checked });}

	onPauseVideo = () => {this.setState({ playing: false });}

	onPlayingVideo = () => {this.setState({ playing: true });}

	render() {
		return (
			<div className="WatchWithFriends">

				<h1 className="header">Gerry and Annie's Movie Theater</h1>

				<div className="player">
					<form action="/api/add" method="POST">
						<input type="text" name ="video-url" className="video-url" ref="link" spellCheck={false} placeholder="Paste video URL here" />
						<button className="submit-video" type="submit">Submit</button>
					</form>
					<div className="video">
						{this.state.platform && <PlatformChooser
							config={this.state}
							onPlay={this.onPlay}
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
