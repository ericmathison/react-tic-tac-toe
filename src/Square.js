import React, { Component } from 'react';
import './Square.css';

class Square extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerIcon: '',
    };

    this.clickSquare = this.clickSquare.bind(this);
  }

  clickSquare() {
    if (this.state.playerIcon === '') {
      this.props.setPlayer(this.props.currentPlayer);
      this.setState({
        playerIcon: this.props.currentPlayer
      });
    }
  }

  render() {
    return (
      <div className={`Square ${this.state.playerIcon}`} onClick={this.clickSquare}>
        {this.state.playerIcon}
      </div>
    );
  }
}

export default Square;
