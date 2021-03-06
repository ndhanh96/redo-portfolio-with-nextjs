import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <div className='space-y-1'>
        <h1 className='text-2xl py-1 font-semibold tracking-wide text-gray-700'>
          Welcome to my newly created portfolio
        </h1>
        <p className='text-sm py-2 font-normal text-gray-800'>
          Hi, i'm Hạnh, 25 years old, this is my portfolio page, i'm currently
          looking for a job, and learning to reactJS, so this site was
          originally made in plain html and css, so i decided to write it in
          react, it's not looking good by any mean, but i really took the time
          to make it.
        </p>
        <p className='text-sm font-normal text-gray-800'>
          I don't know what to write here so i'll leave you be. Ah yes, i know
          photoshop, my english speaking is good too. My toeic score is 680, it
          was a long time ago, now i definitely get higher than that.
        </p>
      </div>
      <div className='grid place-items-center'>
        <div className='h-60 w-60 relative'>
          <Image
            src={'/homeimage.png'}
            layout='fill'
            className='bg-cyan-200 rounded-full'
          ></Image>
        </div>
      </div>
    </>
  );
}
