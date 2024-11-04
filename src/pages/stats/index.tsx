import { FC } from 'react';
import { useEffect, useState } from 'react';
import { StatCard, StatChart } from '@/components';
import { cardStats } from '@constants';
import { Skeleton } from '..';
import './_style.scss';

const index: FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };

    fetchData();
  }, []);
  return (
    <>
      {loading ? (
        <Skeleton />
      ) : (
        <section className="stats">
          <div className="container">
            <div className="card-grid">
              {cardStats.map((card) => (
                <StatCard key={card.title} {...card} />
              ))}
            </div>
          </div>
          <StatChart />
        </section>
      )}
    </>
  );
};

export default index;
