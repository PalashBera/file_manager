import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { requestFolderListUser } from '../../actions/FileManagerAction';
import FolderList from '../../components/FolderList'
import FolderForm from '../../components/FolderForm'
import FolderBreadcrumb from '../../components/FolderBreadcrumb'

import './index.css';

function FileManagerPage() {
  const dispatch = useDispatch();
  const [redirect, setRedirect] = useState(false);
  const [folderList, setFolderList] = useState([]);
  const [selectedFolderId, setSelectedFolderId] = useState(null);
  const [clickedFolderIds, setClickedFolderIds] = useState([]);
  const [breadcrumbFolders, setBreadcrumbFolders] = useState([]);
  const authorized = useSelector(state => state.AuthReducer.authorized);
  const currentUser = useSelector(state => state.AuthReducer.user);
  const folders = useSelector(state => state.FileManagerReducer.folders);

  useEffect(() => {
    if (!authorized) {
      setRedirect(true)
    } else {
      dispatch(requestFolderListUser({ currentUser }))
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const selectedFolders = folders.filter(f => f.parentFolderId === selectedFolderId && f.userId === currentUser.id)
    setFolderList(selectedFolders);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [folders]);

  useEffect(() => {
    if (!authorized) setRedirect(true)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authorized]);

  useEffect(() => {
    const selectedFolders = folders.filter(f => f.parentFolderId === selectedFolderId && f.userId === currentUser.id)
    setFolderList(selectedFolders);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedFolderId]);

  if (redirect) {
    return <Redirect to='/login'/>;
  }

  const onClickHandler = (folderId) => {
    clickedFolderIds.push(folderId)
    setClickedFolderIds(clickedFolderIds)
    setSelectedFolderId(folderId);

    const filterdFolders = clickedFolderIds.map(id => folders.find(f => f.id === id && f.userId === currentUser.id))
    setBreadcrumbFolders(filterdFolders);
  }

  const onLinkClick = (folderId) => {
    const index = clickedFolderIds.indexOf(folderId);
    clickedFolderIds.length = index + 1;
    setSelectedFolderId(folderId);
    const filterdFolders = clickedFolderIds.map(id => folders.find(f => f.id === id && f.userId === currentUser.id))
    setBreadcrumbFolders(filterdFolders);
  }

  return (
    <>
      <div className='card file-manager-card'>
        <div className='card-body'>
          <h3 className='card-title'>File Manager</h3>
          <FolderBreadcrumb folders={breadcrumbFolders} onLinkClick={onLinkClick}/>
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