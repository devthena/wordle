import { User } from '@auth0/auth0-react';

import styles from './index.module.scss';

import { Header } from '../../components';

const Landing = (data: User) => {
  return (
    <div>
      <Header />
      <div className={styles.content}>
        <h1>Play</h1>
        <button>Solo</button>
        <button>Co-op</button>
      </div>
    </div>
  );
};

export default Landing;
