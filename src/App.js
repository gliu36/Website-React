import React, { Component } from 'react';
import './App.css';
import YouTube from '@u-wave/react-youtube';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      video: "Fm5iP0S1z9w",
      paused: false
    };
  }

  handlePauseCheckbox = (event) => {
    this.setState({
      paused: event.target.checked
    });
  }

  onPauseVideo = () => {
    this.setState({
      paused: true
    });
  }

  onPlayingVideo = () => {
    this.setState({
      paused: false
    });
  }

  render() {
    return (
      <div className="WatchWithFriends">

        <h4 className="header">Gerry and Annie's Movie Theatre</h4>
        <div className="player">
          <div className="video">
            <YouTube
              video={"Fm5iP0S1z9w"}
              width={640}
              height={480}
              autoplay={true}
              controls={true}
              paused={this.state.paused}
              onPause={this.onPauseVideo}
              onPlaying={this.onPlayingVideo}
            />
          </div>
          <div className="play">
            <input
              type="checkbox"
              id="play-pause"
              checked={this.state.paused}
              onChange={this.handlePauseCheckbox}
            />
            <label for="play-pause" id="play-pause-label" class="win-button"></label>
          </div>
        </div>
      </div>
      
    );
  }
}

export default App;
