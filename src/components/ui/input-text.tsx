import type { ComponentProps } from 'react';

interface InputTextProps extends ComponentProps<'input'> {
  title: string;
}

export function InputText({ title, name, ...props }: InputTextProps) {
  return (
    <div className="group flex flex-col gap-2">
      <label
        htmlFor={name}
        className="font-bold text-[10px] text-gray-200 transition-colors duration-200 group-focus-within:text-green-100"
      >
        {title.toUpperCase()}
      </label>
      <input
        type="text"
        name={name}
        id={name}
        className="rounded-lg border border-gray-300 px-4 py-3.5 font-bold text-gray-100 text-sm placeholder-gray-200 outline-none transition-colors duration-200 focus:border-[1.5px] focus:border-green-100"
        {...props}
      />
    </div>
  );
}
