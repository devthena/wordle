import { Bar } from 'react-chartjs-2';
import { GameStatus } from '../../constants/enums';
import { LandingProps } from '../../constants/types';
import styles from './index.module.scss';
import Stats from '../stats';

const Landing = ({ setStatus }: LandingProps) => {
  return (
    <div className={styles.content}>
      <h1>Wordle</h1>
      <div className={styles.container}>
        <div className={styles.playContainer}>
          <h2>Solo</h2>
          <button onClick={() => setStatus(GameStatus.SoloStart)}>PLAY</button>
          <h2>Co-op Rooms</h2>
          <button>CREATE</button>
          <button>JOIN</button>
        </div>
        <div className={styles.statsContainer}>
          <Stats />
        </div>
      </div>
    </div>
  );
};

export default Landing;
