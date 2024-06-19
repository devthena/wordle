import React from 'react';
import ReactDOM from 'react-dom/client';
import { Analytics } from '@vercel/analytics/react';

import App from './app';
import { WordleProvider } from './context';

import './index.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <WordleProvider>
      <App />
      <Analytics />
    </WordleProvider>
  </React.StrictMode>
);
