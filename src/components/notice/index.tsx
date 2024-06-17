import { WordleStatus } from '../../lib/enums';
import styles from './index.module.scss';

interface NoticeProps {
  answer: string;
  currentGuess: string;
  status: WordleStatus;
  onResume: () => void;
}

const Notice = ({ answer, currentGuess, status, onResume }: NoticeProps) => {
  if (
    status === WordleStatus.InvalidGuess ||
    status === WordleStatus.InvalidWord
  ) {
    setTimeout(onResume, 2250);
  }

  return (
    <div className={styles.container}>
      {status === WordleStatus.Answered && (
        <p className={styles.note}>Great job! Press ENTER to play again.</p>
      )}
      {status === WordleStatus.Completed && (
        <p className={styles.note}>
          Answer: <span className={styles.answer}>{answer}</span>. Press ENTER
          to play again.
        </p>
      )}
      {status === WordleStatus.InvalidGuess && (
        <p className={`${styles.note} ${styles.noteFade}`}>
          <span className={styles.answer}>{currentGuess}</span> does not have
          enough letters.
        </p>
      )}
      {status === WordleStatus.InvalidWord && (
        <p className={`${styles.note} ${styles.noteFade}`}>
          <span className={styles.answer}>{currentGuess}</span> is not in the
          dictionary.
        </p>
      )}
    </div>
  );
};

export default Notice;
