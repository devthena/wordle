import { HeaderProps } from '../../constants/types';
import LogoutButton from '../logout-button';
import styles from './index.module.scss';

const Header = (data: HeaderProps) => {
  return (
    <header className={styles.bar}>
      {data.username && (
        <span className={styles.greeting}>Hi, {data.username}!</span>
      )}
      <LogoutButton />
    </header>
  );
};

export default Header;
