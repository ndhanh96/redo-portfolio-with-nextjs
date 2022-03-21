import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className='grid h-screen place-items-center bg-cyan-100'>
      <div className='grid grid-cols-2 w-1/2 px-6 py-8 bg-cyan-400 rounded-2xl'>
        <div id='navbar' className=' col-span-full '>
          <div id='navbar' className='flex justify-between my-1'>
            <div id='logo'>LOGO</div>
            <div className='space-x-2'>
              <button className='p-2 bg-yellow-500 text-center uppercase rounded-md'>
                home
              </button>
              <button className='p-2 bg-yellow-500 text-center uppercase rounded-md'>
                about
              </button>
              <button className='p-2 bg-yellow-500 text-center uppercase rounded-md'>
                project
              </button>
              <button className='p-2 bg-yellow-500 text-center uppercase rounded-md'>
                contact
              </button>
            </div>
          </div>
        </div>
        <div className='space-y-1'>
          <h1 className='text-2xl py-1 font-semibold tracking-wide text-gray-700'>
            welcome to my newly created portfolio
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
            photoshop, my english speaking is good too. My toeic score is 680,
            it was a long time ago, now i definitely get higher than that.
          </p>
        </div>
        <div className='grid place-items-center'>
          <div className='h-56 w-56 relative'>
            <Image
              src={'/homeimage.png'}
              layout='fill'
              className='bg-cyan-200 rounded-full'
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
}
