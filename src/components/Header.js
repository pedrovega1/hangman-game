import React, {Component} from 'react'
import './Header.css'

export default  class Header extends Component{
    render(){
        return(
            <div className='header'>
                <h1>Hangsman app</h1>
                <h3>VANILLA JAVASCRIPT HANGMAN GAME</h3>
                <h3>
                    You have <span className='live-span'>{this.props.attempts}</span> Lives left {""}
                </h3>
            </div>
        )
    }
}