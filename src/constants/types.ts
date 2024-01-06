export type AnswerGridProps = {
  colors: GuessesObject;
  guesses: GuessesObject;
};

export type AppProps = {
  version: string;
};

export type FooterProps = {
  isAuthenticated: boolean;
  version: string;
};

export type GuessesObject = {
  [key: number]: string[];
};

export type HeaderProps = {
  username: string | undefined;
};

export type KeyboardProps = {
  onKeyUp: Function;
  keyColors: KeyColorObject;
  keys: string[][];
};

export type KeyColorObject = {
  [key: string]: string;
};

export type KeyTileProps = {
  id: string;
};

export type WordleProps = {
  answer: string | null;
};
