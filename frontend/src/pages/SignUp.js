import React, { useState } from 'react';
import API from '../services/api';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    uid: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      // Make API call to register the user
      const { data } = await API.post('/users/register', formData);
      alert('Sign up successful!');
      // Automatically log in the user and store their token
      localStorage.setItem('user', JSON.stringify(data));
      navigate('/profile'); // Redirect to profile page
    } catch (err) {
      console.error(err.message);
      alert('Failed to sign up. Try again.');
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <input
        type="text"
        placeholder="Username"
        value={formData.username}
        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
      />
      <input
        type="text"
        placeholder="Unique ID (UID)"
        value={formData.uid}
        onChange={(e) => setFormData({ ...formData, uid: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
};

export default SignUp;
