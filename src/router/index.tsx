import { createBrowserRouter } from 'react-router-dom';
import { Dashboard, AuthLayout } from '@app';
import {
  Leads,
  OrderCanceled,
  OrderCompleted,
  OrderNew,
  SignIn,
  Stats,
} from '@pages';

export { Children } from 'react';

const router = [
  {
    path: '/',
    element: <Dashboard />,
    children: [
      {
        path: '/',
        element: <Stats />,
      },
      {
        path: '/orders',
        element: <OrderNew />,
      },
      {
        path: '/order-canceled',
        element: <OrderCanceled />,
      },
      {
        path: '/order-completed',
        element: <OrderCompleted />,
      },
      {
        path: '/leads',
        element: <Leads />,
      },
      {
        path: '/sing-in',
        element: <SignIn />,
      },
    ],
  },
  {
    path: '/login',
    element: <AuthLayout />,
    children: [
      {
        path: '/login',
        element: <SignIn />,
      },
      {
        path: '*',
        element: <div>Not Found 404 </div>,
      },
    ],
  },
];

export const AppRouter = createBrowserRouter(router);
