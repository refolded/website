import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Playfair_Display, Inter } from '@next/font/google';

const playfair = Playfair_Display({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-playfair',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`${inter.variable} ${playfair.variable} bg-black p-0 m-0 box-border text-white flex min-h-screen overflow-hidden`}
    >
      <Component {...pageProps} />
    </div>
  );
}
