import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';

import App from './app';
import './index.scss';

const AUTH0_DOMAIN = process.env.REACT_APP_AUTH0_DOMAIN ?? '';
const AUTH0_CLIENT_ID = process.env.REACT_APP_AUTH0_CLIENT_ID ?? '';
const BUILD_VERSION = process.env.REACT_APP_VERSION ?? '';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Auth0Provider
    domain={AUTH0_DOMAIN}
    clientId={AUTH0_CLIENT_ID}
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}>
    <App version={BUILD_VERSION} />
  </Auth0Provider>
);
