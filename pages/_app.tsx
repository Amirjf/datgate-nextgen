import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Inter, Noto_Serif } from '@next/font/google';
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { useState } from 'react';

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

type ComponentWithPageLayout = AppProps & {
  Component: AppProps['Component'] & {
    PageLayout?: React.ComponentType;
  };
};

function MyApp({ Component, pageProps }: ComponentWithPageLayout) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <div className={`${inter.variable} ${mb.variable} font-sans`}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          {Component.PageLayout ? (
            //@ts-ignore
            <Component.PageLayout>
              <Component {...pageProps} />
            </Component.PageLayout>
          ) : (
            <Component {...pageProps} />
          )}
        </Hydrate>
      </QueryClientProvider>
    </div>
  );
}

export default MyApp;
