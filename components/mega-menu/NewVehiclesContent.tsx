import React, { Suspense } from 'react';

import dynamic from 'next/dynamic';

const DynamicMegaMenu = dynamic(() => import('./MegaMenu'), {
  ssr: false,
});
const MegaMenuContent = dynamic(
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
      <Suspense fallback={<></>}>
        <DynamicMegaMenu name="New" links={callsToAction}>
          <MegaMenuContent />
        </DynamicMegaMenu>
      </Suspense>
    </>
  );
};

export default NewVehiclesMegaMenu;
