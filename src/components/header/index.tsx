import { FC } from 'react';
import { Link } from 'react-router-dom';
import './_style.scss';

const index: FC = () => {
  return (
    <header>
      <div className="search-container">
        <input
          type="text"
          id="search"
          className="search"
          placeholder="Search"
        />

        <label htmlFor="search" className="label">
          <img src="src/assets/icons/search.svg" alt="img" />
        </label>
      </div>

      <div className="logout">
        <h4>Alisher Navoiy</h4>
        <Link to={'/login'}>
          <button>Log Out</button>
        </Link>
        <img
          src="https://buxdu.uz/media/article/images/navoi-0-0-0-0-1587023954.jpg"
          alt="user"
        />
      </div>
    </header>
  );
};

export default index;
