import { useState } from 'react';

import styles from './index.module.scss';

const AnswerGrid = () => {
  const attempts = 1;
  const [guesses, setGuesses] = useState({
    1: Array(5).fill(''),
    2: Array(5).fill(''),
    3: Array(5).fill(''),
    4: Array(5).fill(''),
    5: Array(5).fill(''),
    6: Array(5).fill(''),
  });

  return (
    <div className={styles.grid}>
      {Object.values(guesses).map((guess, i) => (
        <div className={styles.row} key={i}>
          {guess.map((letter, i) => (
            <div className={styles.letter} key={i}>
              {letter}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default AnswerGrid;
