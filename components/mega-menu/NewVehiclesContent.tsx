import { Popover, Transition } from '@headlessui/react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import NewVehiclesContent from 'components/new-vehicles-mega-menu/NewVehiclesMegaMenu';
import React from 'react';
import MegaMenu from './MegaMenu';

const NewVehiclesMegaMenu = () => {
  const callsToAction = [
    { name: 'Watch Demo', href: '#', icon: 'PlayIcon' },
    { name: 'Contact Sales', href: '#', icon: 'PhoneIcon' },
  ];
  return (
    <>
      <MegaMenu name="New" links={callsToAction}>
        <NewVehiclesContent />
      </MegaMenu>
    </>
  );
};

export default NewVehiclesMegaMenu;
