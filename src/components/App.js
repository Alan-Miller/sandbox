import React, {Component} from 'react';
import '../styles/App.css';
import Grandparent from './Grandparent'

class App extends Component {


  render() {
    return(
      <div className="family">
        <Grandparent/>
      </div>
    )
  }
}

export default App;
