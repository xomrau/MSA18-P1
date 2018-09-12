import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {AppRouter} from './router';

// this file is where the final render is
// render now points to AppRouter

ReactDOM.render(
//  <App />,
  <AppRouter />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
