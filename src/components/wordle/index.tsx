import { useEffect } from 'react';

import { WordleProps } from '../../constants/types';
import useWordle from '../../hooks/useWordle';

import AnswerGrid from '../grid';
import Keyboard from '../keyboard';

import styles from './index.module.scss';
import { WordleStatus } from '../../constants/enums';

const Wordle = ({ answer }: WordleProps) => {
  const { guessColors, guesses, handleKeyUp, keyColors, keyIds, wordleStatus } =
    useWordle(answer);

  useEffect(() => {
    const keyUpHandler = (evt: KeyboardEvent) => {
      handleKeyUp(evt.key);
    };
    window.addEventListener('keyup', keyUpHandler, true);
    return window.removeEventListener('keyup', keyUpHandler);
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Wordle</h1>
      <div className={styles.noteWrapper}>
        {(wordleStatus === WordleStatus.Answered ||
          wordleStatus === WordleStatus.Completed) && (
          <p className={styles.note}>Press 'Enter' to play again!</p>
        )}
        {wordleStatus === WordleStatus.InvalidTurn && (
          <p className={`${styles.note} ${styles.noteFade}`}>
            Not enough letters
          </p>
        )}
        {wordleStatus === WordleStatus.InvalidWord && (
          <p className={`${styles.note} ${styles.noteFade}`}>
            Not in word list
          </p>
        )}
      </div>

      <AnswerGrid colors={guessColors} guesses={guesses} />
      <Keyboard onKeyUp={handleKeyUp} keyColors={keyColors} keys={keyIds} />
    </div>
  );
};

export default Wordle;
