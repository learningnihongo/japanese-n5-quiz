
export interface Verb {
  id: number;
  teForm: string;
  dictionaryForm: string;
  masuForm: string;
  naiForm:string;
  burmese: string;
  group: 1 | 2 | 3;
}

export type VerbQuizMode = 'te' | 'nai' | 'dictionary' | 'masu';

export interface Kanji {
  id: number;
  kanji: string;
  reading: string;
  burmese: string;
}

export type KanjiQuizMode = 'reading' | 'meaning';

export type FeedbackState = 'idle' | 'correct' | 'incorrect';

export type ViewMode = 'verbQuiz' | 'kanjiQuiz' | 'guide';
