import { GameStatus, ModalContent, WordleStatus } from './enums';

export type AnswerGridProps = {
  colors: GuessesObject;
  guesses: GuessesObject;
  status: WordleStatus;
  turn: number;
};

export type AppProps = {
  version: string;
};

export type ColorObject = {
  [key: string]: string;
};

export type FooterProps = {
  isAuthenticated: boolean;
  version: string;
};

export type GuessesObject = {
  [key: number]: string[];
};

export type HeaderProps = {
  avatar: string | undefined;
  setDisplayModal: Function;
  setStatus: Function;
  status: GameStatus;
  username: string | undefined;
};

export type KeyboardProps = {
  colors: ColorObject;
  keys: string[][];
  onKeyUp: Function;
};

export type KeyTileProps = {
  id: string;
};

export type LandingProps = {
  setStatus: Function;
};

export type ModalProps = {
  content?: ModalContent;
  setDisplayModal: Function;
};

export type WordleProps = {
  answer: string | null;
};
