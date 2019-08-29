import React, { Component } from 'react';

export default class ColorBox extends Component {
  
  render() {
    return (
      <div className="color-box" style={{opacity: this.props.opacity}}>
        {this.props.opacity >= 0.2 ? <ColorBox opacity = {this.props.opacity - 0.1}/> : null}
      </div>
    )
  }
  
}
// function factorial(x) {
//   // TERMINATION
//   if (x < 0) return;
//   // BASE
//   if (x === 0) return 1;
//   // RECURSION
//   return x * factorial(x - 1);
// }
// factorial(3);
// // 6