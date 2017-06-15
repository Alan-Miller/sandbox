import React, { Component } from 'react';
import GuestList from './GuestList';
import Child from './Child';
import logo from './logo.svg';
import './App.css';
import './GuestJQ.js';

class App extends Component {

  render() {

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Party List</h2>
        </div>
        <GuestList />
        <Child />
      </div>
    );
  }
}

export default App;
