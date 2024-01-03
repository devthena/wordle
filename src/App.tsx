import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import { Auth, Footer, Game, Loading } from './components';

import styles from './app.module.scss';

const App = () => {
  const { isAuthenticated, isLoading, user } = useAuth0();

  return (
    <main className={styles.app}>
      <div className={styles.page}>
        {isAuthenticated ? (
          isLoading ? (
            <Loading />
          ) : (
            <Game data={user} />
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
