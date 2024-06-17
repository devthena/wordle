import { useState } from 'react';

import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Chart, registerables } from 'chart.js';

import { Footer, Header, Landing, Loading, Modal, Wordle } from './components';

import { GameStatus } from './lib/enums';

import styles from './app.module.scss';
import { useWordleState } from './context';

Chart.register(...registerables, ChartDataLabels);

const App = () => {
  const [displayModal, setDisplayModal] = useState(false);
  const [status, setStatus] = useState(GameStatus.Overview);

  const { stats, setStats } = useWordleState();

  if (!stats) {
    const initialState = {
      currentStreak: 0,
      distribution: new Array(6).fill(0),
      maxStreak: 0,
      totalPlayed: 0,
      totalWon: 0,
    };

    const prevStats = localStorage.getItem('react-wordle-devthena');

    if (!prevStats) setStats(initialState);
    else setStats(JSON.parse(prevStats));
  }

  return (
    <main className={styles.app}>
      {displayModal && <Modal setDisplayModal={setDisplayModal} />}
      <div className={styles.page}>
        {!stats && <Loading />}
        {stats && (
          <>
            <Header
              setDisplayModal={setDisplayModal}
              setStatus={setStatus}
              status={status}
            />
            <div className={styles.content}>
              {status === GameStatus.Overview && (
                <Landing setStatus={setStatus} />
              )}
              {status === GameStatus.Playing && <Wordle answer={null} />}
            </div>
          </>
        )}
      </div>
      <Footer version="1.0.0" />
    </main>
  );
};

export default App;
