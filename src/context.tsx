'use client';

import {
  Dispatch,
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useReducer,
} from 'react';

import { WordleObject } from './lib/types';

interface WordleState {
  stats: WordleObject | null;
}

type WordleAction = { type: 'set_stats'; payload: WordleObject | null };

const initialState: WordleState = {
  stats: null,
};

const WordleContext = createContext<
  { state: WordleState; dispatch: Dispatch<WordleAction> } | undefined
>(undefined);

const reducer = (state: WordleState, action: WordleAction): WordleState => {
  switch (action.type) {
    case 'set_stats':
      return {
        ...state,
        stats: action.payload,
      };
    default:
      return state;
  }
};

const WordleProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <WordleContext.Provider value={{ state, dispatch }}>
      {children}
    </WordleContext.Provider>
  );
};

const useWordleState = () => {
  const context = useContext(WordleContext);

  if (context === undefined) {
    throw new Error('useWordleState must be used within a WordleProvider');
  }

  const { state, dispatch } = context;

  const setStats = useCallback(
    (stats: WordleObject | null) => {
      dispatch({ type: 'set_stats', payload: stats });
    },
    [dispatch]
  );

  const saveStats = useCallback(async () => {
    if (!state) return;
    localStorage.setItem('react-wordle-devthena', JSON.stringify(state));
  }, [state]);

  return {
    ...state,
    setStats,
    saveStats,
  };
};

export { WordleProvider, useWordleState };
