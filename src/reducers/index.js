import { combineReducers } from 'redux';

import LoginReducer from './LoginReducer';
import SignupReducer from './SignupReducer';
import AuthReducer from './AuthReducer';

const appReducers = combineReducers({
  AuthReducer,
  LoginReducer,
  SignupReducer
});

export default appReducers;
