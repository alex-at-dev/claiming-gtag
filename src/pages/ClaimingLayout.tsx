import { Outlet } from 'react-router-dom';

export const ClaimingLayout = () => {
  return (
    <main className="flex h-screen items-center justify-center bg-sapphire-700 py-16">
      <Outlet />
    </main>
  );
};
