import { createAction } from 'redux-actions';
import {
  REQUEST_LOGIN_SUCCESS,
  REQUEST_LOGIN_FAILURE
} from '../constants/actionTypes';

import * as User from '../api/users';

const requestLoginSuccess = createAction(REQUEST_LOGIN_SUCCESS);
const requestLoginFailure = createAction(REQUEST_LOGIN_FAILURE);

export function requestLoginUser(data) {
  return dispatch => User.requestLoginUser(data)
    .then(data => dispatch(requestLoginSuccess(data)))
    .catch(error => dispatch(requestLoginFailure(error)));
}
