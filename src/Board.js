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

  setPlayer = currentPlayer => {
    if (currentPlayer === 'x') {
      this.setState({currentPlayer: 'o'});
    } else {
      this.setState({currentPlayer: 'x'});
    }
  };

  render() {
    return (
      <div className="Board">
          <Square currentPlayer={this.state.currentPlayer} setPlayer={this.setPlayer} />
          <Square currentPlayer={this.state.currentPlayer} setPlayer={this.setPlayer} />
          <Square currentPlayer={this.state.currentPlayer} setPlayer={this.setPlayer} />
          <Square currentPlayer={this.state.currentPlayer} setPlayer={this.setPlayer} />
          <Square currentPlayer={this.state.currentPlayer} setPlayer={this.setPlayer} />
          <Square currentPlayer={this.state.currentPlayer} setPlayer={this.setPlayer} />
          <Square currentPlayer={this.state.currentPlayer} setPlayer={this.setPlayer} />
          <Square currentPlayer={this.state.currentPlayer} setPlayer={this.setPlayer} />
          <Square currentPlayer={this.state.currentPlayer} setPlayer={this.setPlayer} />
      </div>
    );
  }
}

export default Board;
