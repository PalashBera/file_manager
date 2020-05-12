import { REQUEST_LOGIN_SUCCESS } from '../constants/actionTypes';

const authReducer = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_LOGIN_SUCCESS:
      return {
        authorization: true
      }
    default:
      return state
  }
}

export default authReducer;