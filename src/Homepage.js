import React, { Component } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import Spinner from './components/Spinner';
import Sidebar from './components/Sidebar';
import JokesList from './components/JokesList';
import './Homepage.css';

class Homepage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            jokes: [],
            loading: false
        }

        this.handleVotes = this.handleVotes.bind(this);
        this.fetchJokes = this.fetchJokes.bind(this);
    }

    static defaultProps = {
        numOfJokesToGet: 10
    };

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

    async fetchJokes() {
        this.setState({
            loading: true
        })
        let jokes = [];
        while (jokes.length < this.props.numOfJokesToGet) {
            let res = await axios.get("https://icanhazdadjoke.com/", { headers: { Accept: "application/json" } });
            jokes.push({ jokeText: res.data.joke, votes: 0, id: uuidv4() });
        }
        this.setState({
            jokes: jokes,
            loading: false
        });
    }

    render() {
        if (this.state.loading) {
            return (<Spinner />)
        }

        return (
            <div className="Homepage">
                <Sidebar fetchJokes={this.fetchJokes} />
                <JokesList jokes={this.state.jokes} updateVoteCount={this.handleVotes} />
            </div>
        );
    }
}

export default Homepage;