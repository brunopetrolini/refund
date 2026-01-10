import { MagnifyingGlassIcon } from '@phosphor-icons/react';
import { createFileRoute } from '@tanstack/react-router';

import { IconButton } from '@/components/ui/icon-button';
import { InputText } from '@/components/ui/input-text';
import { NavLink } from '@/components/ui/nav-link';
import { Select } from '@/components/ui/select';
import { Button } from '../components/ui/button';

const selectOptions = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' },
];

function Components() {
  return (
    <div className="grid grid-cols-2 gap-10 p-10">
      {/* Button Section */}
      <div className="flex flex-col gap-2">
        <span className="text-gray-100">Button</span>
        <div className="flex flex-row items-center justify-center gap-10 rounded border border-gray-200 border-dashed p-6">
          <Button
            title="Click Me"
            className="w-full"
            onClick={() => alert('Clicked Button')}
          />
          <Button title="Click Me" className="w-full" disabled />
        </div>
      </div>

      {/* Icon Button Section */}
      <div className="flex flex-col gap-2">
        <span className="text-gray-100">Icon Button</span>
        <div className="flex flex-row items-center justify-center gap-10 rounded border border-gray-200 border-dashed p-6">
          <IconButton
            icon={MagnifyingGlassIcon}
            onClick={() => alert('Clicked Icon Button')}
          />
          <IconButton icon={MagnifyingGlassIcon} disabled />
        </div>
      </div>

      {/* Input Section */}
      <div className="flex flex-col gap-2">
        <span className="text-gray-100">Input</span>
        <div className="flex flex-row items-center justify-center gap-10 rounded border border-gray-200 border-dashed p-6">
          <InputText title="título" name="titulo" placeholder="Placeholder" />
        </div>
      </div>

      {/* NavLink Section */}
      <div className="flex flex-col gap-2">
        <span className="text-gray-100">NavLink</span>
        <div className="flex flex-row items-center justify-center gap-10 rounded border border-gray-200 border-dashed p-6">
          <NavLink title="Link" />
          <NavLink title="Link" selected />
        </div>
      </div>

      {/* Select Section */}
      <div className="flex flex-col gap-2">
        <span className="text-gray-100">Select</span>
        <div className="flex flex-row items-center justify-center gap-10 rounded border border-gray-200 border-dashed p-6">
          <Select title="categoria" name="categoria" values={selectOptions} />
        </div>
      </div>
    </div>
  );
}

export const Route = createFileRoute('/components')({
  component: Components,
});
