import './index.css';

import * as serviceWorker from './serviceWorker';

import App from './components/App/App';
import React from 'react';
import ReactDOM from 'react-dom';

const root = document.querySelector('#root')
ReactDOM.render(<App />, root);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
