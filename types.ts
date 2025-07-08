export type FormType = 'masu' | 'te' | 'nai' | 'dictionary';
export type QuizMode = 'none' | 'verb' | 'kanji' | 'guide' | 'conjugation_guide';
export type KanjiQuestionType = 'kunyomi' | 'onyomi' | 'meaning';

export interface Verb {
  id: number;
  dictionary: string;
  masu: string;
  te: string;
  nai: string;
  burmese: string;
}

export interface QuizQuestion {
  verb: Verb;
  formToGuess: Exclude<FormType, 'dictionary'>;
  correctAnswer: string;
}

export interface VerbQuizResult {
  question: QuizQuestion;
  isCorrect: boolean;
}

export type QuizStatus = 'not_started' | 'in_progress' | 'completed';

// New types for Kanji Quiz
export interface KanjiWord {
  word: string;
  reading: string;
  meaning: string;
}

export interface Kanji {
  id: number;
  kanji: string;
  kunyomi: string[];
  onyomi: string[];
  meaning: string;
  words: KanjiWord[];
}

export interface KanjiQuizQuestion {
  kanji: Kanji;
  questionType: KanjiQuestionType;
  options: string[];
  correctAnswer: string;
}

export interface KanjiQuizResult {
  question: KanjiQuizQuestion;
  userAnswer: string;
  isCorrect: boolean;
}
