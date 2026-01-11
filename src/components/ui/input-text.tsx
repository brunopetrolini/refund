import type { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

interface InputTextProps extends ComponentProps<'input'> {
  title: string;
}

export function InputText({
  title,
  className,
  name,
  ...props
}: InputTextProps) {
  return (
    <div className="group flex flex-col gap-2">
      <label
        htmlFor={name}
        className="text-[10px] text-gray-200 transition-colors duration-200 group-focus-within:text-green-100"
      >
        {title.toUpperCase()}
      </label>
      <input
        type="text"
        name={name}
        id={name}
        className={twMerge(
          'rounded-lg border border-gray-300 px-4 py-3.5 text-gray-100 text-sm placeholder-gray-200 outline-none transition-colors duration-200 focus:border-[1.5px] focus:border-green-100',
          className,
        )}
        {...props}
      />
    </div>
  );
}
