type RefundCategory = 'food' | 'transport' | 'housing' | 'services' | 'other';

type Refund = {
  id: number;
  title: string;
  category: RefundCategory;
  amount: number;
};

export type { Refund, RefundCategory };
