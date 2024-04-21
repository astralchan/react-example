import React from 'react';
import { createRoot, Root } from 'react-dom/client';
import './index.css'

import App from './components/App';

const rootElement: HTMLElement = document.getElementById('root')!;
const root: Root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
