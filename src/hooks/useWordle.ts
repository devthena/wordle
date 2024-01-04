import { useState } from 'react';
import { GuessesObject } from '../constants/types';

const useWordle = () => {
  let letterIndex = 0;
  let turn = 1;

  const [guesses, setGuesses] = useState<GuessesObject>({
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
    ['Enter', 'z', 'x', 'c', ' v', 'b', 'n', 'm', 'Backspace'],
  ];

  const addLetter = (key: string) => {
    const _letterIndex = letterIndex;

    if (letterIndex < 5) {
      setGuesses(prev => {
        const updatedGuesses = { ...prev };
        updatedGuesses[turn][_letterIndex] = key;
        return updatedGuesses;
      });

      letterIndex = _letterIndex + 1;
    }
  };

  const removeLetter = () => {
    const _letterIndex = letterIndex;

    if (letterIndex !== 0) {
      setGuesses(prev => {
        const updatedGuesses = { ...prev };
        updatedGuesses[turn][_letterIndex - 1] = '';
        return updatedGuesses;
      });

      letterIndex = _letterIndex - 1;
    }
  };

  const submit = () => {
    // @todo: match the guess if it's an actual word
    const isGuessValid = guesses[turn].length === 5;
    const isTurnValid = turn <= 6;

    if (isGuessValid && isTurnValid) {
      // @todo:
      // - add colors to mark the letters and keys
      // - check if the guess is correct or if the game is over
      turn = turn + 1;
      letterIndex = 0;
    }
  };

  const keyPress = (key: string) => {
    if (key === 'Backspace') {
      removeLetter();
    } else if (key === 'Enter') {
      submit();
    } else {
      addLetter(key);
    }
  };

  const handleKeyUp = (evt: KeyboardEvent) => {
    const allKeyIds = keyIds.flat();
    if (allKeyIds.includes(evt.key)) {
      keyPress(evt.key);
    }
  };

  return { guesses, handleKeyUp, keyIds };
};

export default useWordle;
