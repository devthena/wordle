import { useAuth0 } from '@auth0/auth0-react';

import { GameStatus } from '../../constants/enums';
import { BackIcon, StatsIcon } from '../../constants/icons';
import { HeaderProps } from '../../constants/types';

import LogoutButton from '../logout-button';
import styles from './index.module.scss';

const Header = ({ setDisplayModal, setStatus, status }: HeaderProps) => {
  const { user } = useAuth0();
  const avatar = user?.picture;
  const username = user?.nickname || user?.name || user?.email;

  return (
    <header className={styles.container}>
      <div className={styles.buttonContainer}>
        {status !== GameStatus.ModePick && (
          <>
            <button
              className={styles.back}
              onClick={() => setStatus(GameStatus.ModePick)}>
              <BackIcon />
            </button>
            <button
              className={styles.backDesktop}
              onClick={() => setStatus(GameStatus.ModePick)}>
              <BackIcon />
              <span>BACK</span>
            </button>
          </>
        )}
        <button className={styles.stats} onClick={() => setDisplayModal(true)}>
          <StatsIcon />
        </button>
      </div>
      <div className={styles.userContainer}>
        {username && <span className={styles.greeting}>Hi, {username}!</span>}
        {avatar && (
          <img alt="User Avatar" className={styles.avatar} src={avatar} />
        )}
        <LogoutButton />
      </div>
    </header>
  );
};

export default Header;
