import React from 'react';
import Image from 'next/image';

function about() {
  return (
    <>
      <div className='space-y-1'>
        <h1 className='text-2xl py-1 font-semibold tracking-wide text-gray-700'>
          Something about me
        </h1>
        <p className='text-sm py-2 font-normal text-gray-800'>
          Hi, i'm Hạnh, 25 years old, this is my portfolio page, i'm currently
          looking for an internship job, and learning to reactJS, so this site
          was originally made in plain html and css, so i decided to write it in
          react, it's not looking good by any mean, but i really took the time
          to make it, so please consider.
        </p>
        <p className='text-sm font-normal text-gray-800'>
          I always give my best to learn new things, trying to be a good
          front-end developer. I have some knowledge about mechanic but haven't
          touch it for a very long time.
        </p>
      </div>
      <div className='grid place-items-center'>
        <div className='h-56 w-56 relative'>
          <Image
            src={'/avatar.png'}
            layout='fill'
            className='bg-cyan-200 rounded-full'
          ></Image>
        </div>
      </div>
    </>
  );
}

export default about;
