import { LoginButton } from './components';
import styles from './index.module.scss';

const Auth = () => {
  return (
    <div className={styles.auth}>
      <h1>Hello.</h1>
      <LoginButton />
    </div>
  );
};

export default Auth;
