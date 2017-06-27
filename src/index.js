import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';



// ReactDOM.render(<App id="App "/>, document.getElementById('root'));
// registerServiceWorker();


ReactDOM.render(
  <App className="App"/>,
  document.getElementById('root')
);

registerServiceWorker();
