import React from 'react';

interface HeaderProps {
  showHomeButton: boolean;
  onGoHome: () => void;
}

const Header: React.FC<HeaderProps> = ({ showHomeButton, onGoHome }) => {
  return (
    <header className="w-full max-w-4xl py-6 text-center relative flex items-center justify-center">
      {showHomeButton && (
        <button
          onClick={onGoHome}
          className="absolute left-0 bg-white/10 hover:bg-white/20 text-gray-200 font-semibold py-2 px-4 rounded-lg transition-colors"
        >
          ပင်မစာမျက်နှာ
        </button>
      )}
      <h1 className="text-xl font-bold tracking-widest text-gray-400 uppercase">ဂျပန် QUIZ</h1>
    </header>
  );
};

export default Header;