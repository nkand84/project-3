import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
 
const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };
   
  // Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
  Modal.setAppElement('#root');
       
  class ModalVideo extends React.Component {
    constructor() {
      super();
   
      this.state = {
        modalIsOpen: false
      };
   
      this.openModal = this.openModal.bind(this);
      this.afterOpenModal = this.afterOpenModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
    }

    componentDidMount() {
      // this.openModal(true)
      this.setState({
        modalIsOpen: true
      });
    }
   
    openModal = () => {
      this.setState({modalIsOpen: true});
    }
   
    afterOpenModal() {
      // references are now sync'd and can be accessed.
      this.subtitle.style.color = '#f00';
    }
   
    closeModal() {
      this.setState({modalIsOpen: false});
    }
   
    render() {
      return (
        <div>
          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
   
            <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
            <button onClick={this.closeModal}>close</button>
            {/* <div>I am a modal</div> */}
            <div>{this.props.question}</div>
            <form>
              <fieldset>
                <legend>Radio buttons</legend>
                <label>
                  <input id="radio-a" name="radios" type="radio" /> A: {this.props.answerChoiceOne}
                </label>
                <br />
                <label>
                  <input id="radio-b" name="radios" type="radio" /> B: {this.props.answerChoiceTwo}
                </label>
                <br />
                <label>
                  <input id="radio-c" name="radios" type="radio" /> C: {this.props.answerChoiceThree}
                </label>
                <br />
                <label>
                  <input id="radio-d" name="radios" type="radio" /> D: {this.props.answerChoiceFour}
                </label>
              </fieldset>
              <fieldset>
                <input type="text" />
                <input type="text" />
              </fieldset>
            </form>
           
          </Modal>
        </div>
      );
    }
  }

  export default ModalVideo;