import { GameStatus, ModalContent } from '../../lib/enums';
import { BackIcon, RulesIcon, StatsIcon } from '../../lib/icons';

import styles from './index.module.scss';
import { useWordleState } from '../../context';

const Header = () => {
  const { gameStatus, setGame, setModal } = useWordleState();

  return (
    <header className={styles.container}>
      <div className={styles.left}>
        {gameStatus !== GameStatus.Overview && (
          <>
            <button
              className={styles.back}
              onClick={() => setGame(GameStatus.Overview)}>
              <BackIcon />
            </button>
            <button
              className={styles.backDesktop}
              onClick={() => setGame(GameStatus.Overview)}>
              <BackIcon />
              <span>QUIT</span>
            </button>
          </>
        )}
      </div>
      <h1>WORDLE</h1>
      <div className={styles.right}>
        <button
          className={styles.rules}
          onClick={() =>
            setModal({ content: ModalContent.Rules, display: true })
          }>
          <RulesIcon />
        </button>
        {gameStatus !== GameStatus.Overview && (
          <button
            className={styles.stats}
            onClick={() =>
              setModal({ content: ModalContent.Stats, display: true })
            }>
            <StatsIcon />
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
