import React, { Component } from 'react'
import KeyBoard from './Keyboard'
export default class Input extends Component {
  render() {
    return (
      <div className="input-container">
      <KeyBoard getInput = {this.props.getInput}/>
      </div>
    )
  }
}
