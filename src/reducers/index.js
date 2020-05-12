import { combineReducers } from 'redux';

import LoginReducer from './LoginReducer';
import AuthReducer from './AuthReducer';

const appReducers = combineReducers({
  AuthReducer,
  LoginReducer
});

export default appReducers;
