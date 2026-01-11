import type { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

interface CardProps extends ComponentProps<'div'> {}

export function Card({ children, className, ...props }: CardProps) {
  return (
    <div
      className={twMerge(
        'flex max-h-144 max-w-5xl flex-col gap-6 rounded-2xl bg-gray-500 p-10',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
