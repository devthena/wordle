import LogoutButton from '../logout-button';
import styles from './index.module.scss';

const Header = () => {
  return (
    <header className={styles.bar}>
      <LogoutButton />
    </header>
  );
};

export default Header;
