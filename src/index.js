import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './themes.css';
import './webDev.css'
import App from './components/App';

const container = document.getElementById('root');
const root = createRoot(container)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);