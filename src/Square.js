import React, { useState } from 'react';
import './Square.css';

function Square(props) {
  const [playerIcon, setPlayerIcon] = useState('');

  const clickSquare = () => {
    if (!props.currentIcon) {
      props.setPlayer(props.currentPlayer);
      setPlayerIcon(props.currentPlayer);
      props.setIcon(props.squareIndex, props.currentPlayer);
    }
  }

  return (
    <div className={`Square ${props.currentIcon}`} onClick={clickSquare}>
      {props.currentIcon}
    </div>
  );
}

export default Square;
