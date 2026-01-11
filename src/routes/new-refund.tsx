import { createFileRoute } from '@tanstack/react-router';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { InputText } from '@/components/ui/input-text';
import { Select } from '@/components/ui/select';

export const Route = createFileRoute('/new-refund')({
  component: RouteComponent,
});

const categoriesSelectValues = [
  { label: 'Alimentação', value: 'food' },
  { label: 'Transporte', value: 'transport' },
  { label: 'Hospedagem', value: 'housing' },
  { label: 'Serviços', value: 'services' },
  { label: 'Outros', value: 'other' },
];

function RouteComponent() {
  return (
    <Card className="w-lg space-y-10">
      <div className="flex flex-col gap-3">
        <h1 className="font-bold text-gray-100 text-xl">
          Nova solicitação de reembolso
        </h1>
        <span className="text-gray-200 text-sm">
          Dados da despesa para solicitar reembolso.
        </span>
      </div>

      <form className="flex flex-col gap-6">
        <InputText title="nome da solicitação" name="refund-name" />

        <div className="flex flex-row gap-4">
          <Select
            title="categoria"
            name="refund-category"
            className="flex-1"
            values={categoriesSelectValues}
          />
          <InputText
            className="w-38.5"
            title="valor"
            name="refund-amount"
            type="number"
            placeholder="0.00"
          />
        </div>

        <Button type="submit" title="Enviar" />
      </form>
    </Card>
  );
}
