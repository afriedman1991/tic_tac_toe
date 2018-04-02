import React, { Component } from 'react';
import Square from './Square.jsx';

class Board extends Component {
    constructor(props) {
        super(props)
        this.state = {
            status: 'Next player: X',
            squares: Array(9).fill(null)
        }
        this.renderSquare = this.renderSquare.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(i) {
        const squares = this.state.squares.slice();
        squares[i] = 'X';
        this.setState({squares: squares});
    }

    renderSquare(i) {
        return (
            <Square 
            value={this.state.squares[i]}
            onClick={() => this.handleClick(i)}
        />
      );
    }

    render() {
        return (
            <div>
                <div className="status">{this.state.status}</div>
                <div className="board-row">
                  {[0,1,2].map((value, index) => this.renderSquare(value))}
                </div>
                <div className="board-row">
                  {[3,4,5].map((value, index) => this.renderSquare(value))}
                </div>
                <div className="board-row">
                  {[6,7,8].map((value, index) => this.renderSquare(value))}
                </div>
            </div>
        )
    }
}

export default Board;