import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function contact() {
  return (
    <>
      <div className='space-y-1'>
        <h1 className='text-2xl py-1 font-semibold tracking-wide text-gray-700'>
          hit me by email so we can talk properly
        </h1>
        <p className='text-sm py-2 font-normal text-gray-800'>
          If you interested please email me at ndhanh96@gmail.com. Or you can
          chat with me on my <span><Link href='https://www.facebook.com/ndhanh96'>Facebook</Link></span>.
        </p>
        <p className='text-sm font-normal text-gray-800'>
          Looking forward to hear from you, really appreciate to have you here
          reading my portfolio. Thank you once again and hopefully we can see
          each other in the next one.
        </p>
      </div>
      <div className='grid place-items-center'>
        <div className=' h-60 w-60 relative'>
          <Image
            src={'/contact.png'}
            layout='fill'
            className='bg-cyan-200 rounded-full'
          ></Image>
        </div>
      </div>
    </>
  );
}

export default contact;
