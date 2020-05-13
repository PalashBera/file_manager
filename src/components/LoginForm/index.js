import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { useAlert } from 'react-alert';
import TextField from '../TextField';
import SubmitButton from '../SubmitButton';
import LoginFormValidator from '../../validators/LoginForm';
import { requestLoginUser } from '../../actions/LoginAction';

const LoginForm = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const authorized = useSelector(state => state.AuthReducer.authorized);
  const loginError = useSelector(state => state.LoginReducer.error);

  const isValid = () => {
    const { errors, isValid } = LoginFormValidator({ email, password });
    if (!isValid) setErrors(errors);
    return isValid;
  }

  const onSubmit = (e) => {
    e.preventDefault();

    if (isValid()) {
      setErrors({});
      setIsLoading(true);
      dispatch(requestLoginUser({ email, password }))
    }
  }

  useEffect(() => {
    if (loginError) {
      setIsLoading(false);
      alert.error(loginError);
    }
  }, [loginError]);

  useEffect(() => {
    if (authorized) setRedirect(true)
  }, [authorized]);

  if (redirect) {
    return <Redirect to='/file_manager'/>;
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
          value='Log in'
          disabled={isLoading}
          onClick={onSubmit}
        />
      </form>
    </div>
  );
}

export default LoginForm;