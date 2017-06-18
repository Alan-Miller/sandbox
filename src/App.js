import React, {Component} from 'react';
// import {getLuke} from './services/starwars';
import {getPeople} from './services/starwars';
import {connect} from 'react-redux';

class App extends Component {

  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     luke: {}
  //   }
  // }

  // componentDidMount() {
  //   getLuke().then(luke => {
  //     this.setState({
  //       luke: luke
  //     })
  //   });
  // }

  render() {
    const people = this.props.people.map((person, i) => (
      <div key={i}>{person.name}</div>
    ))

    return (
      <div>
        {/* <h1>{this.state.luke.name}</h1> */}
        <button onClick={this.props.getPeople}>Get Star Wars people</button>
        Loading: {this.props.loading ? 'Loading... ' : 'Done'}
        {this.props.loading ? 'Fetching people...' : people}
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    people: state.starwars.people
    ,loading: state.starwars.loading
  }
}

export default connect(mapStateToProps, {getPeople})(App);
