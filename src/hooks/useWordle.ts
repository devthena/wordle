import { useEffect, useRef, useState } from 'react';

import { AnswerList } from '../constants/answer-list';
import { WordleStatus } from '../constants/enums';
import { GuessesObject, ColorObject } from '../constants/types';
import { WordList } from '../constants/word-list';

import useStats from './useStats';

const useWordle = (answer: string | null) => {
  const { setStats } = useStats();

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

  const [keyColors, setKeyColors] = useState<ColorObject>({});

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
    const _word = word.current;

    if (_guess.length < 5) {
      setWordleStatus(WordleStatus.InvalidTurn);
      setTimeout(() => {
        setWordleStatus(WordleStatus.Ongoing);
      }, 1500);
      return;
    }

    if (!WordList.includes(_guess)) {
      setWordleStatus(WordleStatus.InvalidWord);
      setTimeout(() => {
        setWordleStatus(WordleStatus.Ongoing);
      }, 1500);
      return;
    }

    const answerArray = _word.split('');
    const guessArray = _guess.split('');
    const colorArray = Array(5).fill('grey');

    const newKeyColors: ColorObject = {};

    guessArray.forEach((letter, i) => {
      if (answerArray[i] === letter) {
        answerArray[i] = '';
        colorArray[i] = 'green';
        newKeyColors[letter] = 'green';
      }
    });

    guessArray.forEach((letter, i) => {
      if (newKeyColors[letter] !== 'green') {
        const letterIndex = answerArray.indexOf(letter);
        if (letterIndex >= 0) {
          answerArray[letterIndex] = '';
          colorArray[i] = 'yellow';
          newKeyColors[letter] = 'yellow';
        } else if (newKeyColors[letter] !== 'yellow') {
          newKeyColors[letter] = 'grey';
        }
      }
    });

    setKeyColors(prev => ({ ...prev, ...newKeyColors }));

    setGuessColors(prev => {
      const updatedFormattedGuesses = { ...prev };
      updatedFormattedGuesses[_turn].splice(0, 5, ...colorArray);
      return updatedFormattedGuesses;
    });

    if (_guess === _word) {
      turn.current = 0;
      setStats(_turn);
      setWordleStatus(WordleStatus.Answered);
    } else {
      setCurrentGuess('');
      turn.current += 1;
    }

    if (turn.current > 6) {
      turn.current = 0;
      setStats(0);
      setWordleStatus(WordleStatus.Completed);
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
    turn: turn.current,
    word: word.current,
    wordleStatus,
  };
};

export default useWordle;
