import React from 'react';

export default class RickRolled extends React.Component {
  constructor() {
    super();
    this.state = {
      msg: '',
    };
  }

  handleClick = () => {
    this.setState({ msg: 'Never gonna give you up....' });
  };

  render() {
    return (
      <div>
        <img
          src={require('../../assets/rick.jpg')}
          alt="rick"
          onClick={this.handleClick}
        ></img>
        <h1>{this.state.msg}</h1>
      </div>
    );
  }
}
