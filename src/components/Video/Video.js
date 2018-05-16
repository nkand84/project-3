import React, { Component } from 'react';
import YouTube from 'react-youtube';
import ModalVideo from '../Modal/ModalVideo';

let youTubeTimer;

class Video extends Component {

  state = {
    ct: 0,
    openModal: false
  };

  round = (number, precision) => {
    let shift = (number, precision) => {
      let numArray = ("" + number).split("e");
      return +(numArray[0] + "e" + (numArray[1] ? (+numArray[1] + precision) : precision));
    };
    return shift(Math.round(shift(number, +precision)), -precision);
  }

  _onPlay = (event) => {
    // access to player in all event handlers via event.target
    const stoppingPoints = [5.1, 10.1, 15.1, 18.1];
    this.setState({
      openModal: false
    });
    youTubeTimer = setInterval(() => {
      // console.log(this.round(event.target.getCurrentTime(), 1));
      if (this.round(event.target.getCurrentTime(), 1) === stoppingPoints[this.state.ct]){ 
        this.setState({
          ct: this.state.ct + 1,
          openModal: true
        });
        event.target.pauseVideo();
      }
    }, 100); 
  }

  _onPause = (event) => {
    clearInterval(youTubeTimer);
  }

  _onEnd = (event) => {
    this.setState({
      ct: 0,
      openModal: false
    });
    clearInterval(youTubeTimer);
  }

  

  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };
 
    return (
      <div>
        <YouTube
          videoId="2g811Eo7K8U"
          opts={opts}
          onReady={this._onReady}
          onPlay={this._onPlay}
          onPause={this._onPause}
          onEnd={this._onEnd}
        />
        {
          (this.state.openModal) ? <ModalVideo/> : ""
        }
      </div>
    );
  }
}


export default Video;