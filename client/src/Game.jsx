import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import Board from './Board.jsx';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null)
      }],
      xIsNext: true
    }
  }
    render() {
        return (
            <div className="game">
              <div className="game-board">
                <Board />
              </div>
              <div className="game-info">
                <div>{/* status */}</div>
                <ol>{/* TODO */}</ol>
              </div>
            </div>
        );
    }
}

render(<Game />, document.getElementById('app'));