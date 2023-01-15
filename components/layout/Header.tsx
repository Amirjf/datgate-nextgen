import Image from 'next/image';
import React, { useState } from 'react';
import useScrollGoingUp from 'hooks/useScrollGoingUp';
import clsx from 'clsx';
import useScrollPosition from 'hooks/useScrollPosition';
import MobileMenu from 'components/mobile-menu/MobileMenu';
import { Popover } from '@headlessui/react';
import { motion, AnimatePresence } from 'framer-motion';
import Search from 'components/search/Search';
import Nav from 'components/nav/Nav';
import TopHeader from './TopHeader';
import { IconMenu2 } from '@tabler/icons';
const Header = () => {
  const goingUp = useScrollGoingUp();
  const scrollPostion = useScrollPosition(200);

  const [openMenu, setOpenMenu] = useState(false);

  const isShowingHeader = () => {
    if (!scrollPostion && goingUp) {
      return true;
    }

    if (scrollPostion) {
      return true;
    }

    return false;
  };

  return (
    <AnimatePresence initial={false}>
      {isShowingHeader() && (
        <Popover
          initial={{ y: '-100%' }}
          animate={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.2 }}
          as={motion.header}
          className={clsx('fixed w-full', !scrollPostion && 'bg-black')}
        >
          <AnimatePresence initial={false}>
            {scrollPostion && (
              <motion.div
                initial={{ y: '-100%' }}
                animate={{ y: 0 }}
                exit={{ y: '-100%' }}
                transition={{ duration: 0.2 }}
              >
                <TopHeader setOpenMenu={setOpenMenu} />
              </motion.div>
            )}
          </AnimatePresence>
          <div className="mx-auto max-w-[90rem] px-4 sm:px-6">
            <div className="flex items-center justify-between py-3 md:justify-start md:space-x-10">
              {!scrollPostion && (
                <div className="flex justify-between gap-3 w-full lg:w-0 lg:flex-1">
                  <a href="#">
                    <span className="sr-only">LOGOdasda</span>
                    <Image
                      width={100}
                      height={100}
                      className="h-8 w-auto sm:h-10"
                      src="/logo.png"
                      alt=""
                    />
                  </a>
                  <div className="-my-2 -mr-2 lg:hidden">
                    <Popover.Button
                      onClick={() => setOpenMenu(true)}
                      className="inline-flex items-center justify-center p-2 text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    >
                      <span className="sr-only">Open menu</span>
                      <IconMenu2 className="h-8 w-8" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
              )}

              <Nav />
              <div className="hidden items-center justify-end lg:flex lg:flex-1">
                <Search />
              </div>
            </div>
          </div>

          <MobileMenu setIsMenuOpen={setOpenMenu} openMenu={openMenu} />
        </Popover>
      )}
    </AnimatePresence>
  );
};

export default Header;
