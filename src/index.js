 

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter } from 'react-router-dom';

// importing all the Redux related dependencies
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

// imporing the Reducers for the application
import media from './store/reducers/media-items';
import jobs from './store/reducers/job-items';
import team from './store/reducers/team-items';
import login from './store/reducers/login'
import blog from './store/reducers/blog-items'
import gallary from './store/reducers/gallary'

import App from './app.jsx';
import './styles/index.css';

// Adding the Redux Dev Tool setup
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Creating a 'rootReducer' with the multiple reducers
const rootReducer = combineReducers({
  media: media,
  jobs: jobs,
  team: team,
  login: login,
  blog: blog,
  gallary: gallary
});

// Creating store for the application
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <HashRouter basename='/'>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);
