import React, { Component } from 'react';
import './Board.css';
import Square from './Square.js';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPlayer: 'x'
    };
  }

  setCurrentPlayer = () => {
    if (this.state.currentPlayer === 'x') {
      this.setState({currentPlayer: 'o'});
    } else {
      this.setState({currentPlayer: 'x'});
    }
  };

  render() {
    return (
      <div className="Board" onClick={this.setCurrentPlayer}>
          <Square currentPlayer={this.state.currentPlayer} />
          <Square currentPlayer={this.state.currentPlayer} />
          <Square currentPlayer={this.state.currentPlayer} />
          <Square currentPlayer={this.state.currentPlayer} />
          <Square currentPlayer={this.state.currentPlayer} />
          <Square currentPlayer={this.state.currentPlayer} />
          <Square currentPlayer={this.state.currentPlayer} />
          <Square currentPlayer={this.state.currentPlayer} />
          <Square currentPlayer={this.state.currentPlayer} />
      </div>
    );
  }
}

export default Board;
