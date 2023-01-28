import React, { useState } from 'react';
import { IconCar } from '@tabler/icons';
import { Tab } from '@headlessui/react';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import Image from 'next/image';
const NewVehiclesContent = () => {
  let [categories] = useState({
    SUV: [
      {
        id: 1,
        title: 'GLA',
        image:
          'https://www.mbseattle.com/content/plugins/dealer-tower/assets/menu-icons/GLA.png',
        count: 5,
      },
      {
        id: 2,
        title: 'EQB',
        image:
          'https://www.mbseattle.com/content/plugins/dealer-tower/assets/menu-icons/EQB.png',
        count: 3,
      },
      {
        id: 3,
        title: 'GLS',
        image:
          'https://www.mbseattle.com/content/plugins/dealer-tower/assets/menu-icons/GLS.png',
        count: 13,
      },
      {
        id: 4,
        title: 'G-Class',
        image:
          'https://www.mbseattle.com/content/plugins/dealer-tower/assets/menu-icons/G-Class.png',
        count: 15,
      },
      {
        id: 5,
        title: 'EQS',
        image:
          'https://www.mbseattle.com/content/plugins/dealer-tower/assets/menu-icons/EQS.png',
        count: 15,
      },
    ],
    'Sedans & Wagons': [
      {
        id: 6,
        title: 'C-Class',
        image:
          'https://www.mbseattle.com/content/plugins/dealer-tower/assets/menu-icons/C-Class.png',
        count: 5,
      },
      {
        id: 7,
        title: 'CLS',
        image:
          'https://www.mbseattle.com/content/plugins/dealer-tower/assets/menu-icons/CLS.png',
        count: 10,
      },
      {
        id: 8,
        title: 'GLS',
        image:
          'https://www.mbseattle.com/content/plugins/dealer-tower/assets/menu-icons/GLS.png',
        count: 13,
      },
      {
        id: 9,
        title: 'EQE',
        image:
          'https://www.mbseattle.com/content/plugins/dealer-tower/assets/menu-icons/EQE.png',
        count: 15,
      },
      {
        id: 10,
        title: 'S-Class',
        image:
          'https://www.mbseattle.com/content/plugins/dealer-tower/assets/menu-icons/S-Class.png',
        count: 25,
      },
    ],
    Coupes: [
      {
        id: 11,
        title: 'E-Class',
        image:
          'https://www.mbseattle.com/content/plugins/dealer-tower/assets/menu-icons/E-Class.png',
        count: 5,
      },
      {
        id: 12,
        title: 'AMG-GT',
        image:
          'https://www.mbseattle.com/content/plugins/dealer-tower/assets/menu-icons/AMG-GT.png',
        count: 10,
      },
      {
        id: 13,
        title: 'GLE',
        image:
          'https://www.mbseattle.com/content/plugins/dealer-tower/assets/menu-icons/GLE-Coupe.png',
        count: 23,
      },
    ],
    'Convertibles & Roadsters': [
      {
        id: 14,
        title: 'E-Class',
        image:
          'https://www.mbseattle.com/content/plugins/dealer-tower/assets/menu-icons/E-Class.png',
        count: 5,
      },
      {
        id: 15,
        title: 'C-Class',
        image:
          'https://www.mbseattle.com/content/plugins/dealer-tower/assets/menu-icons/C-Class.png',
        count: 5,
      },
    ],
  });

  return (
    <div className="w-full px-2 py-5 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex rounded-xs mb-0">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                clsx(
                  'w-full py-2.5 text-md font-semibold mb-0 outline-none text-gray-400 transition-all',
                  selected
                    ? 'bg-white text-black border-b-2 border-b-black'
                    : 'hover:bg-white/[0.12] border-b-2 border-b-gray-200 hover:text-black'
                )
              }
            >
              <span className="flex justify-center gap-2">
                <IconCar />
                {category}
              </span>
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel key={idx} className={'rounded-xl bg-white p-3'}>
              <motion.ul className="flex flex-wrap justify-around mx-auto w-5/6">
                {posts.map((post) => (
                  <li
                    key={post.id}
                    className="relative rounded-full h-64 p-3 transition-all flex flex-col items-center space-y-4 hover:bg-gray-100 w-64"
                  >
                    <span className="absolute flex-col flex justify-center leading-10 items-center top-3">
                      <span className="bg-gradient-to-t flex justify-center flex-col items-center  text-[3rem] font-extrabold to-[#1D2939] from-[#ffffff45] opacity-60 text-transparent bg-clip-text">
                        {post.count}
                      </span>
                      <span className="text-gray-400">IN STOCK</span>
                    </span>
                    <a
                      href="#"
                      className="flex pt-10 flex-col justify-start items-center"
                    >
                      <Image
                        src={post.image}
                        width={500}
                        height={100}
                        alt={post.title}
                      />
                      <h3 className="text-sm font-medium">{post.title}</h3>
                    </a>
                  </li>
                ))}
              </motion.ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default NewVehiclesContent;
