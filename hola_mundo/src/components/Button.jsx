import React from 'react';

class Button extends React.Component {
  state = {
    count: 0
  }

  handleClick = () =>{
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <div>
        <p>Manzanas: {this.state.count}</p>
        <button type="button" onClick={this.handleClick}>Agregar Manzana</button>
      </div>
    );
  };
};

export default Button;