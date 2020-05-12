import {
  REQUEST_LOGIN_SUCCESS,
  REQUEST_SIGNUP_SUCCESS
} from '../constants/actionTypes';

const authReducer = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_LOGIN_SUCCESS:
      return {
        authorization: true
      }
    case REQUEST_SIGNUP_SUCCESS:
      return {
        authorization: true
      }
    default:
      return state
  }
}

export default authReducer;