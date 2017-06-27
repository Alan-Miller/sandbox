import React, {Component} from 'react';
import Child from './Child';

class Parent extends Component {

  passMsg = (name) => {
    this.props.mooreGirlsMsg(name)
  }

  render() {

    return (

      <div className={`parent ${this.props.family}`}><p>{this.props.branch.name} {this.props.family}</p>
        {this.props.branch.kids.map((kid, i) => (
          <Child key={i} branch={kid} family={this.props.family} mooreGirlsMsg={this.passMsg} toAlan={this.props.toAlan}/>
        ))}
      </div>
    )
  }
}

export default Parent;
