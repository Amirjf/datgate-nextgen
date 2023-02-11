import { IconChevronDown } from '@tabler/icons';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';

type Props = {
  children: React.ReactNode;
};

const Collapse = ({ children }: Props) => {
  const [showContent, setShowContent] = useState(false);
  return (
    <div className=" border-y ">
      <button
        onClick={() => setShowContent(!showContent)}
        className="flex hover:bg-slate-100 items-center w-full py-4 relative"
      >
        <span className="flex items-center font-medium ">
          <IconChevronDown className="pr-1" size={20} />
          Make
        </span>
        <span className="bg-black rounded-full text-sm absolute right-2 w-6 h-6 flex items-center justify-center text-white">
          2
        </span>
      </button>
      <AnimatePresence initial={false}>
        {showContent && (
          <motion.div
            className="overflow-hidden"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { height: 'auto' },
              collapsed: { height: 0 },
            }}
            transition={{ duration: 0.2 }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export { Collapse };
