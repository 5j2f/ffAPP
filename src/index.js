// import React from '../../react1/packages/react/index.js';
// import {render} from '../../test/react1\packages/react-dom/index.js';
import React from 'react';
import {render} from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom';
import App from './app.jsx';
import reducer from  './reducers/'
import {Provider} from 'react-redux';
import Thunk from 'redux-thunk'
import {createStore,applyMiddleware} from 'redux';
var store=createStore (reducer,applyMiddleware(Thunk));
render(
  <Provider store={store}>
	  <Router>
	    <App
	     />
	  </Router>
  </Provider>,
  document.getElementById('app')
)