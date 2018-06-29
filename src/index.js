import React from 'react';
import ReactDOM from 'react-dom';
import 'tachyons';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { Provider } from 'react-redux';

import { searchRobots } from './store/searchRobots';

import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './containers/App';

const reducers = combineReducers({
    searchRobots
});
const store = createStore(reducers, applyMiddleware(createLogger()));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
