import React, { Component } from 'react';
import "./ScoringInfo.css";
import "../app.js";

class ScoringInfo extends Component {

    state = { messageStatus: "" }

};

//currentScore and topScore will be declared in app.js

componentDidUpdate(currentScore, topScore); {
    const newState

    if (currentScore === 0 & topScore === 0) {
        newState.message = "";

    } else if (currentScore === 0 & topScore > 0) {
        newState.message = "incorrect"
    } else {
        newState.message = "correct"
    };
};

renderMessage = () => {
    if (newState.message === "correct") {
        return "You guessed correctly"
    } else if (newState.message === "incorrect") {
        return "You guessed incorrectly"
    } else {
        return "Click an Image to begin"
    }
};

export default ScoringInfo;