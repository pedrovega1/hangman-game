import React, { Component } from 'react'
import './GameOver.css'
export default class GameOver extends Component {
    render() {
        return (
            <div style={{ textAlign: "center" }} className="game-over">
                <h1>Sorry!!! You Lost the game</h1>
                <h1>
                    The correct answer was {""}
                    <span className="answer">"{this.props.word}"</span>
                </h1>
                <button
                    onClick={() => {
                        this.props.reset();
                    }}
                    className="reset-button"
                >
                    Reset
                </button>
            </div>
        );
    }
}
