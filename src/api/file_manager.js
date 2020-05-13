import { getToken, setToken } from '../helpers/localStorage';

export function requestFolderListUser({ currentUser, folderId }) {
  const folders = getToken('folders');
  let selectedFolders = null;

  if (folders) {
    selectedFolders = folders.filter(folder => folder.userId === currentUser.id.toString() && folder.parentFolderId == folderId);
  } else {
    selectedFolders = []
  }

  return new Promise(function(resolve, reject) {
    resolve({ folders: selectedFolders });
  })
}