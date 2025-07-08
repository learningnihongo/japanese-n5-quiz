import React, { useState } from 'react';
import { useQuiz } from './hooks/useQuiz';
import { useKanjiQuiz } from './hooks/useKanjiQuiz';
import QuizCard from './components/QuizCard';
import KanjiQuizCard from './components/KanjiQuizCard';
import ResultsCard from './components/ResultsCard';
import Header from './components/Header';
import Footer from './components/Footer';
import VerbGuide from './components/VerbGuide';
import ConjugationGuide from './components/ConjugationGuide';
import { QUIZ_LENGTH } from './constants';
import { kanjiData } from './data/kanji';
import { QuizMode } from './types';

const ModeSelectionCard: React.FC<{ title: string; description: string; buttonText: string; onClick: () => void; className: string }> = ({ title, description, buttonText, onClick, className }) => (
  <div className={`rounded-xl shadow-2xl p-6 flex flex-col items-center text-center transition-all duration-300 transform hover:-translate-y-2 ${className}`}>
    <h3 className="text-2xl font-bold mb-3 text-white">{title}</h3>
    <p className="text-white/80 mb-6 flex-grow">{description}</p>
    <button onClick={onClick} className="w-full bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-6 rounded-lg text-lg shadow-lg transition-colors">
      {buttonText}
    </button>
  </div>
);

const ModeSelectionScreen: React.FC<{ onSelect: (mode: QuizMode) => void }> = ({ onSelect }) => (
  <div className="w-full">
    <div className="text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-3">ဂျပန်စာ Quiz မှကြိုဆိုပါသည်</h2>
        <p className="text-lg text-gray-300">သင်၏အရည်အချင်းကိုစစ်ဆေးရန် Quiz (သို့) လေ့လာရန် Guide အမျိုးအစားတစ်ခုကိုရွေးချယ်ပါ</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <ModeSelectionCard 
        title="Verb Conjugation Quiz"
        description="ကြိယာပုံစံပြောင်းခြင်း (Masu, Te, Nai) ကိုလေ့ကျင့်ပါ"
        buttonText="Verb Quiz စတင်ရန်"
        onClick={() => onSelect('verb')}
        className="bg-gradient-to-br from-cyan-500 to-blue-600"
      />
      <ModeSelectionCard 
        title="Kanji Quiz"
        description="ခန်ဂျိ၏အဓိပ္ပာယ်များနှင့်အသံထွက်များကိုစစ်ဆေးပါ"
        buttonText="Kanji Quiz စတင်ရန်"
        onClick={() => onSelect('kanji')}
        className="bg-gradient-to-br from-purple-500 to-indigo-600"
      />
       <ModeSelectionCard 
        title="ပုံစံပြောင်းနည်း လမ်းညွှန်"
        description="ကြိယာများ၏ပုံစံပြောင်းနည်းများကို ရှာဖွေကြည့်ရှုပါ"
        buttonText="လမ်းညွှန်ကိုကြည့်ရန်"
        onClick={() => onSelect('guide')}
        className="bg-gradient-to-br from-green-500 to-teal-600"
      />
       <ModeSelectionCard 
        title="ပုံစံပြောင်းနည်း အသေးစိတ်"
        description="ကြိယာ Group များခွဲခြားပုံနှင့် စည်းမျဉ်းများကို အသေးစိတ်လေ့လာပါ"
        buttonText="အသေးစိတ်ကြည့်ရန်"
        onClick={() => onSelect('conjugation_guide')}
        className="bg-gradient-to-br from-amber-500 to-orange-600"
      />
    </div>
  </div>
);


const App: React.FC = () => {
  const [quizMode, setQuizMode] = useState<QuizMode>('none');
  
  const verbQuiz = useQuiz();
  const kanjiQuiz = useKanjiQuiz();

  const handleGoHome = () => {
    verbQuiz.restartQuiz(false); // don't auto-start
    kanjiQuiz.restartQuiz(false); // don't auto-start
    setQuizMode('none');
  };
  
  const handleRestart = (quizType: 'verb' | 'kanji') => {
      if (quizType === 'verb') {
          verbQuiz.restartQuiz(true);
      } else {
          kanjiQuiz.restartQuiz(true);
      }
  }

  const renderContent = () => {
    switch (quizMode) {
      case 'verb': {
        const { status, startQuiz, submitAnswer, currentQuestion, currentQuestionIndex, totalQuestions, results, score } = verbQuiz;
        if (status === 'not_started') {
          return (
            <div className="text-center">
              <h2 className="text-4xl font-bold text-cyan-300 mb-4">ဂျပန်ကြိယာ Quiz</h2>
              <p className="text-lg text-gray-300 mb-8">Masu, Te, နှင့် Nai ပုံစံများအတွက်သင်၏ဗဟုသုတကိုစစ်ဆေးပါ။<br />Dictionary ပုံစံနှင့်၎င်း၏အဓိပ္ပာယ်ကိုပေးပါမည်။</p>
              <button onClick={startQuiz} className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-4 px-8 rounded-lg text-xl shadow-lg transition-transform transform hover:scale-105">Quiz စတင်ရန် ({QUIZ_LENGTH} မေးခွန်းများ)</button>
            </div>
          );
        }
        if (status === 'in_progress' && currentQuestion) {
          return <QuizCard key={currentQuestionIndex} question={currentQuestion} onSubmit={submitAnswer} questionNumber={currentQuestionIndex + 1} totalQuestions={totalQuestions} />;
        }
        if (status === 'completed') {
          return <ResultsCard score={score} totalQuestions={totalQuestions} results={results} onRestart={() => handleRestart('verb')} quizType="verb" />;
        }
        break;
      }
      case 'kanji': {
        const { status, startQuiz, submitAnswer, currentQuestion, currentQuestionIndex, totalQuestions, results, score } = kanjiQuiz;
         if (status === 'not_started') {
          return (
            <div className="text-center">
              <h2 className="text-4xl font-bold text-indigo-400 mb-4">ဂျပန် ခန်ဂျိ Quiz</h2>
              <p className="text-lg text-gray-300 mb-8">ခန်ဂျိ၏အဓိပ္ပာယ်များနှင့်အသံထွက်များအတွက်သင်၏ဗဟုသုတကိုစစ်ဆေးပါ။<br />ခန်ဂျိတစ်ခုနှင့်ရွေးချယ်စရာများပေးပါမည်။</p>
              <button onClick={startQuiz} className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-4 px-8 rounded-lg text-xl shadow-lg transition-transform transform hover:scale-105">Quiz စတင်ရန် ({kanjiData.length} မေးခွန်းများ)</button>
            </div>
          );
        }
        if (status === 'in_progress' && currentQuestion) {
          return <KanjiQuizCard key={currentQuestionIndex} question={currentQuestion} onSubmit={submitAnswer} questionNumber={currentQuestionIndex + 1} totalQuestions={totalQuestions} />;
        }
        if (status === 'completed') {
          return <ResultsCard score={score} totalQuestions={totalQuestions} results={results} onRestart={() => handleRestart('kanji')} quizType="kanji" />;
        }
        break;
      }
      case 'guide':
        return <VerbGuide />;
      case 'conjugation_guide':
        return <ConjugationGuide />;
      case 'none':
      default:
        return <ModeSelectionScreen onSelect={(mode) => setQuizMode(mode)} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white flex flex-col items-center p-4 selection:bg-cyan-300 selection:text-cyan-900">
      <Header showHomeButton={quizMode !== 'none'} onGoHome={handleGoHome} />
      <main className="w-full max-w-4xl flex-grow flex items-center justify-center">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default App;