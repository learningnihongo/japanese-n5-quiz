import React, { useState, useEffect } from 'react';
import { KanjiQuizQuestion } from '../types';

interface KanjiQuizCardProps {
  question: KanjiQuizQuestion;
  onSubmit: (answer: string) => void;
  questionNumber: number;
  totalQuestions: number;
}

const KanjiQuizCard: React.FC<KanjiQuizCardProps> = ({ question, onSubmit, questionNumber, totalQuestions }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const isAnswered = selectedAnswer !== null;

  useEffect(() => {
    setSelectedAnswer(null);
  }, [question]);

  const handleAnswerClick = (answer: string) => {
    if (isAnswered) return;
    setSelectedAnswer(answer);
    onSubmit(answer);
  };

  const getButtonClass = (option: string) => {
    if (!isAnswered) {
      return 'bg-slate-700 hover:bg-indigo-500';
    }
    if (option === question.correctAnswer) {
      return 'bg-green-600 animate-pulse'; // Correct answer
    }
    if (option === selectedAnswer) {
      return 'bg-red-600'; // Incorrectly selected answer
    }
    return 'bg-slate-700 opacity-50'; // Not selected
  };

  const getQuestionText = () => {
    switch (question.questionType) {
      case 'kunyomi': return "ကွန်ယောမိ (ဂျပန်အသံထွက်)";
      case 'onyomi': return "အွန်ယောမိ (တရုတ်အသံထွက်)";
      case 'meaning': return 'မြန်မာအဓိပ္ပာယ်';
    }
  };

  return (
    <div className="w-full p-1 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl shadow-2xl">
      <div className="w-full bg-slate-800 rounded-xl p-6 sm:p-8 flex flex-col justify-between min-h-[550px]">
        <div>
          <div className="flex justify-between items-baseline mb-6">
            <h2 className="text-xl font-bold text-indigo-300">မေးခွန်း {questionNumber}</h2>
            <span className="text-gray-400">{questionNumber} / {totalQuestions}</span>
          </div>

          <div className="text-center bg-slate-900 p-8 rounded-lg min-h-[200px] flex flex-col justify-center items-center mb-8">
            <p className="text-7xl sm:text-9xl font-semibold tracking-wide mb-2 text-white">{question.kanji.kanji}</p>
            <p className="text-lg font-medium text-gray-300">
              ဒီခန်ဂျိရဲ့ <span className="font-bold text-yellow-300">{getQuestionText()}</span> ကဘာလဲ?
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {question.options.map((option) => (
            <button
              key={option}
              onClick={() => handleAnswerClick(option)}
              disabled={isAnswered}
              className={`w-full py-4 px-3 text-white font-bold rounded-lg transition-all text-lg duration-300 ${getButtonClass(option)}`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KanjiQuizCard;