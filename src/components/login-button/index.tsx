import { useAuth0 } from '@auth0/auth0-react';
import styles from './index.module.scss';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button className={styles.login} onClick={() => loginWithRedirect()}>
      LOGIN
    </button>
  );
};

export default LoginButton;
