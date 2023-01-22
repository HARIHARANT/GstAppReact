import * as React from 'react';
import './style.css';
import LoginComp from './src/component/Login';
import LoginScr from './src/page/LoginScr';
import Profile from './src/component/Profile';
import { CssBaseline } from '@mui/material';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

export default function App() {
  const [auth, setAuth] = React.useState(false);
  const location = useLocation();

  return (
    <div>
      <CssBaseline />
      <Routes>
        <Route path="/login" element={<LoginScr />} />
        <Route
          path="/"
          element={<Navigate to="/login" state={{ from: location }} replace />}
        />
      </Routes>
    </div>
  );
}
