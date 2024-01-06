import { useEffect } from 'react';

import { AnswerList } from '../../constants/answer-list';
import { WordleProps } from '../../constants/types';
import useWordle from '../../hooks/useWordle';

import AnswerGrid from '../grid';
import Keyboard from '../keyboard';

import styles from './index.module.scss';
import { WordleStatus } from '../../constants/enums';

const Wordle = ({ answer }: WordleProps) => {
  const generateAnswer = () => {
    const randomIndex = Math.floor(Math.random() * AnswerList.length);
    return AnswerList[randomIndex];
  };

  const newAnswer = answer || generateAnswer();

  const { guessColors, guesses, handleKeyUp, keyColors, keyIds, wordleStatus } =
    useWordle(newAnswer);

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
        {wordleStatus === WordleStatus.InvalidTurn && (
          <p className={styles.note}>Not enough letters</p>
        )}
        {wordleStatus === WordleStatus.InvalidWord && (
          <p className={styles.note}>Not in word list</p>
        )}
      </div>

      <AnswerGrid colors={guessColors} guesses={guesses} />
      <Keyboard onKeyUp={handleKeyUp} keyColors={keyColors} keys={keyIds} />
    </div>
  );
};

export default Wordle;
