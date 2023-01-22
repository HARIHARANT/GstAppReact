import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import App from './App';
import loginReducer from './src/features/login';

const store = configureStore({
  reducer: {
    login: loginReducer,
  },
});

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={store} children={undefined}>
      <App />
    </Provider>
  </StrictMode>
);
