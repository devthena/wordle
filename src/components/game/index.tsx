import { useState } from 'react';
import { User } from '@auth0/auth0-react';

import { Header, Keyboard } from './components';

import styles from './index.module.scss';

const enum GameStatus {
  Start,
  Solo,
  Create,
  Coop,
  Over,
}

const Game = (data: User) => {
  const [status, setStatus] = useState(GameStatus.Start);

  return (
    <div>
      <Header />
      <div className={styles.content}>
        {status === GameStatus.Start && (
          <div>
            <h1>Play Solo</h1>
            <button onClick={() => setStatus(GameStatus.Solo)}>START</button>
            <h2>Play with Friends</h2>
            <div>
              <button>New</button>
              <div>Room List</div>
            </div>
          </div>
        )}
        {status === GameStatus.Solo && (
          <div>
            <h3>Wordle</h3>
            <div>Board Grid</div>
            <div>
              <Keyboard />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Game;
