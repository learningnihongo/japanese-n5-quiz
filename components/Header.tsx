
import React from 'react';
import { BookOpenIcon, PuzzlePieceIcon, CharacterIcon } from './icons';
import { ViewMode } from '../types';

interface HeaderProps {
  view: ViewMode;
  onViewChange: (view: ViewMode) => void;
}

const Header: React.FC<HeaderProps> = ({ view, onViewChange }) => {
  return (
    <header className="w-full max-w-4xl mx-auto p-4 md:p-6 text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold text-[#FF007A] mb-2">日本語 N5 クイズ</h1>
      <h2 className="text-lg md:text-xl font-bold text-gray-500 mb-6">Japanese N5 Quiz & Guide</h2>
      
      <div className="grid grid-cols-3 gap-2 mb-6 bg-gray-100 p-1.5 rounded-xl">
          <button
            onClick={() => onViewChange('verbQuiz')}
            className={`flex items-center justify-center gap-2 w-full px-4 py-3 text-base font-bold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-pink-500 ${
              view === 'verbQuiz' ? 'bg-white text-pink-600 shadow-md' : 'bg-transparent hover:bg-white/60 text-gray-600'
            }`}
          >
            <PuzzlePieceIcon className="w-5 h-5" />
            Verb Quiz
          </button>
          <button
            onClick={() => onViewChange('kanjiQuiz')}
            className={`flex items-center justify-center gap-2 w-full px-4 py-3 text-base font-bold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-pink-500 ${
              view === 'kanjiQuiz' ? 'bg-white text-pink-600 shadow-md' : 'bg-transparent hover:bg-white/60 text-gray-600'
            }`}
          >
            <CharacterIcon className="w-5 h-5" />
            Kanji Quiz
          </button>
          <button
            onClick={() => onViewChange('guide')}
            className={`flex items-center justify-center gap-2 w-full px-4 py-3 text-base font-bold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-pink-500 ${
              view === 'guide' ? 'bg-white text-pink-600 shadow-md' : 'bg-transparent hover:bg-white/60 text-gray-600'
            }`}
          >
            <BookOpenIcon className="w-5 h-5" />
            Guidebook
          </button>
      </div>
    </header>
  );
};

export default Header;
