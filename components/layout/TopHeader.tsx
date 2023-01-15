import { Popover } from '@headlessui/react';
import {
  IconClock,
  IconCloudDataConnection,
  IconCurrentLocation,
  IconLocation,
  IconLocationOff,
  IconMenu2,
  IconPhone,
} from '@tabler/icons';
import ContactInfo from 'components/contact-info/ContactInfo';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

type Props = {
  setOpenMenu: any;
};

const TopHeader = ({ setOpenMenu }: Props) => {
  return (
    <div className="mx-auto w-full px-4 sm:px-6">
      <div className="flex items-center justify-between py-3 md:justify-between md:space-x-10">
        <div className="flex space-x-10">
          <a href="#">
            <Image
              width={100}
              height={100}
              className="h-8 w-auto sm:h-10"
              src="/logo.png"
              alt=""
            />
          </a>
          {/* <div className="hidden lg:flex space-x-5">
            <a href="#">
              <Image
                width={100}
                height={100}
                className="h-8 w-auto sm:h-10"
                src="https://mbseattle.datgate.com/content/uploads/2022/12/MicrosoftTeams-image-17.png"
                alt=""
              />
            </a>
            <a href="#">
              <Image
                width={100}
                height={100}
                className="h-8 w-auto sm:h-10"
                src="https://mbseattle.datgate.com/content/uploads/2023/01/swickard-sig.gif"
                alt=""
              />
            </a>
          </div> */}
        </div>
        <div className="-my-2 -mr-2 lg:hidden">
          <Popover.Button
            onClick={() => setOpenMenu(true)}
            className="inline-flex items-center justify-center p-2 text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          >
            <span className="sr-only">Open menu</span>
            <IconMenu2 className="h-8 w-8" aria-hidden="true" />
          </Popover.Button>
        </div>
        <div className="hidden lg:flex w-1/3 flex-wrap justify-start gap-x-10 gap-y-2 opacity-60 hover:opacity-100 transition-opacity">
          <ContactInfo Icon={IconPhone} text={'9203829103'} />
          <ContactInfo Icon={IconClock} text={'Today: 9:00am - 8:00pm'} />

          <ContactInfo
            Icon={IconLocationOff}
            text={'25035 SW Parkway Ave, Wilsonville,OR'}
          />
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
