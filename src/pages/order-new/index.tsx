import { FC } from 'react';
import { Kalendar } from '@/components';
import './_style.scss';

const index: FC = () => {
  return (
    <section className="new-orders">
      <div className="container">
        <div className="orders-top">
          <h1>new orders are here</h1>
          <Kalendar />
        </div>
      </div>
    </section>
  );
};

export default index;
