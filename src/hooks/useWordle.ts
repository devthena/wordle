import { useEffect, useRef, useState } from 'react';

import { WordleStatus } from '../constants/enums';
import { GuessesObject, KeyColorObject } from '../constants/types';
import { AnswerList } from '../constants/answer-list';
import { WordList } from '../constants/word-list';

const useWordle = (answer: string | null) => {
  const generateAnswer = () => {
    const randomIndex = Math.floor(Math.random() * AnswerList.length);
    return AnswerList[randomIndex];
  };

  const guess = useRef('');
  const turn = useRef(1);
  const word = useRef(answer ?? generateAnswer());

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

  const [keyColors, setKeyColors] = useState<KeyColorObject>({});

  const keyIds = [
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    ['Enter', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Backspace'],
  ];

  useEffect(() => {
    if (wordleStatus === WordleStatus.Restart) {
      const newGuessArray = Array(5).fill('');

      setCurrentGuess('');
      setGuesses(prev => {
        const updatedGuesses = { ...prev };
        let x = 1;
        while (x <= 6) {
          updatedGuesses[x].splice(0, 5, ...newGuessArray);
          x++;
        }
        return updatedGuesses;
      });
      setGuessColors(prev => {
        const updatedGuessColors = { ...prev };
        let x = 1;
        while (x <= 6) {
          updatedGuessColors[x].splice(0, 5, ...newGuessArray);
          x++;
        }
        return updatedGuessColors;
      });
      setKeyColors({});
      guess.current = '';
      turn.current = 1;
      word.current = generateAnswer();
    }
  }, [wordleStatus]);

  useEffect(() => {
    if (!turn.current) return;

    guess.current = currentGuess;

    const guessArray = currentGuess.split('');
    const newGuessArray = Array(5).fill('');

    newGuessArray.splice(0, guessArray.length, ...guessArray);

    setGuesses(prev => {
      const updatedGuesses = { ...prev };
      updatedGuesses[turn.current].splice(0, 5, ...newGuessArray);
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

      setKeyColors(prev => {
        const updatedKeyColors = { ...prev };
        updatedKeyColors[letter] = colorValue;
        return updatedKeyColors;
      });

      return colorValue;
    });

    setGuessColors(prev => {
      const updatedFormattedGuesses = { ...prev };
      updatedFormattedGuesses[_turn].splice(0, 5, ...formatted);
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
      if (!turn.current) return;
      if (guess.current.length > 0) {
        setCurrentGuess(prev => prev.slice(0, -1));
      }
    } else if (key === 'Enter') {
      if (!turn.current) return setWordleStatus(WordleStatus.Restart);
      submit();
    } else {
      if (!turn.current) return;
      if (guess.current.length < 5) {
        setCurrentGuess(prev => prev + key);
      }
    }
  };

  return {
    guessColors,
    guesses,
    handleKeyUp,
    keyColors,
    keyIds,
    word: word.current,
    wordleStatus,
  };
};

export default useWordle;
