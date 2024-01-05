import { useEffect } from 'react';
import useWordle from '../../hooks/useWordle';

import AnswerGrid from '../grid';
import Keyboard from '../keyboard';

import styles from './index.module.scss';

const Wordle = () => {
  const { guesses, handleKeyUp, keyIds } = useWordle();

  useEffect(() => {
    const keyUpHandler = (evt: KeyboardEvent) => {
      handleKeyUp(evt.key);
    };
    window.addEventListener('keyup', keyUpHandler, true);
    return window.removeEventListener('keyup', keyUpHandler);
  }, []);

  return (
    <div className={styles.container}>
      <h1>Wordle</h1>
      <AnswerGrid guesses={guesses} />
      <Keyboard onKeyUp={handleKeyUp} keys={keyIds} />
    </div>
  );
};

export default Wordle;
