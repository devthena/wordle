import { FooterProps } from '../../constants/types';
import LogoutButton from '../logout-button';
import styles from './index.module.scss';

const Footer = ({ version }: FooterProps) => {
  return (
    <footer className={styles.container}>
      <div className={styles.logout}>
        <LogoutButton />
      </div>
      <p>Made with ♡ by Athena | Build v{version}</p>
    </footer>
  );
};

export default Footer;
