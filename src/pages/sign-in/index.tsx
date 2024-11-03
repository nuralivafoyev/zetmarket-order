import { FC, useState } from 'react';
import { Dashboard } from '@/app/dashboard';
import { Link } from 'react-router-dom';
import './_style.scss';

const index: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    if (email === 'test@example.com' && password === 'password123') {
      setIsLoggedIn(true);
    } else {
      setError("Noto'g'ri email yoki parol.");
    }
  };

  if (isLoggedIn) {
    return <Dashboard />;
  }

  return (
    <>
      <section id="login">
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
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email / phone number"
              required
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              required
            />

            <button>Sign In</button>
            <Link to={'/'} className='register-link'>Don't have an account?</Link>
          </form>
        </div>
      </section>
    </>
  );
};

export default index;
