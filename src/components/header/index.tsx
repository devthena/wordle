import styles from './index.module.scss';
import LogoutButton from '../logout-button';

const Header = () => {
  return (
    <header className={styles.bar}>
      <LogoutButton />
    </header>
  );
};

export default Header;
