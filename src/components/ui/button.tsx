import type { ComponentProps } from 'react';
import { tv } from 'tailwind-variants';

interface ButtonProps extends ComponentProps<'button'> {
  title: string;
}

const buttonVariants = tv({
  base: 'py-3.5 px-5 bg-green-100 hover:bg-green-200 flex items-center justify-center transition-colors duration-200 cursor-pointer rounded-lg',
  variants: {
    disabled: {
      true: 'opacity-50 cursor-not-allowed hover:bg-green-100',
    },
  },
  defaultVariants: {
    disabled: false,
  },
});

export function Button({
  title,
  disabled,
  className,
  type = 'button',
}: ButtonProps) {
  return (
    <button
      type={type}
      className={buttonVariants({ disabled, className })}
      disabled={disabled}
    >
      <span className="font-bold text-sm text-white">{title}</span>
    </button>
  );
}
