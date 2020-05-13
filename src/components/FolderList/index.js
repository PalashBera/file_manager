import React from 'react';
import PropTypes from 'prop-types';
import Folder from '../Folder';
import BlankFolder from '../BlankFolder';

import './index.css';

function FolderList({ folders, onClickHandler }) {
  const folderList = folders.map(folder => {
    return <Folder key={folder.id.toString()} folderId={folder.id} name={folder.name} onClickHandler={onClickHandler} />;
  });

  return (
    <>
      <div className='folder-list'>
        {folderList}

        <BlankFolder />
      </div>
    </>
  );
}

FolderList.propTypes = {
  folders: PropTypes.array.isRequired,
  onClickHandler: PropTypes.func
}

FolderList.defaultProps = {
  folders: []
}

export default FolderList;