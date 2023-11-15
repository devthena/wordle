import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import styles from './app.module.scss';

import { Footer, Loading } from './components';

import { Auth, Landing } from './pages';

const App = () => {
  const { isAuthenticated, isLoading, user } = useAuth0();

  return (
    <main className={styles.app}>
      <div className={styles.page}>
        {isAuthenticated ? (
          isLoading ? (
            <Loading />
          ) : (
            <Landing data={user} />
          )
        ) : (
          <Auth />
        )}
      </div>
      <Footer />
    </main>
  );
};

export default App;
