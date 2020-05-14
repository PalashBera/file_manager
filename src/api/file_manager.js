import { getToken, setToken } from '../helpers/localStorage';

export function requestFolderListUser({ currentUser, folderId }) {
  const folders = getToken('folders');
  let selectedFolders = null;
  console.log(folderId)

  if (folders) {
    selectedFolders = folders.filter(folder => folder.userId === currentUser.id.toString() && folder.parentFolderId == folderId);
  } else {
    selectedFolders = []
  }

  return new Promise(function(resolve, reject) {
    resolve({ folders: selectedFolders });
  })
}

export function requestFolderCreateUser({ newFolder, selectedFolderId }) {
  const folders = getToken('folders');

  if (folders) {
    if (folders.find(f => f.name === newFolder.name && f.userId === newFolder.userId.toString() && f.parentFolderId == newFolder.parentFolderId)) {
      return new Promise(function(resolve, reject) {
        reject(new Error('Name is already taken.'));
      })
    } else {
      const lastFolder = folders[folders.length - 1]
      newFolder.id = parseInt(lastFolder.id) + 1
      const newFolderList = [...folders, newFolder]
      setToken('folders', newFolderList)
      const selectedFolders = newFolderList.filter(f => f.parentFolderId == selectedFolderId);

      return new Promise(function(resolve, reject) {
        resolve({ folders: selectedFolders });
      })
    }
  } else {
    newFolder.id = 1
    const newFolderList = [newFolder]
    setToken('folders', newFolderList)

    return new Promise(function(resolve, reject) {
      resolve({ folders: newFolderList });
    })
  }
}