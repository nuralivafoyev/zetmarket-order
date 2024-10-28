import { FC } from 'react';
import { Outlet } from 'react-router';
import { Aside, Header } from '@/components';
import './_style.scss';

export const Dashboard: FC = () => {
  return (
    <>
      <main>
        <Aside />
        <section className="wrapper">
          <Header />
          <Outlet />
        </section>
      </main>
    </>
  );
};
