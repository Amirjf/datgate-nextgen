import React from 'react';
import dynamic from 'next/dynamic';
const DynamicMegaMenu = dynamic(() => import('./MegaMenu'), {
  ssr: false,
});
const PreOwnedContent = dynamic(
  () => import('components/preowned-mega-menu/PreOwnedContent'),
  {
    ssr: false,
  }
);
const PreOwnedMegaMenu = () => {
  const callsToAction = [
    { name: 'Under $10,000', href: '#', icon: 'PlayIcon' },
    { name: '$10,000 - $15,000', href: '#', icon: 'PhoneIcon' },
    { name: '$15,000 - $25,000', href: '#', icon: 'PhoneIcon' },
    { name: '$25,000 - $35,000', href: '#', icon: 'PhoneIcon' },
    { name: '$35,000 - $45,000', href: '#', icon: 'PhoneIcon' },
    { name: 'Over $45,000', href: '#', icon: 'PhoneIcon' },
  ];
  return (
    <>
      <DynamicMegaMenu name="Pre-Owned" links={callsToAction}>
        <PreOwnedContent />
      </DynamicMegaMenu>
    </>
  );
};

export default PreOwnedMegaMenu;
