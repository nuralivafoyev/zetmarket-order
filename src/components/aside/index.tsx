import { FC } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { navigation } from '@constants';
import type { TnavigationType } from '@/types';
import { checkRole } from '@/utils';
import './_style.scss';

let role = localStorage.getItem('role') || 'admin';



// function myFunction() {
//   const isConfirmed = confirm('Are you sure you want to log out?');

//    if (isConfirmed) {
//     // Redirect to the login page if confirmed
//     window.open('http://localhost:5174/login');
//   } else {
//     // Redirect to the homepage if canceled
//     return;
//   }
// }



const index: FC = () => {
  return (
    <aside>
      <Link to="/" className="logo">
        <img src="/fav-icon.png" alt="img" />
        <span>Z</span>
        <p>ETMARKET-B2B</p>
      </Link>
      <ul className="list">
        {checkRole(navigation, role).map((item: TnavigationType) => (
          <li className="list-item">
            <NavLink to={item.path} className="list-link">
              <i className={item.icon}></i>
              <span>{item.title}</span>
            </NavLink>{' '}
          </li>
        ))}
      </ul>
      <div className="logout" role="dialog">
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
