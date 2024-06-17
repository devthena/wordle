import { useCallback, useEffect } from 'react';

import { WordleStatus } from '../../lib/enums';
import { WordleProps } from '../../lib/types';

import AnswerGrid from '../grid';
import Keyboard from '../keyboard';

import styles from './index.module.scss';

const Wordle = ({ answer }: WordleProps) => {
  const handleKeyPress = useCallback((event: KeyboardEvent) => {
    const { key } = event;
    console.log(key);
    // if (key === 'Enter') {
    //   onEnter();
    // } else if (key === 'Backspace') {
    //   onDelete();
    // } else if (/^[a-zA-Z]$/.test(key)) {
    //   onKey(key.toLowerCase());
    // }
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Wordle</h1>
      {/* <div className={styles.noteWrapper}>
        {wordleStatus === WordleStatus.Answered && (
          <p className={styles.note}>Good job! Press "Enter" to play again.</p>
        )}
        {wordleStatus === WordleStatus.Completed && (
          <p className={styles.note}>
            Answer: <span className={styles.answer}>{word}</span>. Press "Enter"
            to play again.
          </p>
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
      </div> */}

      {/* <AnswerGrid
        colors={guessColors}
        guesses={guesses}
        status={wordleStatus}
        turn={turn}
      />
      <Keyboard colors={keyColors} keys={keyIds} onKeyUp={handleKeyUp} /> */}
    </div>
  );
};

export default Wordle;
