import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { requestLogoutUser } from '../../actions/LogoutAction';

function NavLinks() {
  const dispatch = useDispatch();
  const [redirect, setRedirect] = useState(false);
  const authorized = useSelector(state => state.AuthReducer.authorized);

  useEffect(() => {
    if (authorized) {
      setRedirect(true)
    } else {
      setRedirect(false)
    }
  }, [authorized]);

  const onLogout = (e) => {
    e.preventDefault();
    dispatch(requestLogoutUser())
  }

  if (redirect) {
    return (
      <li className='nav-item'>
        <Link className='nav-link' to='/' onClick={onLogout}>Log Out</Link>
      </li>
    );
  }

  return (
    <>
      <li className='nav-item'>
        <Link className='nav-link' to='/signup'>Sign Up</Link>
      </li>

      <li className='nav-item'>
        <Link className='nav-link' to='/login'>Log In</Link>
      </li>
    </>
  );
}

export default NavLinks;