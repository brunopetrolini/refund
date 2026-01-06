import { createFileRoute } from '@tanstack/react-router';

function About() {
  return (
    <div className="flex h-screen items-center justify-center bg-zinc-900 text-zinc-50">
      About Refund!
    </div>
  );
}

export const Route = createFileRoute('/about')({
  component: About,
});
