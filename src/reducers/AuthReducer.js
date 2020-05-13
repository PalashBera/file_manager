import {
  REQUEST_LOGIN_SUCCESS,
  REQUEST_SIGNUP_SUCCESS,
  REQUEST_LOGOUT_SUCCESS
} from '../constants/actionTypes';

const authReducer = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_LOGIN_SUCCESS:
      return {
        authorized: true,
        user: action.payload.user
      }
    case REQUEST_SIGNUP_SUCCESS:
      return {
        authorized: true,
        user: action.payload.user
      }
    case REQUEST_LOGOUT_SUCCESS:
      return {
        authorized: false,
        user: null
      }
    default:
      return state
  }
}

export default authReducer;