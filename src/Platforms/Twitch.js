import React, { Component } from 'react';
import ReactPlayer from 'react-player'

class Twitch extends Component {
    render() {
        return (
            <div className="twitch">
                <ReactPlayer
                    className="video-window"
                    url={this.props.url}
                    playing={this.props.playing}
                    onPlay={this.props.onPlay}
                    onPause={this.props.onPause}
                    controls={true}
                    width="888px"
                    height="500px"
                />
                <iframe
                    className="twitch-chat"
                    frameborder="0"
                    scrolling="yes"
                    id="chat_embed"
                    src={this.props.src}
                    height="500"
                    width="350"
                />
            </div>
        );
    };
}

export default Twitch;