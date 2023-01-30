import Head from 'next/head';
import { useRef, useState } from 'react';

export default function Home() {
  const videoTag = useRef<HTMLVideoElement | null>(null);
  const mainSection = useRef<HTMLElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  return (
    <>
      <Head>
        <title>refolded</title>
        <meta name='description' content='A collective of builders.' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='w-full font-sans'>
        <video
          ref={videoTag}
          autoPlay
          playsInline
          muted
          loop
          className='absolute z-0 isolate w-full h-full object-cover motion-reduce:hidden'
        >
          <source src='/assets/homebackground.mp4' />
        </video>
        <section className='flex flex-col justify-center items-center w-full h-screen backdrop-brightness-[0.3] backdrop-grayscale'>
          <h1 className='font-bold text-7xl font-serif tracking-wider pb-3'>
            refolded
          </h1>
          <svg
            width={90}
            height={90}
            viewBox='0 0 1000 1000'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M250 375V166.667H541.667V375H958.333V666.667H750V875H458.333V666.667H41.6666V375H250ZM666.667 666.667H541.667V791.667H666.667V666.667ZM333.333 375H458.333V250H333.333V375ZM250 583.333V458.333H125V583.333H250ZM750 458.333V583.333H875V458.333H750ZM541.667 458.333V583.333H666.667V458.333H541.667ZM333.333 458.333V583.333H458.333V458.333H333.333Z'
              fill='#fff'
            />
          </svg>

          <button
            onClick={() => {
              if (isPlaying) {
                setIsPlaying(false);
                videoTag?.current?.pause?.();
              } else {
                setIsPlaying(true);
                videoTag?.current?.play?.();
              }
            }}
            className='absolute bottom-5 left-5 scale-150 hover:scale-[2] duration-200 transition-all motion-reduce:transition-none pb-6'
          >
            {isPlaying ? (
              <svg
                width={36}
                height={36}
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M11 7H8V17H11V7Z' fill='currentColor' />
                <path d='M13 17H16V7H13V17Z' fill='currentColor' />
              </svg>
            ) : (
              <svg
                width={40}
                height={40}
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M15 12.3301L9 16.6603L9 8L15 12.3301Z'
                  fill='currentColor'
                />
              </svg>
            )}
          </button>
          <button
            onClick={() =>
              mainSection?.current?.scrollIntoView({
                behavior: 'smooth',
              })
            }
            className='absolute bottom-14 flex flex-col items-center justify-center text-gray-200'
          >
            <p className='py-3 text-xl'>Scroll to learn more</p>
            <span className='animate-levitate motion-reduce:animate-none mt-4'>
              <svg
                className='w-7 h-7'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M11.0001 3.67157L13.0001 3.67157L13.0001 16.4999L16.2426 13.2574L17.6568 14.6716L12 20.3284L6.34314 14.6716L7.75735 13.2574L11.0001 16.5001L11.0001 3.67157Z'
                  fill='currentColor'
                />
              </svg>
            </span>
          </button>
        </section>
        <section
          ref={mainSection}
          className='flex flex-col justify-center items-center w-full h-screen'
        ></section>
      </main>
    </>
  );
}
