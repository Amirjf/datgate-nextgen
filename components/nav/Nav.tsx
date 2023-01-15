import { Popover } from '@headlessui/react';
import NewVehiclesMegaMenu from 'components/mega-menu/NewVehiclesMegaMenu';
import React from 'react';

const Nav = () => {
  return (
    <Popover.Group as="nav" className="hidden space-x-10 lg:flex">
      <NewVehiclesMegaMenu />
      <NewVehiclesMegaMenu />
      <a
        href="#"
        className="text-white font-bold transition-colors hover:text-primary"
      >
        Services
      </a>
    </Popover.Group>
  );
};

export default Nav;
