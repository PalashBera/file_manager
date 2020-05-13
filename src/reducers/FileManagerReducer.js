import {
  REQUEST_FOLDER_LIST_SUCCESS
} from '../constants/actionTypes';

const FileManagerReducer = (state = { folders: [] }, action) => {
  switch (action.type) {
    case REQUEST_FOLDER_LIST_SUCCESS:
      return {
        folders: action.payload.folders
      };
    default:
      return state;
  }
};

export default FileManagerReducer;