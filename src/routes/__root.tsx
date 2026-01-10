import { createRootRoute, Outlet } from '@tanstack/react-router';

import { MainHeader } from '@/components/main-header';

const RootLayout = () => {
  return (
    <div className="min-h-screen bg-gray-400">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-10 py-10">
        <MainHeader />
        <Outlet />
      </div>
    </div>
  );
};

export const Route = createRootRoute({ component: RootLayout });
