import React from 'react';
import Routes from './routes';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />

      <div className='container my-3'>
        {Routes}
      </div>
    </>
  );
}

export default App;
