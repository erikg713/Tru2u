import React, { useEffect, useState } from 'react';
import API from '../services/api';

const Profile = () => {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { data } = await API.get('/users/profile');
        setProfile(data);
      } catch (err) {
        console.error(err.message);
        alert('Failed to fetch profile.');
      }
    };

    fetchProfile();
  }, []);

  return (
    <div>
      <h2>Profile</h2>
      <p>Username: {profile.username}</p>
      <p>Roles: {profile.roles?.join(', ')}</p>
    </div>
  );
};

export default Profile;
