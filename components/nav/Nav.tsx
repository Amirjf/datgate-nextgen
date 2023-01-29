import { Popover } from '@headlessui/react';
import NewVehiclesMegaMenu from 'components/mega-menu/NewVehiclesContent';
import PreOwnedMegaMenu from 'components/mega-menu/PreOwnedMegaMenu';
import React from 'react';

const Nav = () => {
  return (
    <Popover.Group as="nav" className="hidden space-x-10 lg:flex">
      <NewVehiclesMegaMenu />
      <PreOwnedMegaMenu />
      <a
        href="#"
        className="text-white font-bold transition-colors hover:text-primary"
      >
        Services & Parts
      </a>
      <a
        href="#"
        className="text-white font-bold transition-colors hover:text-primary"
      >
        About Us
      </a>
    </Popover.Group>
  );
};

export default Nav;
