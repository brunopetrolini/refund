import { createRootRoute, Outlet } from '@tanstack/react-router';

const RootLayout = () => {
  return (
    <div className="h-full min-h-screen bg-gray-400">
      <Outlet />
    </div>
  );
};

export const Route = createRootRoute({ component: RootLayout });
