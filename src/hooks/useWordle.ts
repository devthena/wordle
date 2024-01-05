import { useEffect, useRef, useState } from 'react';
import { GuessesObject } from '../constants/types';

const useWordle = () => {
  const guessRef = useRef('');
  const [currentGuess, setCurrentGuess] = useState<string>('');
  const [turn, setTurn] = useState<number>(1);

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
    ['Enter', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Backspace'],
  ];

  useEffect(() => {
    if (turn > 6) return;

    guessRef.current = currentGuess;

    const guessArray = currentGuess.split('');
    const newGuessArray = Array(5).fill('');

    newGuessArray.splice(0, guessArray.length, ...guessArray);

    setGuesses(prev => {
      const updatedGuesses = { ...prev };
      updatedGuesses[turn].splice(0, newGuessArray.length, ...newGuessArray);
      return updatedGuesses;
    });
  }, [currentGuess, turn]);

  const submit = () => {
    // @todo: match the guess if it's an actual word
    const isGuessValid = guessRef.current.length === 5;
    const isTurnValid = turn <= 6;

    if (isGuessValid && isTurnValid) {
      // @todo:
      // - add colors to mark the letters and keys
      // - check if the guess is correct or if the game is over
      setTurn(prev => prev + 1);
      setCurrentGuess('');
      guessRef.current = '';
    }
  };

  const handleKeyUp = (key: string) => {
    const allKeyIds = keyIds.flat();

    if (!allKeyIds.includes(key)) return;

    if (key === 'Backspace') {
      if (guessRef.current.length > 0) {
        setCurrentGuess(prev => prev.slice(0, -1));
      }
    } else if (key === 'Enter') {
      submit();
    } else {
      if (guessRef.current.length < 5) {
        setCurrentGuess(prev => prev + key);
      }
    }
  };

  return { guesses, handleKeyUp, keyIds };
};

export default useWordle;
