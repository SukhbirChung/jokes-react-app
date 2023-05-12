import React, { Component } from 'react';
import './Spinner.css';

class Spinner extends Component {
    render() {
        return (
            <div className="Spinner">
                <i className="far fa-8x fa-laugh fa-spin"></i>
                <span>Loading...</span>
            </div>
        )
    }
}

export default Spinner;