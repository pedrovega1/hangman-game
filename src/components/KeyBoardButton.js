import React, { Component } from 'react'
import './KeyBoardButton.css'
export default class KeyBoardButton extends Component {
  render() {
    const letter = this.props.letter;

    const handleClick =  () => {
      this.props.getInput(letter);
    
    }
    return (
      <button className='keyboard-button' onClick={handleClick} type="button"> 
      {letter}
      </button>
    )
  }
}
