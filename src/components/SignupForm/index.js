import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { useAlert } from 'react-alert';
import TextField from '../TextField';
import SubmitButton from '../SubmitButton';
import SignupFormValidator from '../../validators/SignupForm';
import { requestSignupUser } from '../../actions/SignupAction';

const SignupForm = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const authorized = useSelector(state => state.AuthReducer.authorized);
  const signupError = useSelector(state => state.SignupReducer.error);

  const isValid = () => {
    const { errors, isValid } = SignupFormValidator({ email, password, passwordConfirmation });
    if (!isValid) setErrors(errors);
    return isValid;
  }

  const onSubmit = (e) => {
    e.preventDefault();

    if (isValid()) {
      setErrors({});
      setIsLoading(true);
      dispatch(requestSignupUser({ email, password }))
    }
  }

  useEffect(() => {
    if (signupError) {
      setIsLoading(false);
      alert.error(signupError);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [signupError]);

  useEffect(() => {
    if (authorized) setRedirect(true)
  }, [authorized]);

  if (redirect) {
    return <Redirect to='/file_manager'/>;
  }

  return (
    <div>
      <form>
        <h3 className='text-center mb-4'>Sign Up</h3>

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

        <TextField
          error={errors.passwordConfirmation}
          label='Password Confirmation'
          onChange={e => setPasswordConfirmation(e.target.value)}
          value={passwordConfirmation}
          fieldName='passwordConfirmation'
          type='password'
          autoComplete='off'
          id='login_password_confirmation'
        />

        <SubmitButton
          value='Sign Up'
          disabled={isLoading}
          onClick={onSubmit}
        />
      </form>
    </div>
  );
}

export default SignupForm;