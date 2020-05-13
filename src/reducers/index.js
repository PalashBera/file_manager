import { combineReducers } from 'redux';

import LoginReducer from './LoginReducer';
import SignupReducer from './SignupReducer';
import AuthReducer from './AuthReducer';
import FileManagerReducer from './FileManagerReducer';

const appReducers = combineReducers({
  AuthReducer,
  LoginReducer,
  SignupReducer,
  FileManagerReducer
});

export default appReducers;
