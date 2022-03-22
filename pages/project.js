import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

function project() {
  return (
    <>
      <div className='space-y-1'>
        <h1 className='text-2xl py-1 font-semibold tracking-wide text-gray-700'>
          A thing or two I've made from what I learned.
        </h1>
        <p className='text-sm py-2 font-normal text-gray-800'>
          Some of my project was archived due to the fact that my aws was
          shutdown. You can check out my github. You can still see it but it
          won't do much.
        </p>
        <p className='text-sm font-normal text-gray-800'>
          My first ever project was my portfolio (not this one), but it was
          deleted, so there is that, so this is my <span>
            <Link href='https://ndhanh96.github.io/JavaScript-Calculator/'>
            Calculator
            </Link>
          </span>  project, plain and
          simple: calculating. Second is my 2 games, one is{' '}
          <span>
            <Link href='https://ndhanh96.github.io/Tic-Tac-Toe-Game/'>
              Tic-Tac-Toe
            </Link>
          </span>
          , basicly  "Cờ ca rô", the last is <span>
            <Link href='https://ndhanh96.github.io/Simon-Game/'>
              Simon game
            </Link>
          </span>, you just need to follow
          the sound. That's it. Thank you.
        </p>
      </div>
      <div className='grid place-items-center'>
        <div className='h-60 w-60 relative'>
          <Image
            src={'/project.svg'}
            layout='fill'
            className='bg-cyan-200 rounded-full'
          ></Image>
        </div>
      </div>
    </>
  );
}

export default project;
