import { FC, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { navigation } from '@constants';
import type { InavigationType } from '@/types';
import { checkRole } from '@/utils';
import './_style.scss';

let role = localStorage.getItem('role') || 'admin';

const index: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <aside className={`aside ${isOpen ? 'asside-close' : ''}`}>
      <Link to="/" className="logo">
        <img src="/fav-icon.png" alt="img" />
        <span>Z</span>
        <p>ETMARKET-B2B</p>
      </Link>
      <button
        onClick={toggleMenu}
        className={`toggle-button ${isOpen ? 'open' : ''}`}
      >
        <i
          className={isOpen ? 'bi bi-arrow-bar-left' : 'bi bi-arrow-bar-left'}
        ></i>
      </button>

      <ul className={`list ${isOpen ? 'list-close' : ''}`}>
        {checkRole(navigation, role).map((item: InavigationType) => (
          <li key={item.path} className="list-item">
            <NavLink to={item.path} className="list-link">
              <i className={item.icon}></i>
              <span>{item.title}</span>
              <small className={item.visible}>{item.count}</small>
            </NavLink>
          </li>
        ))}
      </ul>

      <div className={`logout ${isOpen ? 'logout-close' : ''}`}>
        <img
          src="https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQLL0VKBxr9IkeP6S-B3zv07-_7-5haUPAUUkc4LB7B2jKO2Phuca09TPJhaJN5iZy8PGoGcXRQPaUPvAg"
          alt="user"
        />
        <h4>Donald Tramp</h4>
        <Link to={'/login'}>
          <button>Log Out</button>
        </Link>
      </div>
    </aside>
  );
};

export default index;
