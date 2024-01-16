import { useAuth0 } from '@auth0/auth0-react';
import { FooterProps } from '../../constants/types';
import LogoutButton from '../logout-button';
import styles from './index.module.scss';

const Footer = ({ version }: FooterProps) => {
  const { isAuthenticated } = useAuth0();

  return (
    <footer className={styles.container}>
      {isAuthenticated && (
        <div className={styles.logout}>
          <LogoutButton />
        </div>
      )}
      <p>Made with ♡ by Athena | Build v{version}</p>
    </footer>
  );
};

export default Footer;
