import {
  REQUEST_LOGIN_SUCCESS,
  REQUEST_LOGIN_FAILURE
} from '../constants/actionTypes';

const loginReducer = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_LOGIN_SUCCESS:
      return {
        user: action.payload.user
      };
    case REQUEST_LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload.message
      };
    default:
      return state;
  }
};

export default loginReducer;