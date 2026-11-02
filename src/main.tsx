import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@fontsource-variable/inter/index.css';
import '@fontsource-variable/newsreader/index.css';
import '@fontsource-variable/newsreader/wght-italic.css';
import '@fontsource/playfair-display/400.css';
import '@fontsource/playfair-display/500.css';
import './styles/global.css';
import App from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
