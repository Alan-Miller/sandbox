import React, {Component} from 'react';
import Grandchild from './Grandchild';

class Child extends Component {

  render() {
    const family = this.props.branch.name === "Lauren" ? "Mathews" : this.props.family;
    const msg = this.props.branch.name !== "Alan" ? <div className="msgButton" onClick={() => this.props.mooreGirlsMsg(this.props.branch.name)}>SAY HI</div> : <div className="button">{this.props.toAlan}</div>;

    return (
      <div>
        <div className={`child ${this.props.family}`}><p>{this.props.branch.name} {family}</p>
          <div className="msgButton">{msg}</div>
          {this.props.branch.kids.map((kid, i) => (
            <Grandchild key={i} branch={kid} family={family}/>
          ))}
        </div>

      </div>
    )
  }
}

export default Child;
