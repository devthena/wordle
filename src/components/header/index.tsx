import { HeaderProps } from '../../constants/types';
import LogoutButton from '../logout-button';
import styles from './index.module.scss';

const Header = ({ avatar, username }: HeaderProps) => {
  return (
    <header className={styles.container}>
      {username && <span className={styles.greeting}>Hi, {username}!</span>}
      {avatar && (
        <img alt="User Avatar" className={styles.avatar} src={avatar} />
      )}
      <LogoutButton />
    </header>
  );
};

export default Header;
