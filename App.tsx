import * as React from 'react';
import './style.css';
import Login from './src/pages/Login';
import Profile from './src/component/Profile';

export default function App() {
  return (
    <div>
      <Login />
      <Profile />
    </div>
  );
}
