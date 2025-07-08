import { useState, useCallback, useMemo } from 'react';
import { verbs } from '../data/verbs';
import { QuizQuestion, VerbQuizResult, QuizStatus, FormType } from '../types';
import { QUIZ_LENGTH } from '../constants';

const shuffleArray = <T,>(array: T[]): T[] => {
  return [...array].sort(() => Math.random() - 0.5);
};

export const useQuiz = () => {
  const [status, setStatus] = useState<QuizStatus>('not_started');
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [results, setResults] = useState<VerbQuizResult[]>([]);

  const startQuiz = useCallback(() => {
    const shuffledVerbs = shuffleArray(verbs).slice(0, QUIZ_LENGTH);
    const formsToQuiz: Exclude<FormType, 'dictionary'>[] = ['te', 'masu', 'nai'];

    const generatedQuestions = shuffledVerbs.map((verb): QuizQuestion => {
      const formToGuess = shuffleArray(formsToQuiz)[0];
      return {
        verb,
        formToGuess,
        correctAnswer: verb[formToGuess],
      };
    });

    setQuestions(generatedQuestions);
    setCurrentQuestionIndex(0);
    setResults([]);
    setStatus('in_progress');
  }, []);

  const submitAnswer = useCallback((isCorrect: boolean) => {
    const currentQuestion = questions[currentQuestionIndex];
    if (!currentQuestion) return;

    const newResult: VerbQuizResult = {
      question: currentQuestion,
      isCorrect,
    };
    setResults(prev => [...prev, newResult]);
    
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setStatus('completed');
    }
  }, [currentQuestionIndex, questions]);


  const restartQuiz = useCallback((autoStart: boolean = true) => {
    setStatus('not_started');
    if (autoStart) {
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
  };
};