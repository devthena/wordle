import { GameStatus } from '../../lib/enums';
import { BackIcon, StatsIcon } from '../../lib/icons';
import { HeaderProps } from '../../lib/types';

import styles from './index.module.scss';

const Header = ({ setDisplayModal, setStatus, status }: HeaderProps) => {
  return (
    <header className={styles.container}>
      <div className={styles.buttonContainer}>
        {status !== GameStatus.Overview && (
          <>
            <button
              className={styles.back}
              onClick={() => setStatus(GameStatus.Overview)}>
              <BackIcon />
            </button>
            <button
              className={styles.backDesktop}
              onClick={() => setStatus(GameStatus.Overview)}>
              <BackIcon />
              <span>QUIT</span>
            </button>
          </>
        )}
        <button className={styles.stats} onClick={() => setDisplayModal(true)}>
          <StatsIcon />
        </button>
      </div>
    </header>
  );
};

export default Header;
