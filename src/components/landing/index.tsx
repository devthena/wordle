import { BarElement, CategoryScale, Chart, LinearScale } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { GameStatus } from '../../constants/enums';
import { LandingProps } from '../../constants/types';
import styles from './index.module.scss';

Chart.register(BarElement, CategoryScale, LinearScale);

const Landing = ({ setStatus }: LandingProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.playContainer}>
        <h1>Wordle</h1>
        <button onClick={() => setStatus(GameStatus.SoloStart)}>
          PLAY SOLO
        </button>
        <h2>Co-op Rooms</h2>
        <button>Create Room</button>
      </div>
      <div className={styles.statsContainer}>
        <div className={styles.stats}>
          <h3>Solo Stats</h3>
          <div>
            <p>Win Percentage: 97%</p>
            <p>Max Streak: 3</p>
            <p>Current Streak: 2</p>
            <p>Total Times Played: 11</p>
          </div>
        </div>
        <Bar
          className={styles.chart}
          options={{ indexAxis: 'y' }}
          data={{
            labels: ['1', '2', '3', '4', '5', '6'],
            datasets: [
              {
                label: 'Guess Distribution',
                data: [1, 7, 27, 75, 53, 3],
                backgroundColor: 'rgba(106, 170, 100, 0.5)',
                borderColor: 'rgb(106, 170, 100)',
                borderWidth: 1,
              },
            ],
          }}
        />
      </div>
    </div>
  );
};

export default Landing;
