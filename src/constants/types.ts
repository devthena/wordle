export type AnswerGridProps = {
  colors: GuessesObject;
  guesses: GuessesObject;
};

export type GuessesObject = {
  [key: number]: string[];
};

export type HeaderProps = {
  username: string | undefined;
};

export type KeyboardProps = {
  onKeyUp: Function;
  keys: string[][];
};

export type KeyTileProps = {
  id: string;
};

export type WordleProps = {
  answer: string | null;
};
