import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TextField from '../TextField';
import FolderFormValidator from '../../validators/FolderForm';

function FolderForm({ selectedFolderId }) {
  const [name, setName] = useState('');
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const isValid = () => {
    const { errors, isValid } = FolderFormValidator({ name });
    if (!isValid) setErrors(errors);
    return isValid;
  }

  const onSubmit = (e) => {
    e.preventDefault();

    if (isValid()) {
      setErrors({});
      setIsLoading(true);
    }
  }

  return (
    <div className='modal fade' id='exampleModal' tabIndex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
      <div className='modal-dialog' role='document'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title' id='exampleModalLabel'>Add New Folder</h5>
            <button type='button' className='close' data-dismiss='modal' aria-label='Close'>
              <span aria-hidden='true'>&times;</span>
            </button>
          </div>
          <div className='modal-body'>
            <TextField
              error={errors.name}
              label='Folder Name'
              onChange={e => setName(e.target.value)}
              value={name}
              fieldName='name'
              type='text'
              autoComplete='off'
              id='folder_name'
            />
            <small id="folderNameHelp" className="form-text text-muted">Folder name should be less than 30 characters.</small>
          </div>
          <div className='modal-footer'>
            <button type='button' className='btn btn-secondary' data-dismiss='modal'>Close</button>
            <button type='button' className='btn btn-primary' disabled={isLoading} onClick={onSubmit}>Create</button>
          </div>
        </div>
      </div>
    </div>
  );
}

FolderForm.propTypes = {
  open: PropTypes.bool.isRequired
}

FolderForm.defaultProps = {
  open: false
}


export default FolderForm;