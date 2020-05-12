import React from 'react';
import SignupForm from '../../components/SignupForm';

function SignupPage() {
  return (
    <div className='row justify-content-center'>
      <div className='card col-sm-12 col-md-6 my-5'>
        <div className='card-body'>
          <SignupForm />
        </div>
      </div>
    </div>
  );
}

export default SignupPage;