import { createFileRoute, useNavigate } from '@tanstack/react-router';

import { Button } from '@/components/ui/button';
import { Route as componentsPage } from './components';

function Index() {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen items-center justify-center">
      <Button
        onClick={() => navigate({ to: componentsPage.to })}
        title="Go to Components Page"
      />
    </div>
  );
}

export const Route = createFileRoute('/')({
  component: Index,
});
