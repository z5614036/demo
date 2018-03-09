import React from 'react';
import ReactDOM from 'react-dom';
import routes from './react/routes';
import {syncHistoryWithStore, routerMiddleware} from 'react-router-redux';
import {Router, useRouterHistory, browserHistory} from 'react-router';
import {Provider} from "react-redux";
import Store from './redux';
let store = Store();
ReactDOM.render(<Provider store={store}><Router history={browserHistory}>{routes}</Router></Provider>, document.getElementById('root'));
