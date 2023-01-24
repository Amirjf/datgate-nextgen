import { Popover, Transition } from '@headlessui/react';
import { IconChevronDown, IconMenu2 } from '@tabler/icons';
import clsx from 'clsx';
import NewVehiclesContent from 'components/new-vehicles-mega-menu/NewVehiclesMegaMenu';
import React, { Fragment, useState } from 'react';

const NewVehiclesMegaMenu = () => {
  const callsToAction = [
    { name: 'Watch Demo', href: '#', icon: 'PlayIcon' },
    { name: 'Contact Sales', href: '#', icon: 'PhoneIcon' },
  ];
  return (
    <>
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={clsx(
                open
                  ? 'text-primary border-b-2 border-b-primary'
                  : 'text-white border-b-2 border-b-transparent',
                'group inline-flex items-center text-white outline-none font-bold transition-colors hover:text-primary'
              )}
            >
              NEW
              <IconChevronDown
                className={clsx(
                  open ? 'text-blue-500' : 'text-white',
                  'ml-2 h-5 w-5 group-hover:text-blue-500'
                )}
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="fixed z-10 mt-3 left-0 w-full px-2 sm:px-0 lg:ml-0">
                <div className="overflow-hidden shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="bg-white">
                    <NewVehiclesContent />
                  </div>

                  <div className="space-y-6 bg-gray-50 px-5 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                    {callsToAction.map((item) => (
                      <div key={item.name} className="flow-root">
                        <a
                          href={item.href}
                          className="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-100"
                        >
                          <item.icon
                            //@ts-ignore
                            className="h-6 w-6 flex-shrink-0 text-gray-400"
                            aria-hidden="true"
                          />
                          <span className="ml-3">{item.name}</span>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </>
  );
};

export default NewVehiclesMegaMenu;
