import { GameStatus } from '../../lib/enums';
import { LandingProps } from '../../lib/types';

import Stats from '../stats';
import styles from './index.module.scss';

const Landing = ({ setStatus }: LandingProps) => {
  return (
    <div className={styles.content}>
      <h1>Wordle</h1>
      <div className={styles.container}>
        <button
          className={styles.play}
          onClick={() => setStatus(GameStatus.Playing)}>
          PLAY
        </button>
        <div className={styles.stats}>
          <Stats />
        </div>
      </div>
    </div>
  );
};

export default Landing;
