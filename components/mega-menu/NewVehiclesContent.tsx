import NewVehiclesContent from 'components/new-vehicles-mega-menu/NewVehiclesMegaMenu';
import React from 'react';
import MegaMenu from './MegaMenu';

const NewVehiclesMegaMenu = () => {
  const callsToAction = [
    { name: 'All New Vehicles', href: '#', icon: 'PlayIcon' },
    { name: 'Current Incentives', href: '#', icon: 'PhoneIcon' },
    { name: 'Value Your Trade', href: '#', icon: 'PhoneIcon' },
    { name: 'EQS Sedan', href: '#', icon: 'PhoneIcon' },
    { name: 'Commercial Vans', href: '#', icon: 'PhoneIcon' },
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
