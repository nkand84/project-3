import React from 'react';
import YouTube from 'react-youtube';


class Video extends React.Component {
    // state = {
    //     pause: 0
    // }

    render() {
        const opts = {
            height: '390',
            width: '640',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 1
            }
        };

        return (
            <YouTube
                videoId="2g811Eo7K8U"
                opts={opts}
                onReady={this._onReady}
                // onPlay={this._pause}
            />
        );
    }

    test(event) {
        console.log("in test")  
    }
   
    _onReady(event) {
        // access to player in all event handlers via event.target
        console.log("ready func");
        // event.target.playVideo();
        // event.target.pauseVideo()
        setInterval(function(){
            console.log(parseInt(event.target.getCurrentTime()));
            if(parseInt(event.target.getCurrentTime()) === 5) {
                event.target.pauseVideo();
            }
        }, 100);
        
        // event.target.getCurrentTime();
        // setTimeout(event.target.pauseVideo,5000);
    }

    _pause(event){
        console.log("in pause")
        
        setTimeout(this.test,5000);
        // sleep(500).then(function(){
        //     console.log("in test")
        // });
    }



}


export default Video;