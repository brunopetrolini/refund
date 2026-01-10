import type { Icon } from '@phosphor-icons/react';
import type { ComponentProps } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

interface IconButtonProps
  extends ComponentProps<'button'>,
    VariantProps<typeof iconButtonVariants> {
  icon: Icon;
}

const iconButtonVariants = tv({
  base: 'flex items-center justify-center rounded-lg p-3 bg-green-100 hover:bg-green-200 transition-colors duration-200 cursor-pointer',
  variants: {
    disabled: {
      true: 'opacity-50 cursor-not-allowed hover:bg-green-100',
    },
  },
  defaultVariants: {
    disabled: false,
  },
});

export function IconButton({
  icon: Icon,
  disabled,
  ...props
}: IconButtonProps) {
  return (
    <button
      type="button"
      className={iconButtonVariants({ disabled })}
      {...props}
    >
      <Icon size={24} className="text-white" />
    </button>
  );
}
