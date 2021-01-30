import React from 'react';

class BaseButton extends React.Component {

  constructor(){
    super()
    this.state={name:''}
  }
  onClick =() =>{
    this.setState({name:'some Text'})
  };
  render(){
    return(
      <div>
      <button className ="base-button" onClick={this.onClick}>
      </button>
      </div>
    );
  }
}

export default BaseButton;
