import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { requestFolderListUser } from '../../actions/FileManagerAction';
import FolderList from '../../components/FolderList'
import FolderForm from '../../components/FolderForm'

import './index.css';

function FileManagerPage() {
  const dispatch = useDispatch();
  const [redirect, setRedirect] = useState(false);
  const [folderList, setFolderList] = useState([]);
  const [selectedFolderId, setSelectedFolderId] = useState(null);
  const authorized = useSelector(state => state.AuthReducer.authorized);
  const currentUser = useSelector(state => state.AuthReducer.user);
  const folders = useSelector(state => state.FileManagerReducer.folders);

  useEffect(() => {
    if (!authorized) {
      setRedirect(true)
    } else {
      dispatch(requestFolderListUser({ currentUser, selectedFolderId }))
    }
  }, []);

  useEffect(() => {
    setFolderList(folders);
  }, [folders]);

  useEffect(() => {
    if (!authorized) setRedirect(true)
  }, [authorized]);

  if (redirect) {
    return <Redirect to='/login'/>;
  }

  const onClickHandler = () => {

  }

  return (
    <>
      <div className='card file-manager-card'>
        <div className='card-body'>
          <h3 className='card-title'>File Manager</h3>
          <hr />
          <FolderList
            folders={folderList}
            onClickHandler={onClickHandler}
          />
        </div>
      </div>
      <FolderForm selectedFolderId={selectedFolderId}/>
    </>
  );
}

export default FileManagerPage;