export type AnswerGridProps = {
  colors: GuessesObject;
  guesses: GuessesObject;
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

export type WordleProps = {
  answer: string | null;
};
