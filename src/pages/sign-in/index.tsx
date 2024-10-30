import { FC } from 'react';
import './_style.scss';

const index: FC = () => {
  return (
    <>
      <section id="login">
        {/* <video autoPlay loop muted className='bg-video'>
          <source src='/public/132701-754563705_medium.mp4' type='video/mp4'/>
        </video> */}
        <div className="animater">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>

        <div className="wrapper">
          <div className="login-head">
            <span>Z</span>
            <small>ETMARKET B2B</small>
          </div>

          <form action="login">
            <input type="text" placeholder="Enter email" required />
            <input type="password" placeholder="Enter password" required />
            <button>Sign In</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default index;
