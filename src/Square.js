import React, { Component } from 'react';
import './Square.css';

class Square extends Component {
  constructor(props) {
    super(props);
    this.clickSquare = this.clickSquare.bind(this);
  }

  clickSquare() {
    if (!this.props.currentIcon) {
      this.props.setPlayer(this.props.currentPlayer);
      this.setState({
        playerIcon: this.props.currentPlayer
      });

      this.props.setIcon(this.props.squareIndex, this.props.currentPlayer);
    }
  }

  render() {
    return (
      <div className={`Square ${this.props.currentIcon}`} onClick={this.clickSquare}>
        {this.props.currentIcon}
      </div>
    );
  }
}

export default Square;
