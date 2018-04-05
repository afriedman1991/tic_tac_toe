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
      xIsNext: true,
      foundWinner: false
    }
    this.handleClick = this.handleClick.bind(this);
    this.calculateWinner = this.calculateWinner.bind(this);
    this.resetGame = this.resetGame.bind(this);
  }

  calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

  handleClick(i) {
    const history = this.state.history;
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (this.calculateWinner(squares) || squares[i]) {
      this.setState({
        foundWinner: true
      });
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares
      }]),
      xIsNext: !this.state.xIsNext
    });
  }

  resetGame() {
    this.setState({
      history: [{
        squares: Array(9).fill(null)
      }],
      xIsNext: true,
      foundWinner: false
    })
  }

    render() {
      const history = this.state.history;
      const current = history[history.length - 1];
      const winner = this.calculateWinner(current.squares);
      
      let foundWinner = false;
      let status;
      if (winner) {
        status = 'Winner: ' + winner;
        foundWinner = true;
      } else {
        status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
      }

        return (
            <div className="game" id="outer">
              <div id="special" className="game-board">
                <Board
                  squares={current.squares}
                  onClick={(i) => this.handleClick(i)}
                />

              </div>
              <div className="game-info">
                <div>{status}</div>
              </div>
              {
                foundWinner ? <button id="reset-game-button" onClick={this.resetGame}>Play Again?</button> : null
              }
            </div>
        );
    }
}

render(<Game />, document.getElementById('app'));