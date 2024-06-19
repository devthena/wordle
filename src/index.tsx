import ReactDOM from 'react-dom/client';
import { Analytics } from '@vercel/analytics/react';

import App from './app';
import './index.scss';
import { WordleProvider } from './context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <WordleProvider>
    <App />
    <Analytics />
  </WordleProvider>
);
