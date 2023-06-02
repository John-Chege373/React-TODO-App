import React from 'react';
import LoginForm from './LoginForm';
import { ThemeProvider } from './ThemeContext';

const App = () => {
  return (
    <ThemeProvider>
      <LoginForm />
    </ThemeProvider>
  );
};

export default App;