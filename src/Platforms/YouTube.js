import React, { Component } from 'react';
import ReactPlayer from 'react-player'

class Youtube extends Component {
    render() {
        return (
            <ReactPlayer
                className="video-window"
                url={this.props.url}
                playing={this.props.playing}
                onPlay={this.props.onPlay}
                onPause={this.props.onPause}
                controls={this.props.controls}
                width="888px"
                height="500px"
            />
        );
    };
}

export default Youtube;