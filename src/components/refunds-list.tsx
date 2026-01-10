import type { ReactNode } from 'react';

import { CategoryIcon } from '@/assets/icons/category-icon';
import type { Refund } from '@/types/refund';
import { translateCategory } from '@/utils/category-translator';

interface ListProps {
  children: ReactNode;
}

function List({ children }: ListProps) {
  return <div className="flex flex-col gap-4">{children}</div>;
}

interface ItemProps {
  refund: Refund;
}

function Item({ refund }: ItemProps) {
  return (
    <div className="flex cursor-pointer flex-row items-center justify-between transition-transform duration-200 hover:translate-x-0.5">
      <div className="inline-flex items-center gap-3">
        <CategoryIcon category={refund.category} />
        <div className="flex flex-col">
          <span className="font-bold text-gray-100 text-sm">
            {refund.title}
          </span>
          <span className="text-gray-200 text-xs">
            {translateCategory(refund.category)}
          </span>
        </div>
      </div>
      <div className="inline-flex items-center gap-1">
        <span className="text-gray-200 text-xs">R$</span>
        <span className="font-semibold text-gray-100 text-sm">
          {refund.amount.toFixed(2).replace('.', ',')}
        </span>
      </div>
    </div>
  );
}

export const RefundsList = {
  List,
  Item,
};
