import { CaretDownIcon, CaretUpIcon, CheckIcon } from '@phosphor-icons/react';
import * as RadixSelect from '@radix-ui/react-select';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

interface SelectProps extends RadixSelect.SelectProps {
  title: string;
  values: Array<{ label: string; value: string }>;
  className?: string;
}

export function Select({
  name,
  title,
  values,
  className,
  ...props
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={twMerge('flex flex-col gap-2', className)}>
      <label
        htmlFor={name}
        className={twMerge(
          'text-[10px] text-gray-200 transition-colors duration-200',
          isOpen && 'text-green-100',
        )}
      >
        {title.toUpperCase()}
      </label>
      <RadixSelect.Root
        name={name}
        {...props}
        onOpenChange={setIsOpen}
        open={isOpen}
      >
        <RadixSelect.Trigger
          className={twMerge(
            'inline-flex w-full justify-between gap-2 rounded-lg border border-gray-300 bg-gray-500 px-4 py-3.5 font-bold text-gray-100 text-sm outline-none transition-colors duration-200 data-placeholder:text-gray-200',
            isOpen && 'border-[1.5px] border-green-100',
          )}
        >
          <RadixSelect.Value placeholder="Selecione" />
          <RadixSelect.Icon asChild>
            {!isOpen ? (
              <CaretDownIcon className="h-5 w-5 text-gray-300" />
            ) : (
              <CaretUpIcon className="h-5 w-5 text-green-100" />
            )}
          </RadixSelect.Icon>
        </RadixSelect.Trigger>

        <RadixSelect.Portal>
          <RadixSelect.Content className="rounded-lg border border-gray-300 bg-gray-500 py-2 shadow-[0_2px_24px_0_rgba(0,0,0,0.08)]">
            <RadixSelect.Viewport>
              {values.map(({ label, value }) => (
                <RadixSelect.Item
                  key={value}
                  value={value}
                  className="flex flex-row items-center justify-between px-4 py-3 text-gray-100 outline-none hover:bg-gray-400/50"
                >
                  <RadixSelect.ItemText>{label}</RadixSelect.ItemText>
                  <RadixSelect.ItemIndicator>
                    <CheckIcon
                      className="h-5 w-5 text-green-100"
                      weight="bold"
                    />
                  </RadixSelect.ItemIndicator>
                </RadixSelect.Item>
              ))}
            </RadixSelect.Viewport>
          </RadixSelect.Content>
        </RadixSelect.Portal>
      </RadixSelect.Root>
    </div>
  );
}
