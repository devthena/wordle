import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';

import './index.scss';
import App from './app';

const AUTH0_DOMAIN = process.env.REACT_APP_AUTH0_DOMAIN ?? '';
const AUTH0_CLIENT_ID = process.env.REACT_APP_AUTH0_CLIENT_ID ?? '';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={AUTH0_DOMAIN}
      clientId={AUTH0_CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}>
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
