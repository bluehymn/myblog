import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import RouterConfig from './router'

ReactDOM.render(<RouterConfig></RouterConfig>, document.getElementById('root'))
registerServiceWorker()
