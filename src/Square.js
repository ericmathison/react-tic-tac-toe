import React, { Component } from 'react';
import './Square.css';

class Square extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player: ''
    };

    this.clickSquare = this.clickSquare.bind(this);
  }

  clickSquare(e) {
    e.preventDefault();
    this.setState({
      player: 'x'
    });
  }

  render() {

    return (
      <div className={`Square ${this.state.player}`} onClick={this.clickSquare}  >
      {this.state.player}
      </div>
    );
  }
}

export default Square;
