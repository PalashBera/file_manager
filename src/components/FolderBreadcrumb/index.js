import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

function FolderBreadcrumb({ folders, onLinkClick }) {
  const links = folders.map(folder => {
    return <li key={folder.id.toString()} className='breadcrumb-item' onClick={() => onLinkClick(folder.id)}>{folder.name}</li>;
  });

  const rootLink = <li key='root' className='breadcrumb-item' onClick={() => onLinkClick(null)}>...</li>

  return (
    <nav aria-label='breadcrumb'>
      <ol className='breadcrumb'>
        {folders.length > 0 && rootLink}
        {links}
      </ol>
    </nav>
  );
}

FolderBreadcrumb.propTypes = {
  folders: PropTypes.array.isRequired
}

FolderBreadcrumb.defaultProps = {
  folders: []
}

export default FolderBreadcrumb;