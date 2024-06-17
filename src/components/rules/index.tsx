import styles from './index.module.scss';

const Rules = () => {
  return (
    <div className={styles.container}>
      <h3>HOW TO PLAY</h3>
      <p>Guess the Wordle in 6 tries</p>
      <div className={styles.rules}>
        <ul>
          <li>Each guess must be a valid 5-letter word</li>
          <li>
            <span className={styles.green}>GREEN</span> is for letters in the
            correct spot
          </li>
          <li>
            <span className={styles.yellow}>YELLOW</span> is for letters the
            wrong spot
          </li>
          <li>
            <span className={styles.grey}>GREY</span> is for letters that don't
            exist
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Rules;
