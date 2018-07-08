import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import 'tachyons';

import { requestRobots } from './store/requestRobots';
import { searchRobots } from './store/searchRobots';

import App from './containers/App';

import './assets/index.css';
import registerServiceWorker from './registerServiceWorker';

const rootReducer = combineReducers({
    requestRobots,
    searchRobots
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
