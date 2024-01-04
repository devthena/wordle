import { useEffect } from 'react';
import useWordle from '../../hooks/useWordle';

import AnswerGrid from '../grid';
import Keyboard from '../keyboard';

import styles from './index.module.scss';

const Wordle = () => {
  const { guesses, handleKeyUp, keyIds } = useWordle();

  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp, true);
    return window.removeEventListener('keyup', handleKeyUp);
  }, []);

  return (
    <div className={styles.container}>
      <h1>Wordle</h1>
      <AnswerGrid guesses={guesses} />
      <Keyboard keys={keyIds} />
    </div>
  );
};

export default Wordle;
