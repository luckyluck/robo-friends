import React from 'react';
import ReactDOM from 'react-dom';
import 'tachyons';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import { searchRobots } from './store/searchRobots';
import { requestRobots } from './store/requestRobots';

import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './containers/App';

const rootReducer = combineReducers({
    searchRobots,
    requestRobots
});
const store = createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware, createLogger())
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
