import Image from 'next/image';
import React, { useState } from 'react';
import clsx from 'clsx';
import { Popover } from '@headlessui/react';
import { AnimatePresence } from 'framer-motion';
import { IconMenu2 } from '@tabler/icons';
import { Favorites, TopHeader, Nav, Search, MobileMenu } from '@/components/ui';
import { useScrollPosition } from '@/hooks';

const Header = () => {
  const scrollPostion = useScrollPosition(74);

  const [openMenu, setOpenMenu] = useState(false);

  return (
    <Popover as={'header'} className="w-full z-50 relative">
      {/* <TopHeader setOpenMenu={setOpenMenu} /> */}
      <AnimatePresence>
        <div
          className={clsx(
            'mx-auto w-full px-4 sm:px-6 fixed top-0',
            !scrollPostion ? 'bg-black' : 'bg-transparent'
          )}
        >
          <div className="flex items-center justify-between py-3 md:justify-start md:space-x-10">
            <div className="flex justify-between w-full lg:w-auto items-center lg:justify-start gap-3">
              <a href="#">
                <span className="sr-only">LOGO</span>
                <Image
                  width={100}
                  height={100}
                  className="h-10 w-auto sm:h-14"
                  src="https://mbseattle.datgate.com/content/uploads/2023/01/mb-seatlle-logo.jpg"
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

            <Nav />

            <div className="hidden items-center justify-end lg:flex lg:flex-1">
              <Search />
              <Favorites />
            </div>
          </div>
        </div>
      </AnimatePresence>

      <MobileMenu setIsMenuOpen={setOpenMenu} openMenu={openMenu} />
    </Popover>
  );
};

export { Header };
