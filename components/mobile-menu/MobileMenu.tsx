import { Popover, Transition } from '@headlessui/react';
import { IconMenu2, IconX } from '@tabler/icons';
import Image from 'next/image';
import React, { Fragment } from 'react';

const solutions = [
  {
    name: 'Analytics',
    description:
      'Get a better understanding of where your traffic is coming from.',
    href: '#',
    icon: IconMenu2,
  },
  {
    name: 'Engagement',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '#',
    icon: IconMenu2,
  },
  {
    name: 'Security',
    description: "Your customers' data will be safe and secure.",
    href: '#',
    icon: IconMenu2,
  },
  {
    name: 'Integrations',
    description: "Connect with third-party tools that you're already using.",
    href: '#',
    icon: IconMenu2,
  },
  {
    name: 'Automations',
    description:
      'Build strategic funnels that will drive your customers to convert',
    href: '#',
    icon: IconMenu2,
  },
];

const resources = [
  {
    name: 'Help Center',
    description:
      'Get all of your questions answered in our forums or contact support.',
    href: '#',
    icon: IconMenu2,
  },
  {
    name: 'Guides',
    description:
      'Learn how to maximize our platform to get the most out of it.',
    href: '#',
    icon: IconMenu2,
  },
  {
    name: 'Events',
    description:
      'See what meet-ups and other events we might be planning near you.',
    href: '#',
    icon: IconMenu2,
  },
  {
    name: 'Security',
    description: 'Understand how we take your privacy seriously.',
    href: '#',
    icon: IconMenu2,
  },
];

const MobileMenu = ({ setIsMenuOpen }: any) => {
  return (
    <Transition
      as={Fragment}
      enter="duration-200 ease-out"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="duration-100 ease-in"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      <Popover.Panel
        focus
        className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition lg:hidden"
      >
        <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="px-5 pt-5 pb-6">
            <div className="flex items-center justify-between">
              <div>
                <Image
                  width={140}
                  height={50}
                  className="h-8 w-auto"
                  src="/logo.png"
                  alt="Your Company"
                />
              </div>
              <div className="-mr-2">
                <Popover.Button
                  onClick={() => setIsMenuOpen(false)}
                  className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                >
                  <span className="sr-only">Close menu</span>
                  <IconX className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="mt-6">
              <nav className="grid gap-y-8">
                {solutions.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                  >
                    <item.icon
                      className="h-6 w-6 flex-shrink-0 text-indigo-600"
                      aria-hidden="true"
                    />
                    <span className="ml-3 text-base font-medium text-gray-900">
                      {item.name}
                    </span>
                  </a>
                ))}
              </nav>
            </div>
          </div>
          <div className="space-y-6 py-6 px-5">
            <div className="grid grid-cols-2 gap-y-4 gap-x-8">
              <a
                href="#"
                className="text-base font-medium text-gray-900 hover:text-gray-700"
              >
                Pricing
              </a>

              <a
                href="#"
                className="text-base font-medium text-gray-900 hover:text-gray-700"
              >
                Docs
              </a>
              {resources.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div>
              <a
                href="#"
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
              >
                Sign up
              </a>
              <p className="mt-6 text-center text-base font-medium text-gray-500">
                Existing customer?{' '}
                <a href="#" className="text-indigo-600 hover:text-indigo-500">
                  Sign in
                </a>
              </p>
            </div>
          </div>
        </div>
      </Popover.Panel>
    </Transition>
  );
};

export { MobileMenu };
