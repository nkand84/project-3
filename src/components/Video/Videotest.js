import React from 'react'
import ReactDOM from 'react-dom'
import ModalVideo from 'react-modal-video'


class Example extends React.Component {

    constructor () {
      super()
      this.state = {
        isOpen: false
      }
      this.openModal = this.openModal.bind(this)
    }
  
    openModal () {
      this.setState({isOpen: true})
    }
  
    render () {
      return (
        <div>
          <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='2g811Eo7K8U' onClose={() => this.setState({isOpen: false})} />
          <button onClick={this.openModal}>Open</button>
        </div>
      )
    }
  }
  
  export default Example;