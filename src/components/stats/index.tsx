import { useAuth0 } from '@auth0/auth0-react';
import { Bar } from 'react-chartjs-2';

import styles from './index.module.scss';

const Stats = () => {
  const { user } = useAuth0();
  const userId = user?.sub?.split('|')[2] || '';
  const localStats = localStorage.getItem(userId);

  const stats = localStats
    ? JSON.parse(localStats)
    : {
        currentStreak: 0,
        maxStreak: 0,
        totalPlayed: 0,
        totalWon: 0,
      };

  const winPercentage =
    !stats.totalWon || !stats.totalPlayed
      ? 'N/A'
      : (stats.totalWon / stats.totalPlayed).toFixed(2) + '%';

  return (
    <div className={styles.container}>
      <div className={styles.stats}>
        <h3>Solo Stats</h3>
        <p>Win Percentage: {winPercentage}</p>
        <p>Max Streak: {stats.maxStreak}</p>
        <p>Current Streak: {stats.currentStreak}</p>
        <p>Total Times Played: {stats.totalPlayed}</p>
        <p>Guess Distribution</p>
      </div>
      <Bar
        className={styles.chart}
        options={{
          indexAxis: 'y',
          layout: {
            padding: {
              left: 10,
              right: 20,
            },
          },
          plugins: {
            datalabels: {
              align: 'end',
              anchor: 'end',
              display: context => context.dataset.data[context.dataIndex] !== 0,
              offset: 0,
            },
            legend: {
              display: false,
            },
            tooltip: {
              enabled: false,
            },
          },
          scales: {
            x: {
              ticks: {
                display: false,
              },
            },
          },
        }}
        data={{
          labels: ['1', '2', '3', '4', '5', '6'],
          datasets: [
            {
              label: 'Total',
              data: [0, 7, 27, 80, 53, 3],
              backgroundColor: 'rgba(106, 170, 100, 0.5)',
              borderColor: 'rgb(106, 170, 100)',
              borderWidth: 1,
            },
          ],
        }}
      />
    </div>
  );
};

export default Stats;
