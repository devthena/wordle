import { AnswerGridProps } from '../../constants/types';
import styles from './index.module.scss';

const AnswerGrid = ({ guesses }: AnswerGridProps) => {
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
