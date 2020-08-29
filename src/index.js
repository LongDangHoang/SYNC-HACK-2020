import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './index.css';
import App from './App';
import Profile from './components/profile/Profile';

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Switch>
        <Route path='/' component={App} exact />
        <Route path='/profile' component={Profile} /> 
      </Switch>
    </React.StrictMode>
  </BrowserRouter>
  ,
  document.getElementById('root')
);
