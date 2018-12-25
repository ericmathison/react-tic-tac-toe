import React, { Component } from 'react';
import './Board.css';
import Square from './Square.js';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPlayer: 'x',
      icons: [...Array(9)]
    };
  }

  setPlayer = currentPlayer => {
    if (currentPlayer === 'x') {
      this.setState({currentPlayer: 'o'});
    } else {
      this.setState({currentPlayer: 'x'});
    }
  };

  setIcon = (n, icon) => {
    let newIcons = this.state.icons;
    newIcons[n] = icon;
    this.setState({icons: newIcons});
  }

  render() {
    return (
      <div className="Board">
          {[...Array(9).keys()].map(n =>
            <Square key={n}
                    squareIndex={n}
                    currentPlayer={this.state.currentPlayer}
                    currentIcon={this.state.icons[n]}
                    setPlayer={this.setPlayer}
                    setIcon={this.setIcon}
            />
          )}
      </div>
    );
  }
}

export default Board;
