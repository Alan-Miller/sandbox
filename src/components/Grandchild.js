import React, {Component} from 'react';

class Grandchild extends Component {

  render() {
    return (

      <div className={`grandchild ${this.props.family}`}><p>{this.props.branch.name} {this.props.family}</p></div>
    )
  }
}

export default Grandchild;
