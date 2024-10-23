import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Profile() {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');
      const response = await axios.get('/api/users/profile', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setUserData(response.data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Profile</h1>
      <p>Username: {userData.username}</p>
      <p>Email: {userData.email}</p>
      <p>Wallet Address: {userData.walletAddress}</p>
      <p>Pi Balance: {userData.piBalance}</p>
    </div>
  );
}

export default Profile;
