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
import { fetchInventoryData } from '@/data-layer';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
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
} & { siteData: any; inventoryData: any };

function App({
  Component,
  pageProps,
  router,
  siteData,
  inventoryData,
}: ComponentWithPageLayout) {
  const [queryClient] = useState(() => new QueryClient());
  useScrollRestoration(router);
  return (
    <div className={`${poppins.variable} font-sans`}>
      <SiteContext.Provider
        //@ts-ignore
        value={{ siteData: siteData, inventoryData: inventoryData }}
      >
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <NextNProgress
              options={{ showSpinner: false }}
              color="#9d3232"
              height={3}
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
  const srpData = await fetchInventoryData();

  return {
    ...appProps,
    siteData: data,
    inventoryData: srpData,
  };
};

export default App;
