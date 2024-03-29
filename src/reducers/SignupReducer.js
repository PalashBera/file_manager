import {
  REQUEST_SIGNUP_SUCCESS,
  REQUEST_SIGNUP_FAILURE
} from '../constants/actionTypes';

const signupReducer = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_SIGNUP_SUCCESS:
      return {
        user: action.payload.user
      };
    case REQUEST_SIGNUP_FAILURE:
      return {
        ...state,
        error: action.payload.message
      };
    default:
      return state;
  }
};

export default signupReducer;