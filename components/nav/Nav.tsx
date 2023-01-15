import { Popover } from '@headlessui/react';
import NewVehiclesMegaMenu from 'components/mega-menu/NewVehiclesMegaMenu';
import { motion } from 'framer-motion';
import React from 'react';

const Nav = () => {
  return (
    <Popover.Group
      layout
      transition={{ layout: { ease: 'linear', duration: 0.3 } }}
      as={motion.nav}
      className="hidden space-x-10 lg:flex"
    >
      <NewVehiclesMegaMenu />
      <NewVehiclesMegaMenu />
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
