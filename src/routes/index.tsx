import { MagnifyingGlassIcon } from '@phosphor-icons/react';
import { createFileRoute } from '@tanstack/react-router';

import { Pagination } from '@/components/pagination';
import { RefundsList } from '@/components/refunds-list';
import { Card } from '@/components/ui/card';
import { IconButton } from '@/components/ui/icon-button';
import type { Refund } from '@/types/refund';

const refunds: Refund[] = [
  {
    id: 1,
    title: 'Almoço',
    category: 'food',
    amount: 50,
  },
  {
    id: 2,
    title: 'Uber',
    category: 'transport',
    amount: 30,
  },
  {
    id: 3,
    title: 'Aluguel',
    category: 'housing',
    amount: 1200,
  },
  {
    id: 4,
    title: 'Internet',
    category: 'services',
    amount: 100,
  },
  {
    id: 5,
    title: 'Outros',
    category: 'other',
    amount: 200,
  },
];

function Index() {
  return (
    <Card className="w-full flex-1">
      <h1 className="text-start font-bold text-gray-100 text-xl">
        Solicitações
      </h1>

      <div className="inline-flex gap-3">
        <input
          className="flex-1 rounded-lg border border-gray-300 px-4 py-3.5 text-gray-100 text-sm outline-none transition-colors duration-200 focus:border-green-100"
          placeholder="Pesquisar pelo nome"
        />
        <IconButton icon={MagnifyingGlassIcon} />
      </div>

      <div className="h-px w-full rounded-full bg-gray-300" />

      <RefundsList.List>
        {refunds.map((refund) => (
          <RefundsList.Item key={refund.id} refund={refund} />
        ))}
      </RefundsList.List>

      <Pagination currentPage={1} totalPages={5} onPageChange={() => {}} />
    </Card>
  );
}

export const Route = createFileRoute('/')({
  component: Index,
});
