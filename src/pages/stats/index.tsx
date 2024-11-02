import { FC } from 'react';
import { useEffect, useState } from 'react';
import { StatCard } from '@/components';
import { cardStats } from '@constants';
import { Skeleton } from '..';
import './_style.scss';

const index: FC = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Ma'lumotlarni yuklash simulyatsiyasi
    const fetchData = () => {
      setTimeout(() => {
        setLoading(false);
      }, 1500); // 2 soniya kutish
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
        </section>
      )
      }
    </>
  );
};

export default index;
