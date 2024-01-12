import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import {
  Footer,
  Header,
  Landing,
  Loading,
  LoginButton,
  Wordle,
} from './components';

import { GameStatus } from './constants/enums';
import { AppProps } from './constants/types';

import styles from './app.module.scss';

const App = ({ version }: AppProps) => {
  const { isAuthenticated, isLoading, user } = useAuth0();
  const [status, setStatus] = useState(GameStatus.ModePick);

  return (
    <main className={styles.app}>
      <div className={styles.page}>
        {isLoading && <Loading />}
        {!isAuthenticated && !isLoading && (
          <div className={styles.auth}>
            <h1 className={styles.authTitle}>Hello.</h1>
            <LoginButton />
          </div>
        )}
        {isAuthenticated && !isLoading && (
          <div>
            <Header
              avatar={user?.picture}
              setStatus={setStatus}
              status={status}
              username={user?.nickname || user?.name || user?.email}
            />
            <div className={styles.content}>
              {status === GameStatus.ModePick && (
                <Landing setStatus={setStatus} />
              )}
              {status === GameStatus.SoloStart && <Wordle answer={null} />}
            </div>
          </div>
        )}
      </div>
      <Footer isAuthenticated={isAuthenticated} version={version} />
    </main>
  );
};

export default App;
