import ModelItem from 'components/model-item/ModelItem';
import React from 'react';

const FEATURES_LINKS = [
  { name: 'All Pre-Owned Vehicles', href: '#' },
  { name: 'Certified Pre-Owned Vehicles', href: '#' },
  { name: 'Pre-Owned Specials', href: '#' },
  { name: 'Value Your Trade', href: '#' },
  { name: 'Apply For Financing', href: '#' },
  { name: 'Payment Calculator', href: '#' },
];

const BODY_STYLES = [
  {
    image:
      'https://www.mbseattle.com/content/plugins/dealer-tower/assets/menu-icons/GLB.png',
    count: 55,
    title: 'SUV',
  },
  {
    image:
      'https://www.mbseattle.com/content/plugins/dealer-tower/assets/menu-icons/EQE.png',
    count: 15,
    title: 'SEDAN',
  },
  {
    image:
      'https://www.mbseattle.com/content/plugins/dealer-tower/assets/menu-icons/E-Class.png',
    count: 42,
    title: 'COUPE',
  },
  {
    image:
      'https://www.mbseattle.com/content/plugins/dealer-tower/assets/menu-icons/E-Class.png',
    count: 42,
    title: 'ROADSTERS',
  },
  {
    image:
      'https://www.mbseattle.com/content/plugins/dealer-tower/assets/menu-icons/C-Class.png',
    count: 42,
    title: 'Convertibles',
  },
];

const PreOwnedContent = () => {
  return (
    <div className="w-full px-2 py-5 sm:px-0">
      <div className="flex">
        <div className="px-2 md:pl-8 w-1/5 shrink-0">
          <h3 className="font-semibold border-b w-1/2">Features</h3>
          <ul className="py-4">
            {FEATURES_LINKS.map((link) => (
              <li className="pb-2 text-gray-500 hover:text-primary text-sm">
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full shrink-0">
          <div className="container-slide">
            <h3 className="text-black font-bold mb-1 pb-1 border-b lg xl:w-[95%] w-[25%]">
              Shop By Body Style
            </h3>
            <div className="bg-gray-50 rounded-md w-[80%] p-2 overflow-x-auto overflow-hidden">
              <ul className="flex gap-10 uppercase">
                {BODY_STYLES.map((item) => (
                  <li>
                    <ModelItem
                      image={item.image}
                      count={item.count}
                      title={item.title}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreOwnedContent;
