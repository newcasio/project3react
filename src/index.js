import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './components/App';                     //moved App.js into components folder
import * as serviceWorker from './serviceWorker';
import Routes from './Routes';                                  //add this to access routes


ReactDOM.render(Routes, document.getElementById('root'));         //render to Routes.js

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
