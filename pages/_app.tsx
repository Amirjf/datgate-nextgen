import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Inter, Noto_Serif } from '@next/font/google';
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-inter',
});
const mb = Noto_Serif({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-mb',
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inter.variable} ${mb.variable} font-sans`}>
      <Component {...pageProps} />;
    </div>
  );
}

export default MyApp;
