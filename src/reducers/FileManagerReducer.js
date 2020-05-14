import {
  REQUEST_FOLDER_LIST_SUCCESS,
  REQUEST_FOLDER_CREATE_SUCCESS,
  REQUEST_FOLDER_CREATE_FAILURE
} from '../constants/actionTypes';

const FileManagerReducer = (state = { folders: [] }, action) => {
  switch (action.type) {
    case REQUEST_FOLDER_LIST_SUCCESS:
      return {
        folders: action.payload.folders
      };
    case REQUEST_FOLDER_CREATE_SUCCESS:
      return {
        folders: action.payload.folders
      };
    case REQUEST_FOLDER_CREATE_FAILURE:
      return {
        ...state,
        error: action.payload.message
      };
    default:
      return state;
  }
};

export default FileManagerReducer;