import {
  BedIcon,
  ForkKnifeIcon,
  type Icon,
  PoliceCarIcon,
  ReceiptIcon,
  WrenchIcon,
} from '@phosphor-icons/react';
import type { ComponentProps } from 'react';

const CATEGORY_ICON = {
  food: ForkKnifeIcon,
  transport: PoliceCarIcon,
  housing: BedIcon,
  services: WrenchIcon,
  other: ReceiptIcon,
} satisfies Record<CategoryIconProps['category'], Icon>;

interface CategoryIconProps extends ComponentProps<Icon> {
  category: 'food' | 'transport' | 'housing' | 'services' | 'other';
}

export function CategoryIcon({ category, ...props }: CategoryIconProps) {
  const IconComponent = CATEGORY_ICON[category] ?? ReceiptIcon;
  return (
    <div className="flex items-center justify-center rounded-full bg-gray-400 p-2 text-green-100">
      <IconComponent weight="fill" size={18} {...props} />
    </div>
  );
}
