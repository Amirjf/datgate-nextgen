import { Popover } from '@headlessui/react';
import NewVehiclesMegaMenu from 'components/mega-menu/NewVehiclesContent';
import PreOwnedMegaMenu from 'components/mega-menu/PreOwnedMegaMenu';
import Link from 'next/link';
import React from 'react';

const Nav = () => {
  return (
    <Popover.Group as="nav" className="hidden space-x-10 lg:flex">
      <NewVehiclesMegaMenu />
      <PreOwnedMegaMenu />
      <Link
        className="text-white font-bold transition-colors hover:text-primary"
        href="/shop"
      >
        Shop
      </Link>
      {/* <a
        href="#"
        className="text-white font-bold transition-colors hover:text-primary"
      >
        Services & Parts
      </a> */}
      <Link
        href="/about-us"
        className="text-white font-bold transition-colors hover:text-primary"
      >
        About Us
      </Link>
    </Popover.Group>
  );
};

export { Nav };
