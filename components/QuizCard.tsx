import React, { useState, useEffect } from 'react';
import { QuizQuestion } from '../types';

interface QuizCardProps {
  question: QuizQuestion;
  onSubmit: (wasCorrect: boolean) => void;
  questionNumber: number;
  totalQuestions: number;
}

const QuizCard: React.FC<QuizCardProps> = ({ question, onSubmit, questionNumber, totalQuestions }) => {
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);

  useEffect(() => {
    setIsAnswerVisible(false);
  }, [question]);

  const handleShowAnswer = () => {
    setIsAnswerVisible(true);
  };

  const handleSelfAssessment = (wasCorrect: boolean) => {
    onSubmit(wasCorrect);
  };

  return (
    <div className="w-full p-1 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl shadow-2xl">
      <div className="w-full bg-slate-800 rounded-xl p-6 sm:p-8 flex flex-col justify-between min-h-[480px]">
        <div>
          <div className="flex justify-between items-baseline mb-6">
            <h2 className="text-xl font-bold text-cyan-300">မေးခွန်း {questionNumber}</h2>
            <span className="text-gray-400">{questionNumber} / {totalQuestions}</span>
          </div>

          <div className="text-center bg-slate-900 p-6 sm:p-8 rounded-lg min-h-[250px] flex flex-col justify-center items-center">
            <p className="text-gray-400 text-sm">Dictionary ပုံစံ</p>
            <p className="text-4xl sm:text-5xl font-semibold tracking-wide mb-2 text-white">{question.verb.dictionary}</p>
            <p className="text-gray-400 mb-4">{question.verb.burmese}</p>
            <p className="text-lg font-medium text-gray-300">
              <span className="font-bold text-yellow-300 uppercase">{question.formToGuess}</span> ပုံစံကဘာလဲ?
            </p>

            <div className="h-24 mt-4 flex items-center justify-center">
              {isAnswerVisible && (
                <div className="transition-opacity duration-500" style={{ opacity: 1 }}>
                  <p className="text-3xl sm:text-4xl font-bold text-green-400">{question.correctAnswer}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-8">
          {!isAnswerVisible ? (
            <button
              onClick={handleShowAnswer}
              className="w-full py-4 px-6 bg-cyan-500 text-white font-bold rounded-lg hover:bg-cyan-600 transition-all shadow-lg transform hover:scale-105"
            >
              အဖြေပြပါ
            </button>
          ) : (
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => handleSelfAssessment(false)}
                className="w-full sm:w-1/2 py-4 px-6 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-all shadow-lg transform hover:scale-105"
              >
               မှားတယ်
              </button>
              <button
                onClick={() => handleSelfAssessment(true)}
                className="w-full sm:w-1/2 py-4 px-6 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition-all shadow-lg transform hover:scale-105"
              >
                မှန်တယ်
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizCard;