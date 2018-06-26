import React from 'react';
import ReactDOM from 'react-dom';
import 'tachyons';

import { robots } from './robots';

import './index.css';
import Card from './Card';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<div>
    {robots.map(robot => <Card key={robot.id} id={robot.id} name={robot.name} email={robot.email} />)}
</div>, document.getElementById('root'));
registerServiceWorker();
