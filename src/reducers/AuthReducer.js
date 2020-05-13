import {
  REQUEST_LOGIN_SUCCESS,
  REQUEST_SIGNUP_SUCCESS
} from '../constants/actionTypes';

const authReducer = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_LOGIN_SUCCESS:
      return {
        authorized: true
      }
    case REQUEST_SIGNUP_SUCCESS:
      return {
        authorized: true
      }
    default:
      return state
  }
}

export default authReducer;