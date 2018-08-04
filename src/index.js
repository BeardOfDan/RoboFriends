import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CardList from './components/CardList';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';

ReactDOM.render(<CardList />, document.getElementById('root'));
registerServiceWorker();
