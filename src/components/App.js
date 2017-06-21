import React, {Component} from 'react';
import '../css/App.css';
import One from './One';
import Two from './Two';
import Three from './Three';

class App extends Component {
  render() {
    return (
      <div>
        <One color="Red">
          Button
        </One>
        <Two/>
        <Three/>
      </div>
    )
  }
}

export default App;

// import React, {Component} from 'react';
// import '../css/App.css';
// import One from './One';
// import Two from './Two';
// import Three from './Three';
//
// export default class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <h1>Header!</h1>
//         </header>
//         <main>
//           <One color="red">
//             login button
//           </One>
//           <Two />
//           <Three />
//         </main>
//       </div>
//     )
//   }
// }
