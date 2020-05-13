import { createAction } from 'redux-actions';
import {
  REQUEST_FOLDER_LIST_SUCCESS
} from '../constants/actionTypes';

import * as FileManager from '../api/file_manager';

const requestFolderListSuccess = createAction(REQUEST_FOLDER_LIST_SUCCESS);

export function requestFolderListUser(data) {
  return dispatch => FileManager.requestFolderListUser(data)
    .then(data => dispatch(requestFolderListSuccess(data)));
}
