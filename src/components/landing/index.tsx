import { useWordleState } from '../../context';
import { GameStatus } from '../../lib/enums';

import Stats from '../stats';
import styles from './index.module.scss';

const Landing = () => {
  const { setGame } = useWordleState();

  return (
    <div className={styles.content}>
      <div className={styles.container}>
        <button
          className={styles.play}
          onClick={() => setGame(GameStatus.Playing)}>
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
