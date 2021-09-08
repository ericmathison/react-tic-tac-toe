import React, { useState } from 'react';
import './Board.css';
import Square from './Square.js';

function Board() {
  const [currentPlayer, setCurrentPlayer] = useState('x');
  const [icons, setIcons] = useState([...Array(9)]);

  const setPlayer = () => {
    if (currentPlayer === 'x') {
      setCurrentPlayer('o');
    } else {
      setCurrentPlayer('x');
    }
  };

  const setIcon = (n, icon) => {
    let newIcons = icons;
    newIcons[n] = icon;
    setIcons(newIcons);
  }

  return (
    <div className="Board">
        {[...Array(9).keys()].map(n =>
          <Square key={n}
                  squareIndex={n}
                  currentPlayer={currentPlayer}
                  currentIcon={icons[n]}
                  setPlayer={setPlayer}
                  setIcon={setIcon}
          />
        )}
    </div>
  );
}

export default Board;
