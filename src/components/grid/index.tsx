import { AnswerGridProps } from '../../constants/types';
import styles from './index.module.scss';

const AnswerGrid = ({ colors, guesses }: AnswerGridProps) => {
  return (
    <div className={styles.grid}>
      {Object.values(guesses).map((guess, i) => {
        const colorArray = Object.values(colors)[i];

        return (
          <div className={styles.row} key={i}>
            {guess.map((letter, j) => {
              let styleNames = styles.letter;

              if (colorArray[j].length > 0) {
                styleNames = `${styles.letter} ${styles[colorArray[j]]}`;
              } else if (letter.length > 0) {
                styleNames = `${styles.letter} ${styles.guessing}`;
              }

              return (
                <div className={styleNames} key={j}>
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
