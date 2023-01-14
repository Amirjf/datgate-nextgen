import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';

type Props = {
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

const Drawer = ({ children, isOpen, setIsOpen }: Props) => {
  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={clsx('w-2/3 bg-white h-screen fixed right-0 z-10')}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.2 }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsOpen(false)}
            className="bg-black w-screen h-screen fixed z-0"
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Drawer;
