import React, { Component } from "react";



export default class Winner extends Component {
    render() {
        return (
            <div style={{ textAlign: "center" }} className="winner">
                <h1 style={{color:"red"}}>Congratulations!!! Победа ура ура ура</h1>
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