import type { AppProps } from 'next/app';
import { Inter, Noto_Serif } from '@next/font/google';
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { useState } from 'react';
import NextApp from 'next/app';
import '../styles/globals.css';
import { SiteContext } from 'contexts/site/SiteContext';

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
} & { siteData: any };

function App({ Component, pageProps, siteData }: ComponentWithPageLayout) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <div className={`${inter.variable} ${mb.variable} font-sans`}>
      <SiteContext.Provider value={siteData}>
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
      </SiteContext.Provider>
    </div>
  );
}

App.getInitialProps = async function (appContext: any) {
  const appProps = await NextApp.getInitialProps(appContext);

  const response = await fetch(
    'https://api2.dealertower.com/dealer/nissan.datgate.com/get-information'
  );
  const { data } = await response.json();

  return {
    ...appProps,
    siteData: data,
  };
};

export default App;
