import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
// import { createStore } from 'redux';
import reducer from './store/reducer';
import registerServiceWorker from './registerServiceWorker';
// redux import karwai ha 
const store=createStore(reducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
