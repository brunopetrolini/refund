import { createFileRoute, useNavigate } from '@tanstack/react-router';

import { Route as componentsPage } from './components';

function Index() {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen items-center justify-center">
      <button
        type="button"
        className="cursor-pointer rounded-lg border-2 border-green-100 bg-green-100 p-3 font-bold text-white transition-all duration-150 hover:border-green-200"
        onClick={() => navigate({ to: componentsPage.to })}
      >
        Go to Components Page
      </button>
    </div>
  );
}

export const Route = createFileRoute('/')({
  component: Index,
});
