import React, { useState } from 'react';
import API from '../services/api';

const SignIn = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleLogin = async () => {
    try {
      const { data } = await API.post('/users/login', formData);
      localStorage.setItem('user', JSON.stringify(data));
      alert('Login successful!');
    } catch (err) {
      console.error(err.message);
      alert('Login failed.');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Username"
        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default SignIn;
