import React from 'react';
import ReactDOM from 'react-dom';
import 'tachyons';

import { robots } from './robots';

import './index.css';
import registerServiceWorker from './registerServiceWorker';
import CardList from './CardList';

ReactDOM.render(<CardList robots={robots}/>, document.getElementById('root'));
registerServiceWorker();
