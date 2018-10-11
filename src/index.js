import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Reducer from './store/reducers';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';

const store = createStore(Reducer);

ReactDOM.render(<BrowserRouter><Provider store={store}><App /></Provider></BrowserRouter>, document.getElementById('root'));
serviceWorker.unregister();
