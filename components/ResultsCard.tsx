import React from 'react';
import { VerbQuizResult, KanjiQuizResult } from '../types';

type QuizResult = VerbQuizResult | KanjiQuizResult;
type QuizType = 'verb' | 'kanji';

interface ResultsCardProps {
  score: number;
  totalQuestions: number;
  results: QuizResult[];
  onRestart: () => void;
  quizType: QuizType;
}

const ResultsCard: React.FC<ResultsCardProps> = ({ score, totalQuestions, results, onRestart, quizType }) => {
  const incorrectAnswers = results.filter(r => !r.isCorrect);
  const percentage = totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 0;

  const getPerformanceColor = () => {
    if (percentage >= 80) return 'text-green-400';
    if (percentage >= 50) return 'text-yellow-400';
    return 'text-red-400';
  };
  
  const getGradientClass = () => {
    if (percentage >= 80) return 'from-green-500 to-teal-500';
    if (percentage >= 50) return 'from-yellow-500 to-orange-500';
    return 'from-red-500 to-rose-500';
  }

  const renderReviewItem = (result: QuizResult, index: number) => {
    if (quizType === 'verb' && 'verb' in result.question) {
      const verbResult = result as VerbQuizResult;
      const { question } = verbResult;

      return (
        <li key={index} className="p-4 bg-slate-800 rounded-md">
          <p className="text-sm text-gray-400">
            <span className="font-bold text-white">{question.verb.dictionary}</span> ({question.formToGuess} form) အတွက်:
          </p>
          <p className="mt-1">
            <span className="text-green-400 ml-3">✓ အဖြေမှန်: {question.correctAnswer}</span>
          </p>
        </li>
      );
    }
    
    if (quizType === 'kanji' && 'kanji' in result.question) {
      const { question, userAnswer } = result as KanjiQuizResult;
       const getQuestionText = () => {
        switch (question.questionType) {
          case 'kunyomi': return "ကွန်ယောမိ";
          case 'onyomi': return "အွန်ယောမိ";
          case 'meaning': return 'အဓိပ္ပာယ်';
        }
      };
      return (
        <li key={index} className="p-3 bg-slate-800 rounded-md">
          <p className="text-sm text-gray-400">
            <span className="font-bold text-white text-lg">{question.kanji.kanji}</span> ({getQuestionText()}) အတွက်:
          </p>
           <p className="mt-1"><span className="text-red-400 ml-3">✗ သင်ဖြေဆိုခဲ့သည်: {userAnswer}</span></p>
          <p className="mt-1"><span className="text-green-400 ml-3">✓ အဖြေမှန်: {question.correctAnswer}</span></p>
        </li>
      );
    }
    return null;
  };

  return (
    <div className="w-full max-w-2xl p-1 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl shadow-2xl">
      <div className="w-full bg-slate-800 rounded-xl p-8">
        <h2 className="text-3xl font-bold text-center text-cyan-300 mb-2">Quiz ပြီးပါပြီ!</h2>
        <p className="text-center text-xl text-gray-300 mb-6">သင်၏ရမှတ်</p>
        
        <div className={`text-center mb-8 p-6 rounded-lg bg-gradient-to-br ${getGradientClass()}`}>
          <span className={`text-6xl font-bold text-white`}>{score}</span>
          <span className="text-3xl text-white/80"> / {totalQuestions}</span>
          <p className={`text-2xl font-semibold mt-2 text-white`}>{percentage}%</p>
        </div>

        {incorrectAnswers.length > 0 && (
          <div className="mb-8">
            <h3 className="text-xl font-bold text-yellow-300 mb-4">သင်၏အမှားများကိုပြန်လည်စစ်ဆေးပါ</h3>
            <ul className="space-y-3 max-h-80 overflow-y-auto bg-slate-900/70 p-4 rounded-lg">
              {incorrectAnswers.map(renderReviewItem)}
            </ul>
          </div>
        )}

        <button
          onClick={onRestart}
          className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded-lg text-lg shadow-lg transition-transform transform hover:scale-105"
        >
          ထပ်ကြိုးစားပါ
        </button>
      </div>
    </div>
  );
};

export default ResultsCard;