import React, {Component} from 'react';
import YouTube from './Platforms/YouTube'
import Twitch from './Platforms/Twitch'
import Other from './Platforms/Other'

class PlatformChooser extends Component {
    render() {
        switch (this.props.config.platform) {
            case "YouTube":
                return (
                    <YouTube
                        url={this.props.config.url}
                        playing={this.props.config.playing}
                        onPlay={this.props.onPlay}
                        onPause={this.props.onPause}
                        controls={true}
                    />
                );
            case "Twitch":
                return (
                    <Twitch
                        url={this.props.config.url}
                        src={`http://www.twitch.tv/embed/${this.props.config.chatName}/chat`}
                        playing={this.props.config.playing}
                        onPlay={this.props.onPlay}
                        onPause={this.props.onPause}
                    />
                );
            case "Anime":
                return (
                    <Other
                    />
                );
            default:
                return null;
        }
    }
}

export default PlatformChooser;