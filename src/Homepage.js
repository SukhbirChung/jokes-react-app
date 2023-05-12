import React, { Component } from 'react';
import './Homepage.css';
import Sidebar from './components/Sidebar';
import JokesList from './components/JokesList';

class Homepage extends Component {
    render() {
        return (
            <div className="Homepage">
                <Sidebar />
                <JokesList />
            </div>
        );
    }
}

export default Homepage;