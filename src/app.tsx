import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Chart, registerables } from 'chart.js';

import {
  Footer,
  Header,
  Landing,
  Loading,
  LoginButton,
  Modal,
  Wordle,
} from './components';

import { GameStatus } from './constants/enums';
import { AppProps } from './constants/types';

import styles from './app.module.scss';

Chart.register(...registerables, ChartDataLabels);

const App = ({ version }: AppProps) => {
  const { isAuthenticated, isLoading, user } = useAuth0();
  const [displayModal, setDisplayModal] = useState(false);
  const [status, setStatus] = useState(GameStatus.ModePick);

  return (
    <main className={styles.app}>
      {displayModal && <Modal setDisplayModal={setDisplayModal} />}
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
              setDisplayModal={setDisplayModal}
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
