import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import { Footer, Header, Loading, LoginButton, Wordle } from './components';

import { GameStatus } from './constants/enums';

import styles from './app.module.scss';

const App = () => {
  const { isAuthenticated, isLoading, user } = useAuth0();
  const [status, setStatus] = useState(GameStatus.ModePick);

  return (
    <main className={styles.app}>
      <div className={styles.page}>
        {!isAuthenticated && (
          <div className={styles.auth}>
            <h1>Hello.</h1>
            <LoginButton />
          </div>
        )}
        {isAuthenticated && isLoading && <Loading />}
        {isAuthenticated && (
          <div>
            <Header username={user?.nickname || user?.name || user?.email} />
            <div className={styles.content}>
              {status === GameStatus.ModePick && (
                <div>
                  <h1>Play Solo</h1>
                  <button onClick={() => setStatus(GameStatus.SoloStart)}>
                    START
                  </button>
                  <h2>Play with Friends</h2>
                  <div>
                    <button>New</button>
                    <div>Room List</div>
                  </div>
                </div>
              )}
              {status === GameStatus.SoloStart && <Wordle />}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </main>
  );
};

export default App;
