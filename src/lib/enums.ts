export enum ModalContent {
  Rules,
  Stats,
}

export enum GameStatus {
  Overview, // in the Wordle menu
  Playing, // currently playing Wordle
}

export enum KeyStatus {
  Absent = 'absent', // does not exist
  Correct = 'correct', // exists and in the right position
  Default = 'default', // not yet submitted
  Present = 'present', // exists but in the wrong position
}

export enum WordleStatus {
  Answered, // answered the wordle correctly
  Completed, // reached maximum number of guesses
  Playing, // currently playing the game
  InvalidGuess, // entered word is less than 5 letters
  InvalidWord, // entered word is not part of the dictionary
}
