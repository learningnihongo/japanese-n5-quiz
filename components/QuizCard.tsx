
import React from 'react';
import { FeedbackState } from '../types';

interface QuizCardProps {
  prompt: React.ReactNode;
  options: string[];
  onAnswerSelect: (option: string) => void;
  feedback: FeedbackState;
  selectedAnswer: string | null;
  correctAnswer: string;
}

const QuizCard: React.FC<QuizCardProps> = ({
  prompt,
  options,
  onAnswerSelect,
  feedback,
  selectedAnswer,
  correctAnswer,
}) => {
  return (
    <div className="w-full max-w-2xl mx-auto p-4 md:p-0">
      <div className="bg-white rounded-2xl card-shadow p-6 md:p-10 min-h-[500px] flex flex-col justify-between">
        
        <div>
          {prompt}
        </div>

        <div className="mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {options.map((option, index) => {
                    const isSelected = option === selectedAnswer;
                    const isCorrectOption = option === correctAnswer;
                    
                    let buttonClass = "w-full text-left p-4 font-bold rounded-xl transition-all duration-200 text-lg disabled:opacity-75 disabled:cursor-not-allowed transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500";

                    if (feedback === 'idle') {
                        buttonClass += " bg-white border-2 border-gray-200 text-gray-700 hover:border-pink-500 hover:text-pink-600 hover:bg-pink-50 hover:-translate-y-1";
                    } else {
                         if (isCorrectOption) {
                            buttonClass += " bg-green-500 border-2 border-green-600 text-white scale-105 shadow-lg shadow-green-500/30";
                         } else if (isSelected) {
                             buttonClass += " bg-red-500 border-2 border-red-600 text-white";
                         } else {
                            buttonClass += " bg-gray-100 border-2 border-gray-200 text-gray-500 opacity-60";
                         }
                    }

                    return (
                        <button
                            key={index}
                            onClick={() => onAnswerSelect(option)}
                            disabled={feedback !== 'idle'}
                            className={buttonClass}
                        >
                            {option}
                        </button>
                    )
                })}
            </div>
        </div>
      </div>
    </div>
  );
};

export default QuizCard;
