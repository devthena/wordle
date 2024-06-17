import ReactDOM from 'react-dom/client';

import App from './app';
import './index.scss';
import { WordleProvider } from './context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <WordleProvider>
    <App />
  </WordleProvider>
);
