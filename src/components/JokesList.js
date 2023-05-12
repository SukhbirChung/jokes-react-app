import React, { Component } from 'react';
import Joke from './Joke';
import './JokesList.css';

class JokesList extends Component {
    render() {
        return (
            <div className="JokesList">
                {this.props.jokes.map((joke) => {
                    return <Joke key={joke.id} jokeInfo={joke}
                        updateVoteCount={this.props.updateVoteCount} />
                })}
            </div>
        );
    }
}

export default JokesList;
