import { CaretLeftIcon, CaretRightIcon } from '@phosphor-icons/react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  return (
    <div className="inline-flex items-center justify-center gap-2.5">
      <button
        disabled={currentPage <= 1}
        onClick={() => onPageChange(currentPage - 1)}
        type="button"
        className="flex cursor-pointer items-center justify-center rounded-lg bg-green-100 p-1 transition-colors duration-200 hover:bg-green-200 disabled:pointer-events-none disabled:opacity-50"
      >
        <CaretLeftIcon className="h-6 w-6 text-white" />
      </button>

      <span className="text-gray-200 text-sm">
        {currentPage}/{totalPages}
      </span>

      <button
        disabled={currentPage >= totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        type="button"
        className="flex cursor-pointer items-center justify-center rounded-lg bg-green-100 p-1 transition-colors duration-200 hover:bg-green-200 disabled:pointer-events-none disabled:opacity-50"
      >
        <CaretRightIcon className="h-6 w-6 text-white" />
      </button>
    </div>
  );
}
