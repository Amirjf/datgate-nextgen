import Image from 'next/image';
import React, { useState } from 'react';
import clsx from 'clsx';
import useScrollPosition from 'hooks/useScrollPosition';
import MobileMenu from 'components/mobile-menu/MobileMenu';
import { Popover } from '@headlessui/react';
import { motion, AnimatePresence } from 'framer-motion';
import Search from 'components/search/Search';
import Nav from 'components/nav/Nav';
import TopHeader from './TopHeader';
import { IconMenu2 } from '@tabler/icons';
import Favorites from 'components/favorites/Favorites';

const layoutAnimation = {
  layout: { duration: 0.3, ease: 'linear' },
};

const Header = () => {
  const scrollPostion = useScrollPosition(75);

  const [openMenu, setOpenMenu] = useState(false);

  return (
    <Popover as={'header'} className={clsx('w-full bg-black')}>
      <TopHeader setOpenMenu={setOpenMenu} />
      <AnimatePresence>
        <motion.div
          layout
          transition={layoutAnimation}
          className={clsx(
            'mx-auto w-full bg-black px-4 sm:px-6',
            !scrollPostion && 'fixed top-0 w-full'
          )}
        >
          <motion.div
            layout
            transition={layoutAnimation}
            className="flex items-center justify-between py-3 md:justify-start md:space-x-10"
          >
            {!scrollPostion && (
              <motion.div
                initial={{ y: '-100%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: '-100%', opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="flex justify-start gap-3"
              >
                <a href="#">
                  <span className="sr-only">LOGO</span>
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
              </motion.div>
            )}

            <Nav />

            <motion.div
              layout
              className="hidden items-center justify-end lg:flex lg:flex-1"
            >
              <Search />
              <Favorites />
            </motion.div>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      <MobileMenu setIsMenuOpen={setOpenMenu} openMenu={openMenu} />
    </Popover>
  );
};

export default Header;
