import './web/globals';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import registerServiceWorker from './web/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
