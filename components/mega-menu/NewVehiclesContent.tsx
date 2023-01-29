import React from 'react';
import dynamic from 'next/dynamic';
const DynamicMegaMenu = dynamic(() => import('./MegaMenu'), {
  ssr: false,
});
const NewMegaMenuContent = dynamic(
  () => import('components/new-vehicles-mega-menu/NewVehiclesMegaMenu'),
  {
    ssr: false,
  }
);

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
      <DynamicMegaMenu name="New" links={callsToAction}>
        <NewMegaMenuContent />
      </DynamicMegaMenu>
    </>
  );
};

export default NewVehiclesMegaMenu;
