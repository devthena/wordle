import { useEffect, useRef, useState } from 'react';

import { WordleStatus } from '../constants/enums';
import { GuessesObject } from '../constants/types';
import { WordList } from '../constants/word-list';

const useWordle = (answer: string) => {
  const guess = useRef('');
  const turn = useRef(1);
  const word = useRef(answer);

  const [currentGuess, setCurrentGuess] = useState<string>('');
  const [wordleStatus, setWordleStatus] = useState(WordleStatus.Ongoing);

  const [guesses, setGuesses] = useState<GuessesObject>({
    1: Array(5).fill(''),
    2: Array(5).fill(''),
    3: Array(5).fill(''),
    4: Array(5).fill(''),
    5: Array(5).fill(''),
    6: Array(5).fill(''),
  });

  const [guessColors, setGuessColors] = useState<GuessesObject>({
    1: Array(5).fill(''),
    2: Array(5).fill(''),
    3: Array(5).fill(''),
    4: Array(5).fill(''),
    5: Array(5).fill(''),
    6: Array(5).fill(''),
  });

  const keyIds = [
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    ['Enter', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Backspace'],
  ];

  useEffect(() => {
    if (!turn.current) return;

    guess.current = currentGuess;

    const guessArray = currentGuess.split('');
    const newGuessArray = Array(5).fill('');

    newGuessArray.splice(0, guessArray.length, ...guessArray);

    setGuesses(prev => {
      const updatedGuesses = { ...prev };
      updatedGuesses[turn.current].splice(
        0,
        newGuessArray.length,
        ...newGuessArray
      );
      return updatedGuesses;
    });
  }, [currentGuess]);

  const submit = () => {
    const _turn = turn.current;
    const _guess = guess.current;

    if (guess.current.length < 5) {
      setWordleStatus(WordleStatus.InvalidTurn);
      setTimeout(() => {
        setWordleStatus(WordleStatus.Ongoing);
      }, 1500);
      return;
    }

    if (!WordList.includes(guess.current)) {
      setWordleStatus(WordleStatus.InvalidWord);
      setTimeout(() => {
        setWordleStatus(WordleStatus.Ongoing);
      }, 1500);
      return;
    }

    const formatted = guesses[_turn].map((letter, i) => {
      const answerArray = word.current.split('');
      let colorValue = 'grey';

      if (answerArray.indexOf(letter) >= 0) colorValue = 'yellow';
      if (letter === answerArray[i]) colorValue = 'green';

      return colorValue;
    });

    setGuessColors(prev => {
      const updatedFormattedGuesses = { ...prev };
      updatedFormattedGuesses[_turn].splice(0, formatted.length, ...formatted);
      return updatedFormattedGuesses;
    });

    if (_guess === word.current) {
      turn.current = 0;
      setWordleStatus(WordleStatus.Answered);
    } else {
      setCurrentGuess('');
      turn.current += 1;
    }

    if (turn.current > 6) {
      turn.current = 0;
      return setWordleStatus(WordleStatus.Completed);
    }
  };

  const handleKeyUp = (key: string) => {
    const allKeyIds = keyIds.flat();

    if (!allKeyIds.includes(key)) return;

    if (key === 'Backspace') {
      if (guess.current === word.current) return;
      if (guess.current.length > 0) {
        setCurrentGuess(prev => prev.slice(0, -1));
      }
    } else if (key === 'Enter') {
      if (!turn.current) return;
      submit();
    } else {
      if (guess.current === word.current) return;
      if (guess.current.length < 5) {
        setCurrentGuess(prev => prev + key);
      }
    }
  };

  return { guessColors, guesses, handleKeyUp, keyIds, wordleStatus };
};

export default useWordle;
