import { useEffect } from 'react';

import { WordleProps } from '../../constants/types';
import useWordle from '../../hooks/useWordle';

import AnswerGrid from '../grid';
import Keyboard from '../keyboard';

import styles from './index.module.scss';

const Wordle = ({ answer }: WordleProps) => {
  const { guessColors, guesses, handleKeyUp, keyIds } = useWordle(answer);

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
      <AnswerGrid colors={guessColors} guesses={guesses} />
      <Keyboard onKeyUp={handleKeyUp} keys={keyIds} />
    </div>
  );
};

export default Wordle;
