import React, { Component } from 'react'
import KeyBoardButton from './KeyBoardButton';
import './KeyBoard.css'
export default class KeyBoard extends Component {
  render() {

    const getLetters = () =>{
        let result = [];
        for(let i = 65; i<65+26;i++){
            result.push(String.fromCharCode(i));
        }
        return result;
    }
    const letters = getLetters();
    const buttons = letters.map((letter)=>{
        return(
            <KeyBoardButton getInput={this.props.getInput} letter = {letter} key={letter.charCodeAt(0)}/>
        )
    })
    return (
      <div className='keyboard-container'>
        {buttons}
      </div>
    )
  }
}


