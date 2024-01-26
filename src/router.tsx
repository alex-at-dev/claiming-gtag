import { createBrowserRouter, redirect } from 'react-router-dom';
import { App } from './App';
import { ClaimingLayout } from './pages/ClaimingLayout';
import { ClaimingStep1UserData } from './pages/ClaimingStep1UserData';
import { ClaimingStep2Password } from './pages/ClaimingStep2Password';
import { ClaimingSuccess } from './pages/ClaimingSuccess';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    loader: () => redirect('/claiming'),
  },
  {
    path: '/claiming',
    element: <ClaimingLayout />,
    children: [
      {
        path: '',
        loader: () => redirect('step1'),
      },
      {
        path: 'step1',
        element: <ClaimingStep1UserData />,
      },
      {
        path: 'step2',
        element: <ClaimingStep2Password />,
      },
      {
        path: 'success',
        element: <ClaimingSuccess />,
      },
    ],
  },
]);
