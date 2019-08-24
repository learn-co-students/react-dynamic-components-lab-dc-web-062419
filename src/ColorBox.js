import React, { Component } from 'react';

export default class ColorBox extends Component {
  
  render() {
  //  return ({this.props.opacity > 0.2 ? <div>cool</div> : <div>Stop it</div>})
  let newValue = this.props.opacity - 0.1;
  // debugger
  if (this.props.opacity > 0.2){ 
    debugger  
  return (
      <div className="color-box" style={{opacity: this.props.opacity}}>
        
        
       <ColorBox opacity={newValue} />
      </div>
    )
    
  }
  else{
   return null
  }
  
}}
