import React, { Component } from 'react';

class Votes extends Component {
    constructor(props) {
        super(props);
        this.updateVoteCountHandler = this.updateVoteCountHandler.bind(this);
    }

    getColor() {
        if (this.props.jokeInfo.votes >= 15) {
            return "#4CAF50";
        } else if (this.props.jokeInfo.votes >= 12) {
            return "#8BC34A";
        } else if (this.props.jokeInfo.votes >= 9) {
            return "#CDDC39";
        } else if (this.props.jokeInfo.votes >= 6) {
            return "#FFEB3B";
        } else if (this.props.jokeInfo.votes >= 3) {
            return "#FFC107";
        } else if (this.props.jokeInfo.votes >= 0) {
            return "#FF9800";
        } else {
            return "#f44336";
        }
    }

    updateVoteCountHandler(evt) {
        if (evt.target.classList[1].endsWith("up")) {
            this.props.updateVoteCount(this.props.jokeInfo.id, 1);
        }
        else {
            this.props.updateVoteCount(this.props.jokeInfo.id, -1);
        }
    }

    render() {
        return (
            <div className="Joke-VoteButtons">
                <i className="fas fa-arrow-up" onClick={this.updateVoteCountHandler}></i>
                <span style={{ border: `3px solid ${this.getColor()}` }}>{this.props.jokeInfo.votes}</span>
                <i className="fas fa-arrow-down" onClick={this.updateVoteCountHandler}></i>
            </div>
        )
    }
}

export default Votes;