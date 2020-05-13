import { createAction } from 'redux-actions';
import { REQUEST_LOGOUT_SUCCESS } from '../constants/actionTypes';

const requestLogoutSuccess = createAction(REQUEST_LOGOUT_SUCCESS);

export function requestLogoutUser() {
  return dispatch => {
    return dispatch(requestLogoutSuccess());
  }
}
