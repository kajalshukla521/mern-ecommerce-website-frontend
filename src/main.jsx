import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';  // Correct if App.jsx is in the same folder
  // Ensure path to App.jsx is correct
import { RouterProvider } from 'react-router-dom';
import router from './routes/index.jsx';  // Ensure path to router is correct
import { Provider } from 'react-redux';
import { store } from './redux/store.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
