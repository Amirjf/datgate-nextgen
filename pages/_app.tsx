import type { AppProps } from 'next/app';
import NextApp from 'next/app';
import { Poppins } from '@next/font/google';
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { useState } from 'react';
import '../styles/globals.css';
import { useScrollRestoration } from 'hooks/useScrollRestoration';
import { SiteContext } from 'contexts/site/SiteContext';
import NextNProgress from 'nextjs-progressbar';
import { siteDataFetcher } from 'queries/fetchSiteData';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-inter',
});

// const mb = Noto_Serif({
//   subsets: ['latin'],
//   weight: ['400', '700'],
//   variable: '--font-mb',
// });

type ComponentWithPageLayout = AppProps & {
  Component: AppProps['Component'] & {
    PageLayout?: React.ComponentType;
  };
} & { siteData: any };

function App({
  Component,
  pageProps,
  router,
  siteData,
}: ComponentWithPageLayout) {
  const [queryClient] = useState(() => new QueryClient());
  useScrollRestoration(router);
  return (
    <div className={`${poppins.variable} font-sans`}>
      <SiteContext.Provider value={siteData}>
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <NextNProgress
              color="#29D"
              startPosition={0.3}
              stopDelayMs={200}
              height={3}
              showOnShallow={true}
            />
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
  const data = await siteDataFetcher();

  return {
    ...appProps,
    siteData: data,
  };
};

export default App;
