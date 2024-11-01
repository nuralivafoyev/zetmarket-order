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
        <h4>Donald Tramp</h4>
        <Link to={'/login'}>
          <button>Log Out</button>
        </Link>
        <img
          src="https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQLL0VKBxr9IkeP6S-B3zv07-_7-5haUPAUUkc4LB7B2jKO2Phuca09TPJhaJN5iZy8PGoGcXRQPaUPvAg"
          alt="user"
        />
      </div>
    </header>
  );
};

export default index;
