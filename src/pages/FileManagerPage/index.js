import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

function FileManagerPage() {
  const [redirect, setRedirect] = useState(false);
  const authorized = useSelector(state => state.AuthReducer.authorized);

  useEffect(() => {
    if (!authorized) setRedirect(true)
  }, []);

  if (redirect) {
    return <Redirect to='/login'/>;
  }

  return (
    <div className='row justify-content-center'>
      <div className='card my-5'>
        <div className='card-body'>
          File Manager Page
        </div>
      </div>
    </div>
  );
}

export default FileManagerPage;