import LogoutButton from '../logout-button';
import styles from './index.module.scss';

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.logout}>
        <LogoutButton />
      </div>
      <p>Made with 🩷 by Athena</p>
    </footer>
  );
};

export default Footer;
