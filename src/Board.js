import React, { Component } from 'react';
import './Board.css';
import Square from './Square.js';

class Board extends Component {
  render() {
    return (
      <div className="Board">
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
      </div>
    );
  }
}

export default Board;
