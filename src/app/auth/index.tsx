import { FC } from 'react';
import './_style.scss';
import { Outlet } from 'react-router';

export const AuthLayout: FC = () => {
  return (
    <>
      <Outlet />
    </>
  );
};
