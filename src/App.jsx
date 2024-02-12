import React, { useState } from 'react';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import './style.scss';

function App() {
  const [showLogin, setShowLogin] = useState(true);

  const togglePage = () => {
    setShowLogin((prev) => !prev);
  };

  return (
    <div>
      {showLogin ? <Login togglePage={togglePage} /> : <Register togglePage={togglePage} />}
    </div>
  );
}

export default App;
