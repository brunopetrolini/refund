import { createFileRoute } from '@tanstack/react-router';

function Index() {
  return (
    <div className="flex h-screen items-center justify-center">
      Hello, Refund!
    </div>
  );
}

export const Route = createFileRoute('/')({
  component: Index,
});
