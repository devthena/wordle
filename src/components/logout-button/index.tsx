import { useAuth0 } from '@auth0/auth0-react';
import styles from './index.module.scss';

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button
      className={styles.logout}
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }>
      LOGOUT
    </button>
  );
};

export default LogoutButton;
