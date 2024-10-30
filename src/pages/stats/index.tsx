import { FC } from 'react';
import { StatCard } from '@/components';
import { cardStats } from '@constants';
import './_style.scss';

const index: FC = () => {
  return (
    <section className="stats">
      <div className="container">
        <div className="card-grid">
          {
            cardStats.map((card) => (
              <StatCard key={card.title} {...card} />
            ))
          }
        </div>
      </div>
    </section>

  );
};

export default index;
