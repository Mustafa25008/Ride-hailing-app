import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

function Login({ onLogin }) {
  const [username, Mustafa] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      onLogin(username.trim());
    }
  };

  return (
    <div style={{ marginTop: '100px', textAlign: 'center' }}>
      <Header />
      <h2>Ride Hailing Lite</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={username}
          onChange={(e) => Mustafa(e.target.value)}
          style={{ padding: '8px', width: '200px' }}
        />
        <br /><br />
        <button type="submit" style={{ padding: '8px 16px' }}>Login</button>
      </form>
      <Footer />
    </div>
  );
}

export default Login;
