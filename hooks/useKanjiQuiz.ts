import { useState, useCallback, useMemo } from 'react';
import { kanjiData } from '../data/kanji';
import { KanjiQuizQuestion, KanjiQuizResult, QuizStatus, KanjiQuestionType, Kanji } from '../types';

const shuffleArray = <T,>(array: T[]): T[] => {
  return [...array].sort(() => Math.random() - 0.5);
};

const getDistractors = (allKanji: Kanji[], correctKanji: Kanji, type: KanjiQuestionType, count: number): string[] => {
  let distractors: string[] = [];
  const allPossibleAnswers = new Set<string>();

  if (type === 'kunyomi') {
    allKanji.forEach(k => k.kunyomi.forEach(r => allPossibleAnswers.add(r)));
    correctKanji.kunyomi.forEach(r => allPossibleAnswers.delete(r));
  } else if (type === 'onyomi') {
    allKanji.forEach(k => k.onyomi.forEach(r => allPossibleAnswers.add(r)));
    correctKanji.onyomi.forEach(r => allPossibleAnswers.delete(r));
  } else { // meaning
    allKanji.forEach(k => allPossibleAnswers.add(k.meaning));
    allPossibleAnswers.delete(correctKanji.meaning);
  }
  
  distractors = shuffleArray(Array.from(allPossibleAnswers));
  return distractors.slice(0, count);
};


export const useKanjiQuiz = () => {
  const [status, setStatus] = useState<QuizStatus>('not_started');
  const [questions, setQuestions] = useState<KanjiQuizQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [results, setResults] = useState<KanjiQuizResult[]>([]);

  const startQuiz = useCallback(() => {
    const shuffledKanji = shuffleArray(kanjiData);
    const questionTypes: KanjiQuestionType[] = ['kunyomi', 'onyomi', 'meaning'];

    const generatedQuestions = shuffledKanji.map((kanji): KanjiQuizQuestion | null => {
      const availableTypes = questionTypes.filter(type => {
        if (type === 'kunyomi') return kanji.kunyomi.length > 0;
        if (type === 'onyomi') return kanji.onyomi.length > 0;
        if (type === 'meaning') return kanji.meaning.length > 0;
        return false;
      });

      if (availableTypes.length === 0) return null;

      const questionType = shuffleArray(availableTypes)[0];
      
      let correctAnswer = '';
      if (questionType === 'kunyomi') correctAnswer = kanji.kunyomi[0];
      else if (questionType === 'onyomi') correctAnswer = kanji.onyomi[0];
      else correctAnswer = kanji.meaning;
      
      const distractors = getDistractors(kanjiData, kanji, questionType, 3);
      const options = shuffleArray([...distractors, correctAnswer]);

      return {
        kanji,
        questionType,
        options,
        correctAnswer,
      };
    }).filter((q): q is KanjiQuizQuestion => q !== null);

    setQuestions(generatedQuestions);
    setCurrentQuestionIndex(0);
    setResults([]);
    setStatus('in_progress');
  }, []);

  const submitAnswer = useCallback((userAnswer: string) => {
    const currentQuestion = questions[currentQuestionIndex];
    if (!currentQuestion) return;

    const newResult: KanjiQuizResult = {
      question: currentQuestion,
      userAnswer,
      isCorrect: userAnswer === currentQuestion.correctAnswer,
    };
    setResults(prev => [...prev, newResult]);
    
    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
      } else {
        setStatus('completed');
      }
    }, 1000); // Wait 1 second before moving to the next question
  }, [currentQuestionIndex, questions]);

  const restartQuiz = useCallback((autoStart: boolean = true) => {
    setStatus('not_started');
    if(autoStart) {
      startQuiz();
    } else {
      setQuestions([]);
      setCurrentQuestionIndex(0);
      setResults([]);
    }
  }, [startQuiz]);
  
  const score = useMemo(() => results.filter(r => r.isCorrect).length, [results]);

  return {
    status,
    startQuiz,
    submitAnswer,
    restartQuiz,
    currentQuestion: questions[currentQuestionIndex],
    currentQuestionIndex,
    totalQuestions: questions.length,
    results,
    score,
    isQuizFinished: status === 'in_progress' && results.length === questions.length,
  };
};