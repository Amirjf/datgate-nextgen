import MainLayout from 'layouts/main';
import React from 'react';
import { Container } from '../components';
import { TopBannerTitle } from 'libs/design/TopBannerTitle/TopBannerTitle';
import { Tab } from '@headlessui/react';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import Head from 'next/head';

import { GetStaticProps } from 'next';
import { siteDataFetcher } from 'queries/fetchSiteData';
const AboutUsPage = ({ data }: any) => {
  const { work_hours } = data;

  const labels = work_hours.map((hour: any) => hour.label);
  const hours = work_hours.map((hour: any) => hour.value);

  return (
    <div>
      <Head>
        <title>About Us</title>
      </Head>
      <TopBannerTitle
        alt="about-us-image"
        title="About Us"
        image="https://nissanofportland.com/content/uploads/2019/09/Nissan-of-Portland-Services-02.jpg"
      />
      <Container className="container mx-auto px-5 py-10 mt-28">
        <div className="grid w-full gap-x-10 grid-cols-2">
          <div className="col-span-1">
            <h3 className="text-4xl font-bold font-serif">
              Welcome to Nissan of Portland
            </h3>
            <p className="pt-3">
              Our goal is to make your car buying experience the best possible.
              Nissan of Portland’s virtual dealership offers a wide variety of
              new and used cars, Nissan incentives, service specials, and Nissan
              parts savings. Conveniently located in Portland, OR also serving
              Vancouver, WA and serving Beaverton, OR. If you’re looking to
              purchase your new dream car, you’ve come to the right place. At
              Nissan of Portland we pride ourselves on being one of the most
              reliable and trustworthy Nissan dealer around. Our inventory is
              filled with some of the sweetest rides you’ve ever seen!
            </p>
          </div>
          <div className="min-h-[700px]">
            <div className="w-full px-2 py-5 sm:px-0">
              <Tab.Group>
                <Tab.List className="flex rounded-xs mb-0">
                  {labels.map((hour: any) => (
                    <Tab
                      key={hour}
                      className="w-full py-2.5 relative text-md font-semibold mb-0 outline-none text-gray-400 hover:bg-white/[0.12] border-b-4 border-b-gray-200 hover:text-black"
                    >
                      {({ selected }) => (
                        <>
                          <span
                            className={clsx(
                              'flex justify-center transition-colors gap-2',
                              selected && 'text-black'
                            )}
                          >
                            {hour}
                            {selected ? (
                              <motion.div
                                className="absolute bg-black bottom-[-3px] left-0 right-0 h-[3px]"
                                layoutId="hour-underline"
                              />
                            ) : null}
                          </span>
                        </>
                      )}
                    </Tab>
                  ))}
                </Tab.List>
                <Tab.Panels as={motion.div} layout className="">
                  {hours.map((hour: any, idx: any) => (
                    <Tab.Panel
                      as={motion.div}
                      key={idx}
                      layout
                      className={'rounded-xl bg-white p-3'}
                    >
                      <AnimatePresence>
                        <motion.ul layout className="flex flex-col">
                          {hour.map((time: any, i: any) => (
                            <motion.li
                              className="flex justify-between border-b mb-5"
                              key={`${time.label} - ${i}`}
                              initial={{ y: 10, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              exit={{ y: -10, opacity: 0 }}
                              transition={{
                                delay: i * 0.1,
                                duration: 0.3,
                              }}
                            >
                              <b>{time.label}</b>
                              <span>
                                <span>{time.from}</span> -{' '}
                                <span>{time.to}</span>
                              </span>
                            </motion.li>
                          ))}
                        </motion.ul>
                      </AnimatePresence>
                    </Tab.Panel>
                  ))}
                </Tab.Panels>
              </Tab.Group>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const data = await siteDataFetcher();

  return {
    props: {
      data,
    },
    revalidate: 60,
  };
};

AboutUsPage.PageLayout = MainLayout;

export default AboutUsPage;
