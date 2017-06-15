import React, { Component } from 'react';
import './GuestList.css'

class GuestList extends Component {
  render() {
    return (
      <div className="GuestList-wrapper">
        <ul className="guest-list">
          {/* <li>First item in list!</li> */}
        </ul>
        <input className="new-guest" />
        <button className="add-guest">Add Guest</button>
      </div>
    )
  }

}

export default GuestList;
