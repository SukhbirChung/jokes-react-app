import React, { Component } from 'react';
import Votes from './Votes';
import Emoji from './Emoji';

class Joke extends Component {
    render() {
        return (
            <div className="Joke">
                <Votes jokeInfo={this.props.jokeInfo}
                    updateVoteCount={this.props.updateVoteCount} />

                <div className="Joke-Text">
                    {this.props.jokeInfo.jokeText}
                </div>

                <Emoji votes={this.props.jokeInfo.votes}/>
            </div>
        );
    }
}

export default Joke;
