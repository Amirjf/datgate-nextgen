import Image from 'next/image';
import React, { useState } from 'react';
import useScrollGoingUp from 'hooks/useScrollGoingUp';
import clsx from 'clsx';
import useScrollPosition from 'hooks/useScrollPosition';
import MobileMenu from 'components/mobile-menu/MobileMenu';
import { IconMenu2 } from '@tabler/icons';
import { Popover } from '@headlessui/react';
import { motion, AnimatePresence } from 'framer-motion';
import Search from 'components/search/Search';
import Nav from 'components/nav/Nav';
const Header = () => {
  const goingUp = useScrollGoingUp();
  const scrollPostion = useScrollPosition(300);
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
          transition={{ duration: 0.4 }}
          as={motion.header}
          className={clsx('fixed w-full', !scrollPostion && 'bg-black')}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="flex items-center justify-between py-3 md:justify-start md:space-x-10">
              <div className="flex justify-start gap-3 lg:w-0 lg:flex-1">
                <a href="#">
                  <span className="sr-only">Your Company</span>
                  <Image
                    width={100}
                    height={100}
                    className="h-8 w-auto sm:h-10"
                    src="/logo.png"
                    alt=""
                  />
                </a>
              </div>
              <div className="-my-2 -mr-2 md:hidden">
                <Popover.Button
                  onClick={() => setOpenMenu(true)}
                  className="inline-flex items-center justify-center p-2 text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                >
                  <span className="sr-only">Open menu</span>
                  <IconMenu2 className="h-8 w-8" aria-hidden="true" />
                </Popover.Button>
              </div>
              <Nav />
              <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
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
