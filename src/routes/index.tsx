import { createFileRoute } from '@tanstack/react-router';

function Index() {
  return (
    <div className="flex h-screen items-center justify-center bg-zinc-900 text-zinc-50">
      Hello, Refund!
    </div>
  );
}

export const Route = createFileRoute('/')({
  component: Index,
});
