import React from 'react';
import Navbar from './Navbar';

function Layout({children}) {
  return (
    <div className='grid h-screen place-items-center bg-cyan-100'>
      <div className='grid grid-cols-2 w-1/2 px-6 py-8 bg-cyan-400 rounded-2xl'>
        <Navbar />
        {children}
      </div>
    </div>
  );
}

export default Layout;
