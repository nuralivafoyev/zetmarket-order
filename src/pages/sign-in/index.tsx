import { FC, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { SupportModal } from '@/components';
import './_style.scss';

const Login: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    // Login qilish uchun simple tekshiruv (bu yerda faqat misol)
    if (email === 'test@example.com' && password === 'password123') {
      // Tokenni localStorage'ga saqlaymiz
      localStorage.setItem('token', 'your-token'); // Tokenni o'zingiz yaratishingiz mumkin
      navigate('/'); // Dashboard sahifasiga yo'naltirish
    } else {
      setError("Noto'g'ri email yoki parol.");
    }
  };

  return (
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
          <button type="submit">Sign In</button>

          <Link to={'https://t.me/vafoyev_n'} className="register-link">
            Parol va email uchun menga habar yuboring!
          </Link>
        </form>
      </div>
    </section>
  );
};

export default Login;
