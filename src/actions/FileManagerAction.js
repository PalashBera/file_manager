import { createAction } from 'redux-actions';
import {
  REQUEST_FOLDER_LIST_SUCCESS,
  REQUEST_FOLDER_CREATE_SUCCESS,
  REQUEST_FOLDER_CREATE_FAILURE
} from '../constants/actionTypes';

import * as FileManager from '../api/file_manager';

const requestFolderListSuccess = createAction(REQUEST_FOLDER_LIST_SUCCESS);
const requestFolderCreateSuccess = createAction(REQUEST_FOLDER_CREATE_SUCCESS);
const requestFolderCreateFailure = createAction(REQUEST_FOLDER_CREATE_FAILURE);

export function requestFolderListUser(data) {
  return dispatch => FileManager.requestFolderListUser(data)
    .then(data => dispatch(requestFolderListSuccess(data)));
}

export function requestFolderCreateUser(data) {
  return dispatch => FileManager.requestFolderCreateUser(data)
    .then(data => dispatch(requestFolderCreateSuccess(data)))
    .catch(error => dispatch(requestFolderCreateFailure(error)));
}