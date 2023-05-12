import React, { Component } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import Joke from './Joke';
import './JokesList.css';

class JokesList extends Component {
    static defaultProps = {
        numOfJokesToGet: 10
    };

    constructor(props) {
        super(props);
        this.state = {
            jokes: []
        }

        this.handleVotes = this.handleVotes.bind(this);
    }

    async componentDidMount() {
        let jokes = [];
        while (jokes.length < this.props.numOfJokesToGet) {
            let res = await axios.get("https://icanhazdadjoke.com/", { headers: { Accept: "application/json" } });
            jokes.push({ jokeText: res.data.joke, votes: 0, id: uuidv4() });
        }
        this.setState({
            jokes: jokes
        });
    }

    handleVotes(id, delta) {
        this.setState(currentState => {
            return {
                jokes: currentState.jokes.map(joke => {
                    if (joke.id === id) {
                        return { ...joke, votes: joke.votes + delta };
                    }
                    else {
                        return joke;
                    }
                })
            }
        })
    }

    render() {
        return (
            <div className="JokesList">
                {this.state.jokes.map((joke) => {
                    return <Joke key={joke.id} jokeInfo={joke}
                        updateVoteCount={this.handleVotes} />
                })}
            </div>
        );
    }
}

export default JokesList;
