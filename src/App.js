import React, { Component } from 'react';
import './App.css';
import Video from './components/Video/Video';
// import Example from './components/Video/Videotest';
import ModalVideo from './components/Modal/ModalVideo';
import Forms from './components/Forms/Form';

class App extends Component {
  render() {
    return (
      <div id="main">

        
        <Video />
      </div>
    );
  }
}

export default App;
