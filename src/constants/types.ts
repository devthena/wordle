export type AnswerGridProps = {
  guesses: GuessesObject;
};

export type GuessesObject = {
  [key: number]: string[];
};

export type HeaderProps = {
  username: string | undefined;
};

export type KeyboardProps = {
  keys: string[][];
};

export type KeyTileProps = {
  id: string;
};
