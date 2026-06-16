import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// global.css must load before components so CSS Module styles win the cascade
import './styles/global.css';
import App from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
