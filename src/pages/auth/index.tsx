import styles from './index.module.scss';
import { LoginButton } from '../../components';

const Auth = () => {
  return (
    <div className={styles.auth}>
      <h1>Hello.</h1>
      <LoginButton />
    </div>
  );
};

export default Auth;
