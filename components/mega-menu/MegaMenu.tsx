import { Popover, Transition } from '@headlessui/react';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import React, { Fragment } from 'react';

type Props = {
  children: JSX.Element;
  name: string;

  links?: { name: string; href: string; icon: string }[];
};

const MegaMenu = ({ children, name, links }: Props) => {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            className={clsx(
              'group inline-flex items-center text-white outline-none font-bold transition-colors hover:text-primary'
            )}
          >
            {name}
          </Popover.Button>
          {open && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.2 }}
              className="w-6 h-6 bg-white absolute top-full left-1/2 -translate-x-1/2 translate-y-1 rotate-45"
            ></motion.span>
          )}

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="fixed z-10 mt-4 left-0 w-full px-2 sm:px-0 lg:ml-0">
              <div className="overflow-hidden shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="bg-white">{children}</div>
                {links && (
                  <div className="space-y-6 bg-gray-50 px-5 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                    {links.map((item) => (
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
                )}
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default MegaMenu;
