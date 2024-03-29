import { useAuth0 } from '@auth0/auth0-react';
import { useState } from 'react';

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
  const { isAuthenticated, isLoading } = useAuth0();
  const [displayModal, setDisplayModal] = useState(false);
  const [status, setStatus] = useState(GameStatus.ModePick);

  return (
    <main className={styles.app}>
      {displayModal && <Modal setDisplayModal={setDisplayModal} />}
      <div className={styles.page}>
        {isLoading && <Loading />}
        {!isAuthenticated && !isLoading && (
          <div className={styles.auth}>
            <div className={styles.container}>
              <h1 className={styles.title}>Wordle</h1>
              <p>Play Solo or Co-op!</p>
            </div>
            <LoginButton />
          </div>
        )}
        {isAuthenticated && !isLoading && (
          <div>
            <Header
              setDisplayModal={setDisplayModal}
              setStatus={setStatus}
              status={status}
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
      <Footer version={version} />
    </main>
  );
};

export default App;
