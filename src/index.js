import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './components/Card';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons'; // 3rd party CSS stylings
import { robots } from './robots';

ReactDOM.render(<Card robot={robots[0]} />, document.getElementById('root'));
registerServiceWorker();
