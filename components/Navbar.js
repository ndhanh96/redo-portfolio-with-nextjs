import Link from 'next/link';
import React from 'react';

function Navbar() {
  return (
    <div id='navbar' className='col-span-full grid grid-cols-2 mb-2'>
      <div>LOGO</div>
      <div className='flex justify-between my-1'>
        <button className='p-2 bg-yellow-500 text-center uppercase rounded-md'>
          <Link href='/' >home</Link>
        </button>
        <button className='p-2 bg-yellow-500 text-center uppercase rounded-md'>
          <Link href='/about' >about</Link>
        </button>
        <button className='p-2 bg-yellow-500 text-center uppercase rounded-md'>
          project
        </button>
        <button className='p-2 bg-yellow-500 text-center uppercase rounded-md'>
          contact
        </button>
      </div>
    </div>
  );
}

export default Navbar;
