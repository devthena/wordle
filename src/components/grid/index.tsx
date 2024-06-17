import { WordLength } from '../../lib/constants';
import { WordleStatus } from '../../lib/enums';
import { Guess } from '../../lib/types';

import styles from './index.module.scss';

interface GridProps {
  currentTurn: number;
  guesses: Guess[];
  status: WordleStatus;
}

const AnswerGrid = ({ currentTurn, guesses, status }: GridProps) => {
  return (
    <div className={styles.grid}>
      {guesses.map((guess, index) => {
        const guessArray = guess.word.split('');
        const wordArray = Array(WordLength)
          .fill('')
          .map((_l, i) => (guessArray[i] !== undefined ? guessArray[i] : ''));

        const rowClass =
          index === currentTurn &&
          (status === WordleStatus.InvalidGuess ||
            status === WordleStatus.InvalidWord)
            ? styles.row + ' ' + styles.invalid
            : styles.row;

        return (
          <div key={index} className={rowClass}>
            {wordArray.map((letter: string, i: number) => {
              const resultClass = styles.letter + ' ' + styles[guess.result[i]];
              const styleClass =
                index === currentTurn && letter !== ''
                  ? resultClass + ' ' + styles.guessing
                  : resultClass;

              return (
                <div key={i} className={styleClass}>
                  {letter}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default AnswerGrid;
