import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

function Navbar() {
  return (
    <div id='navbar' className='col-span-full grid grid-cols-2 mb-2'>
      <div id='logo' className='h-10 w-10 place-self-auto relative'>
        <svg width='48' height='48' >
          <g fill='none' fill-rule='evenodd' stroke-linejoin='round'>
            <path fill='#fff' fill-opacity='.01' d='M0 0h48v48H0z' />
            <g
              className='fill-yellow-400'
              fill-rule='nonzero'
              stroke='#000'
              stroke-width='4'
            >
              <path d='M6 6h14v11H6zM28 31h14v11H28zM28 6h14v17H28zM6 25h14v17H6z' />
            </g>
          </g>
        </svg>
      </div>
      <div className='flex justify-between my-1'>
        <Link href='/'>
          <button className='p-2 bg-yellow-500 text-center uppercase rounded-md'>
            home
          </button>
        </Link>
        <Link href='/about'>
          <button className='p-2 bg-yellow-500 text-center uppercase rounded-md'>
            about
          </button>
        </Link>
        <Link href='/project'>
          <button className='p-2 bg-yellow-500 text-center uppercase rounded-md'>
            project
          </button>
        </Link>
        <Link href='/contact'>
          <button className='p-2 bg-yellow-500 text-center uppercase rounded-md'>
            contact
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
