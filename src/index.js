import React from 'react';
import ReactDOM from 'react-dom';
import Favicon from 'react-favicon';

import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <Favicon url="https://github.com/paichato/ipadrrestracker/blob/main/mascardevs%20favicon.png?raw=true"/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

