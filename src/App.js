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

  handlePause = (event) => {
    this.setState({
      paused: event.target.checked,
    });
  }

  render() {
    return (
      <div className="App">
        <input
          type="checkbox"
          id="paused"
          checked={this.state.paused}
          onChange={this.handlePause}
        />
        <div className="col s9 center-align">
          <YouTube
            video={"Fm5iP0S1z9w"}
            width={640}
            height={480}
            autoplay={true}
            controls={false}
            paused={this.state.paused}
          />
        </div>
      </div>
      
    );
  }
}

export default App;
