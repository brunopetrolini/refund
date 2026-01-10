import { Link } from '@tanstack/react-router';
import type { ComponentProps } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

const navLinkVariants = tv({
  base: 'px-5 py-3 font-semibold text-gray-200 text-sm transition-colors duration-200 hover:text-green-200 ',
  variants: {
    selected: {
      true: 'text-green-100 hover:text-green-100',
    },
  },
  defaultVariants: {
    selected: false,
  },
});

interface NavLinkProps
  extends ComponentProps<typeof Link>,
    VariantProps<typeof navLinkVariants> {
  title: string;
}

export function NavLink({ title, selected, ...props }: NavLinkProps) {
  return (
    <Link className={navLinkVariants({ selected })} {...props}>
      {title}
    </Link>
  );
}
