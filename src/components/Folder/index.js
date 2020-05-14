import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

function Folder({ folderId, name, onClickHandler }) {
  return (
    <div className='folder' onClick={() => onClickHandler(folderId)}>
      <span className='name'>{name}</span>
    </div>
  );
}

Folder.propTypes = {
  title: PropTypes.string.isRequired,
  folderId: PropTypes.number,
  onClickHandler: PropTypes.func
}

Folder.defaultProps = {
  title: 'Demo Folder',
  folderId: null
}

export default Folder;