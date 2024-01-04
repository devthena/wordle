import { HeaderProps } from '../../constants/types';
import LogoutButton from '../logout-button';
import styles from './index.module.scss';

const Header = ({ username }: HeaderProps) => {
  return (
    <header className={styles.container}>
      {username && <span className={styles.greeting}>Hi, {username}!</span>}
      <LogoutButton />
    </header>
  );
};

export default Header;
