import React, { Component } from 'react';
import './App.css';
import Video from './components/Video/Video';
import Example from './components/Video/Videotest';
import ModalVideo from './components/Modal/ModalVideo';

class App extends Component {
  render() {
    return (
      <div id="main">

        
        <Video />
        <ModalVideo> </ModalVideo>
      </div>
    );
  }
}

export default App;
