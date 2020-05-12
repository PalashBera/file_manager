import React from 'react';
import LoginForm from '../../components/LoginForm';

function LoginPage() {
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