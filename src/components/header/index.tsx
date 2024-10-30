import { FC } from 'react';
import './_style.scss';

const index: FC = () => {
  

  return (
    <header>
      <input type="text" id='search' className="search" placeholder="Search" />
      <label htmlFor="search">
        <img src="src/assets/icons/search.svg" alt="img" />
      </label>
    </header>
  );
};

export default index;
// export default App;
