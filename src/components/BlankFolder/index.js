import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

function BlankFolder() {
  return (
    <div className='blank-folder' data-toggle='modal' data-target='#exampleModal'>
      <div className='circle'></div>
    </div>
  );
}

export default BlankFolder;