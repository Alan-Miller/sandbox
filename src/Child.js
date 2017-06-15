import React, { Component } from 'react';

class Child extends Component {

  constructor(props) {
    super(props)

    this.state = {
      count: 0,
      time: 0
    }

  }

  render() {

    // var self = this;
    setTimeout(() => {
      this.setState({
        count: this.state.count + 1
        ,time: this.state.time + 1
      })
    }, 1000)



    return (
      <div>
        <h1>Seconds since render: {this.state.count}</h1>
        <h1>Seconds since render: {this.state.time}</h1>
      </div>
    )
  }
}

export default Child;
