import React, {Component} from 'react';
import Parent from './Parent';
import {bakers} from '../bakers';
import msgToAlan from '../msgToAlan';

var msg = ""

class Grandparent extends Component {

  passMsg = (name) => {
    msg = name;
    this.forceUpdate();
    return name;
  }


  render() {
    return (
      <div className="baker grandparent"><p>Marian Baker</p>

        {bakers.kids.map((kid, i) => (
          <Parent key={i} branch={kid} family={kid.name === "Shannon" ? "Moore" : "Miller"} mooreGirlsMsg={this.passMsg} toAlan={msgToAlan(msg)}/>
        ))}

      </div>
    )
  }
}

export default Grandparent;
