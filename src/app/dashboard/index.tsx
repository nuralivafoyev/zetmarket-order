import { FC, useState, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router';
import { Aside, Header, ModalSupport } from '@/components';
import './_style.scss';

export const Dashboard: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

  // Modalni ochish va yopish funksiyalari
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <main>
        <Aside />
        <section className="wrapper">
          <Header />
          <Outlet />
        </section>

        <ModalSupport isOpen={isModalOpen} onClose={closeModal} />
        <button className="support-btn" onClick={openModal}>
          Support
        </button>
      </main>
    </>
  );
};
