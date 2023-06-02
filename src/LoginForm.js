import React, { useContext, useState } from 'react';
import { ThemeContext } from './ThemeContext';


const LoginForm = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please provide both email and password');
    } else {
      setError('');
      // Perform your form submission logic here
    }
  };

  return (
    <form
      style={{
        background: theme === 'dark' ? '#333' : '#fff',
        color: theme === 'dark' ? '#fff' : '#333',
        padding: '20px',
        borderRadius: '4px',
      }}
      onSubmit={handleSubmit}
    >
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          style={{ marginBottom: '10px' }}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          style={{ marginBottom: '10px' }}
        />
      </div>
      {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}
      <button type="submit">Submit</button>
      <button type="button" onClick={toggleTheme} style={{ marginLeft: '10px' }}>
        Toggle Theme
      </button>
    </form>
  );
};

export default LoginForm;