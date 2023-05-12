import React, { Component } from 'react';
import './Sidebar.css';

class Sidebar extends Component {
    render() {
        return (
            <div className="Sidebar">
                <h1><span>Dad</span> Jokes</h1>
                <img src='https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg' alt="laughing emoji"/>
                <button>New Jokes</button>
            </div>
        );
    }
}

export default Sidebar;
