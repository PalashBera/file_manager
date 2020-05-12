import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import FileManagerPage from '../pages/FileManagerPage';

export default (
  <Switch>
    <Route exact path='/' component={HomePage} />
    <Route exact path='/login' component={LoginPage} />
    <Route exact path='/signup' component={SignupPage} />
    <Route exact path='/file_manager' component={FileManagerPage} />
  </Switch>
);