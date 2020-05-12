import { createAction } from 'redux-actions';
import {
  REQUEST_SIGNUP_SUCCESS,
  REQUEST_SIGNUP_FAILURE
} from '../constants/actionTypes';

import * as User from '../api/users';

const requestSignupSuccess = createAction(REQUEST_SIGNUP_SUCCESS);
const requestSignupFailure = createAction(REQUEST_SIGNUP_FAILURE);

export function requestSignupUser(data) {
  return dispatch => User.requestSignupUser(data)
    .then(({ data }) => dispatch(requestSignupSuccess(data)))
    .catch(error => dispatch(requestSignupFailure(error)));
}
