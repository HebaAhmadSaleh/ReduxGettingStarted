import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Greeting} from './greeting';
import BasicExample from './router'
import registerServiceWorker from './registerServiceWorker';
import {ConnectedAppHeader} from './HOC';


ReactDOM.render(<BasicExample/>, document.getElementById('root'));
registerServiceWorker();
