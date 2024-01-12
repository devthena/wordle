import { Bar } from 'react-chartjs-2';

import styles from './index.module.scss';

const Stats = () => {
  return (
    <div className={styles.container}>
      <div className={styles.stats}>
        <h3>Solo Stats</h3>
        <p>Win Percentage: 97%</p>
        <p>Max Streak: 3</p>
        <p>Current Streak: 2</p>
        <p>Total Times Played: 11</p>
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
