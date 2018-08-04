import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './components/Card';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons'; // 3rd party CSS stylings

ReactDOM.render(<Card />, document.getElementById('root'));
registerServiceWorker();
