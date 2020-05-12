import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './index.css';

function TextField ({ fieldName, value, label, error, type, id, onChange, autoComplete, autoFocus }) {
  return (
    <div className={classnames('form-group', { 'has-error': error })}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        onChange={onChange}
        value={value}
        type={type}
        name={fieldName}
        className='form-control'
        autoComplete={autoComplete}
        autoFocus={autoFocus}
      />
      {error && <small className='form-text error'>{error}</small>}
    </div>);
}

TextField.propTypes = {
  fieldName: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  autoComplete: PropTypes.string.isRequired,
  autoFocus: PropTypes.bool
}

TextField.defaultProps = {
  type: 'text',
  autoComplete: 'off',
  autoFocus: false
}

export default TextField;