import React, { useState } from 'react';
import TextField from '../TextField';
import SubmitButton from '../SubmitButton';
import LoginFormValidator from '../../validators/LoginForm';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const isValid = () => {
    const { errors, isValid } = LoginFormValidator({email, password});
    if (!isValid) setErrors(errors);
    return isValid;
  }

  const onSubmit = (e) => {
    e.preventDefault();

    if (isValid()) {
      setErrors({});
      setIsLoading(true);
      console.log('Login form has been submitted successfully.');
    }
  }

  return (
    <div>
      <form>
        <h3 className='text-center mb-4'>Log In</h3>

        <TextField
          error={errors.email}
          label='Email'
          onChange={e => setEmail(e.target.value)}
          value={email}
          fieldName='email'
          type='email'
          autoComplete='off'
          id='login_email'
          autoFocus={true}
        />

        <TextField
          error={errors.password}
          label='Password'
          onChange={e => setPassword(e.target.value)}
          value={password}
          fieldName='password'
          type='password'
          autoComplete='off'
          id='login_password'
        />

        <SubmitButton
          value="Log in"
          disabled={isLoading}
          onClick={onSubmit}
        />
      </form>
    </div>
  );
}

export default LoginForm;