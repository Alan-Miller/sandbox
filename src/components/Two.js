import React, {Component} from 'react';

export default class Two extends Component {

  constructor() {
    super()

    this.state = {
      seconds: 0
    }
  }

  render() {

    setTimeout(() => {
      this.setState({
        seconds: this.state.seconds + 1
      })
    }, 1000);

    return (
      <section className="section-two">
        <h3>Time since render: {this.state.seconds} seconds</h3>
      </section>
    )
  }
}
