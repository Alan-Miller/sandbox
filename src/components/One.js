import React, {Component} from 'react';

export default class One extends Component {

  constructor() {
    super()

    this.state = {
      username: ''
      ,password: ''
    }

    // this.handleUpdateUsername = this.handleUpdateUsername.bind(this);
    // this.handleUpdatePassword = this.handleUpdatePassword.bind(this);
    this.handleUpdateInput = this.handleUpdateInput.bind(this);
    this.loginUser = this.loginUser.bind(this);
  }

  // handleUpdateUsername(event) {
  //   this.setState({
  //     username: event.target.value
  //   })
  // }
  //
  // handleUpdatePassword(event) {
  //   this.setState({
  //     password: event.target.value
  //   })
  // }

  handleUpdateInput(event) {
    // let key = event.target.placeholder;
    // console.log(event.target.placeholder);
    this.setState({
      [event.target.dataset.key]: event.target.value
    })
  }

  loginUser() {
    console.log(`Logging in ${this.state.username} with password ${this.state.password}`);
  }


  render() {
    return (
      <section className="section-one">
        <input onChange={this.handleUpdateInput} data-key="username" placeholder="Username here" value={this.state.username}/>
        <input onChange={this.handleUpdateInput} data-key="password" placeholder="Password here" value={this.state.password}/>
        <button onClick={this.loginUser}>
          {this.props.color} {this.props.children}
        </button>
      </section>
    )
  }
}
