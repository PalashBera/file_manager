import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import LoginForm from '../../components/LoginForm';

function LoginPage() {
  const [redirect, setRedirect] = useState(false);
  const authorized = useSelector(state => state.AuthReducer.authorized);

  useEffect(() => {
    if (authorized) setRedirect(true)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (redirect) {
    return <Redirect to='/file_manager'/>;
  }

  return (
    <div className='row justify-content-center'>
      <div className='card col-sm-12 col-md-6 my-5'>
        <div className='card-body'>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;