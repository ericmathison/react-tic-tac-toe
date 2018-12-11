import React, { Component } from 'react';
import './Board.css';

class Board extends Component {
  render() {
    return (
      <div className="Board">
          <div className="Board-square"></div>
          <div className="Board-square"></div>
          <div className="Board-square"></div>
          <div className="Board-square"></div>
          <div className="Board-square"></div>
          <div className="Board-square"></div>
          <div className="Board-square"></div>
          <div className="Board-square"></div>
          <div className="Board-square"></div>
      </div>
    );
  }
}

export default Board;
