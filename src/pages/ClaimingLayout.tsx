import { Outlet } from 'react-router-dom';

export const ClaimingLayout = () => {
  return (
    <main className="bg-sapphire-700 flex h-screen items-center justify-center py-16">
      <Outlet />
    </main>
  );
};
