import * as React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const login = useSelector((state) => state.login.value);
  return (
    <div>
      <h1>Username {login.email}</h1>
      <h1>Password {login.password}</h1>
    </div>
  );
};

export default Profile;
