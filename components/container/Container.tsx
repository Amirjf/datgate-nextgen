import clsx from 'clsx';
import React, { CSSProperties } from 'react';

const Container = ({
  children,
  className,
  fluid,
  ...props
}: {
  children: JSX.Element;
  className?: string;
  style?: CSSProperties;
  fluid?: boolean;
}) => {
  return (
    <section
      className={clsx(
        'my-20 mt-28 lg:mt-auto md:mx-auto',
        !fluid && 'max-w-[110rem]',
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
};

export { Container };
