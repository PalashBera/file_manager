import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

function HomePage() {
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
    <div className='jumbotron'>
      <h1 className='display-4'>Welcome to File Manager..!!</h1>
      <hr className='my-4' />
      <p>A file manager or file browser is a computer program that provides a user interface to manage files and folders. The most common operations performed on files or groups of files include creating, opening (e.g. viewing, playing, editing or printing), renaming, moving or copying, deleting and searching for files, as well as modifying file attributes, properties and file permissions. Folders and files may be displayed in a hierarchical tree based on their directory structure. Some file managers contain features inspired by web browsers, including forward and back navigational buttons.</p>

      <Link className='btn btn-primary btn-lg' to='/login' role='button'>Log In</Link>
    </div>
  );
}

export default HomePage;