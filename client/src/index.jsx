import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';

class Board extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <h1>Hello world</h1>
            </div>
        )
    }
}

render(<Board />, document.getElementById('app'));