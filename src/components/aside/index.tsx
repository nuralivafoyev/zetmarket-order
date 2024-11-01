import { FC } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { navigation } from '@constants';
import type { InavigationType } from '@/types';
import { checkRole } from '@/utils';
import './_style.scss';

let role = localStorage.getItem('role') || 'admin';

const index: FC = () => {
  return (
    <aside>
      <Link to="/" className="logo">
        <img src="/fav-icon.png" alt="img" />
        <span>Z</span>
        <p>ETMARKET-B2B</p>
      </Link>
      <ul className="list">
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
      <div className="logout">
        <img
          src="https://buxdu.uz/media/article/images/navoi-0-0-0-0-1587023954.jpg"
          alt="user"
        />
        <h4>Alisher Navoiy</h4>
        <Link to={'/login'}>
          <button>Log Out</button>
        </Link>
      </div>
    </aside>
  );
};

export default index;
