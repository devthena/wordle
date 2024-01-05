import { useEffect, useRef, useState } from 'react';
import { GuessesObject } from '../constants/types';

const useWordle = (answer: string) => {
  const guess = useRef('');
  const turn = useRef(1);
  const [currentGuess, setCurrentGuess] = useState<string>('');

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
    if (turn.current > 6) return;

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
  }, [currentGuess, turn]);

  const submit = () => {
    // @todo: match the guess if it's an actual word
    const _turn = turn.current;
    const isGuessValid = guess.current.length === 5;
    const isTurnValid = _turn <= 6;

    if (isGuessValid && isTurnValid) {
      // @todo: check if the guess is correct or if the game is over

      const formatted = guesses[_turn].map((letter, i) => {
        const answerArray = answer.split('');
        const letterIndex = answerArray.indexOf(letter);

        let colorValue = 'grey';
        if (letterIndex >= 0) colorValue = 'yellow';
        if (letterIndex === i) colorValue = 'green';

        return colorValue;
      });

      setGuessColors(prev => {
        const updatedFormattedGuesses = { ...prev };
        updatedFormattedGuesses[_turn].splice(
          0,
          formatted.length,
          ...formatted
        );
        return updatedFormattedGuesses;
      });

      setCurrentGuess('');
      turn.current += 1;
      guess.current = '';
    }
  };

  const handleKeyUp = (key: string) => {
    const allKeyIds = keyIds.flat();

    if (!allKeyIds.includes(key) || turn.current > 6) return;

    if (key === 'Backspace') {
      if (guess.current.length > 0) {
        setCurrentGuess(prev => prev.slice(0, -1));
      }
    } else if (key === 'Enter') {
      submit();
    } else {
      if (guess.current.length < 5) {
        setCurrentGuess(prev => prev + key);
      }
    }
  };

  return { guessColors, guesses, handleKeyUp, keyIds };
};

export default useWordle;
