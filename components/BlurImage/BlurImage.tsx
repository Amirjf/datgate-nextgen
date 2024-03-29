import cn from 'clsx';
import Image from 'next/image';
import { useState } from 'react';
import type { ComponentProps } from 'react';

interface BlurImageProps extends ComponentProps<typeof Image> {
  alt: string;
}

export function BlurImage(props: BlurImageProps) {
  const [isLoading, setLoading] = useState(true);

  return (
    <Image
      className={cn(
        props.className,
        'duration-700 ease-in-out blur-xl',
        isLoading ? 'grayscale blur-xl' : 'grayscale-0 blur-0'
      )}
      onLoadingComplete={() => setLoading(false)}
      {...props}
    />
  );
}
