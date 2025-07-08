
import React, { useState, useEffect, useCallback } from 'react';
import Header from './components/Header';
import QuizCard from './components/QuizCard';
import Guidebook from './components/Guidebook';
import QuizCompletionScreen from './components/QuizCompletionScreen';
import { verbs, getShuffledIndices as getShuffledVerbIndices } from './services/verbData';
import { kanjiData, getShuffledKanjiIndices } from './services/kanjiData';
import { Verb, VerbQuizMode, Kanji, KanjiQuizMode, FeedbackState, ViewMode } from './types';

const verbQuizModes: VerbQuizMode[] = ['te', 'nai', 'dictionary', 'masu'];
const kanjiQuizModes: KanjiQuizMode[] = ['reading', 'meaning'];

const App: React.FC = () => {
  const [view, setView] = useState<ViewMode>('verbQuiz');
  
  // Common State
  const [isQuizComplete, setIsQuizComplete] = useState(false);
  const [score, setScore] = useState(0);
  const [options, setOptions] = useState<string[]>([]);
  const [feedback, setFeedback] = useState<FeedbackState>('idle');
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  
  // Verb Quiz State
  const [shuffledVerbIndices, setShuffledVerbIndices] = useState<number[]>([]);
  const [currentVerbIndex, setCurrentVerbIndex] = useState(0);
  const [currentVerbQuestion, setCurrentVerbQuestion] = useState<{ verb: Verb, quizMode: VerbQuizMode } | null>(null);

  // Kanji Quiz State
  const [shuffledKanjiIndices, setShuffledKanjiIndices] = useState<number[]>([]);
  const [currentKanjiIndex, setCurrentKanjiIndex] = useState(0);
  const [currentKanjiQuestion, setCurrentKanjiQuestion] = useState<{ kanji: Kanji, quizMode: KanjiQuizMode } | null>(null);

  // --- Quiz Logic ---

  const generateNewVerbQuestion = useCallback((index: number, indices: number[]) => {
    if (indices.length > 0) {
      const verb = verbs[indices[index]];
      const randomQuizMode = verbQuizModes[Math.floor(Math.random() * verbQuizModes.length)];
      setCurrentVerbQuestion({ verb, quizMode: randomQuizMode });

      const correctAnswer = verb[randomQuizMode === 'dictionary' ? 'dictionaryForm' : `${randomQuizMode}Form`];
      
      const distractors: string[] = [];
      const usedVerbIds = new Set([verb.id]);
      
      while (distractors.length < 3) {
          const randomVerbIndex = Math.floor(Math.random() * verbs.length);
          const distractorVerb = verbs[randomVerbIndex];
          if (!usedVerbIds.has(distractorVerb.id)) {
              const distractorAnswer = distractorVerb[randomQuizMode === 'dictionary' ? 'dictionaryForm' : `${randomQuizMode}Form`];
              if (distractorAnswer !== correctAnswer && !distractors.includes(distractorAnswer)) {
                  distractors.push(distractorAnswer);
                  usedVerbIds.add(distractorVerb.id);
              }
          }
      }
      
      const allOptions = [correctAnswer, ...distractors].sort(() => Math.random() - 0.5);
      setOptions(allOptions);
      setFeedback('idle');
      setSelectedAnswer(null);
    }
  }, []);

  const generateNewKanjiQuestion = useCallback((index: number, indices: number[]) => {
    if (indices.length > 0) {
      const kanji = kanjiData[indices[index]];
      const randomQuizMode = kanjiQuizModes[Math.floor(Math.random() * kanjiQuizModes.length)];
      setCurrentKanjiQuestion({ kanji, quizMode: randomQuizMode });

      const correctAnswer = kanji[randomQuizMode];
      
      const distractors: string[] = [];
      const usedKanjiIds = new Set([kanji.id]);
      
      while (distractors.length < 3) {
          const randomKanjiIndex = Math.floor(Math.random() * kanjiData.length);
          const distractorKanji = kanjiData[randomKanjiIndex];
          if (!usedKanjiIds.has(distractorKanji.id)) {
              const distractorAnswer = distractorKanji[randomQuizMode];
              if (distractorAnswer !== correctAnswer && !distractors.includes(distractorAnswer)) {
                  distractors.push(distractorAnswer);
                  usedKanjiIds.add(distractorKanji.id);
              }
          }
      }
      
      const allOptions = [correctAnswer, ...distractors].sort(() => Math.random() - 0.5);
      setOptions(allOptions);
      setFeedback('idle');
      setSelectedAnswer(null);
    }
  }, []);

  const startNewQuiz = useCallback(() => {
    setScore(0);
    setIsQuizComplete(false);
    if (view === 'verbQuiz') {
      const newIndices = getShuffledVerbIndices();
      setShuffledVerbIndices(newIndices);
      setCurrentVerbIndex(0);
      generateNewVerbQuestion(0, newIndices);
    } else if (view === 'kanjiQuiz') {
      const newIndices = getShuffledKanjiIndices();
      setShuffledKanjiIndices(newIndices);
      setCurrentKanjiIndex(0);
      generateNewKanjiQuestion(0, newIndices);
    }
  }, [view, generateNewVerbQuestion, generateNewKanjiQuestion]);

  useEffect(() => {
    startNewQuiz();
  }, [view, startNewQuiz]);

  const handleAnswerSelection = (selectedOption: string) => {
    if (feedback !== 'idle' || (!currentVerbQuestion && !currentKanjiQuestion)) return;

    let correctAnswer = '';
    let isCorrect = false;

    if (view === 'verbQuiz' && currentVerbQuestion) {
        correctAnswer = currentVerbQuestion.verb[currentVerbQuestion.quizMode === 'dictionary' ? 'dictionaryForm' : `${currentVerbQuestion.quizMode}Form`];
    } else if (view === 'kanjiQuiz' && currentKanjiQuestion) {
        correctAnswer = currentKanjiQuestion.kanji[currentKanjiQuestion.quizMode];
    }
    
    isCorrect = selectedOption === correctAnswer;
    setSelectedAnswer(selectedOption);

    if (isCorrect) {
        setScore(prev => prev + 1);
        setFeedback('correct');
    } else {
        setFeedback('incorrect');
    }

    setTimeout(() => {
      if (view === 'verbQuiz') {
        if (currentVerbIndex < shuffledVerbIndices.length - 1) {
            const nextIndex = currentVerbIndex + 1;
            setCurrentVerbIndex(nextIndex);
            generateNewVerbQuestion(nextIndex, shuffledVerbIndices);
        } else {
            setIsQuizComplete(true);
        }
      } else if (view === 'kanjiQuiz') {
         if (currentKanjiIndex < shuffledKanjiIndices.length - 1) {
            const nextIndex = currentKanjiIndex + 1;
            setCurrentKanjiIndex(nextIndex);
            generateNewKanjiQuestion(nextIndex, shuffledKanjiIndices);
        } else {
            setIsQuizComplete(true);
        }
      }
    }, 1500);
  };
  
  const getQuizPrompt = (): React.ReactNode => {
    if (view === 'verbQuiz' && currentVerbQuestion) {
        const { verb, quizMode } = currentVerbQuestion;
        const prompts: Record<VerbQuizMode, string> = { te: "て形", nai: "ない形", dictionary: "辞書形", masu: "ます形" };
        return (
            <div className="text-center">
                <p className="text-4xl md:text-5xl text-gray-800 font-bold mb-3" lang="my">{verb.burmese}</p>
                <p className="text-lg md:text-xl text-gray-500">
                    <span className="font-bold text-pink-600">{prompts[quizMode]}</span> က ဘာဖြစ်မလဲ?
                </p>
            </div>
        );
    }
    if (view === 'kanjiQuiz' && currentKanjiQuestion) {
      const { kanji, quizMode } = currentKanjiQuestion;
      const baseText = quizMode === 'reading' ? kanji.burmese : kanji.reading;
      const promptText = quizMode === 'reading' ? 'ရဲ့ ခန်ဂျิ က ဘာဖြစ်မလဲ?' : 'ရဲ့ အဓိပ္ပါယ် က ဘာဖြစ်မလဲ?';

      return (
          <div className="text-center">
              <p className="text-4xl md:text-5xl text-gray-800 font-bold mb-3" lang="my">{baseText}</p>
              <p className="text-lg md:text-xl text-gray-500">
                  <span className="font-bold text-pink-600">{quizMode === 'reading' ? kanji.kanji : kanji.kanji}</span> {promptText}
              </p>
          </div>
      );
    }
    return null;
  }

  const renderContent = () => {
    const isQuizView = view === 'verbQuiz' || view === 'kanjiQuiz';
    const totalQuestions = view === 'verbQuiz' ? verbs.length : kanjiData.length;
    const currentIndex = view === 'verbQuiz' ? currentVerbIndex : currentKanjiIndex;
    const currentQuestionData = view === 'verbQuiz' ? currentVerbQuestion : currentKanjiQuestion;
    
    let correctAnswer = '';
    if (isQuizView && currentQuestionData) {
        if (view === 'verbQuiz' && currentVerbQuestion) {
            correctAnswer = currentVerbQuestion.verb[currentVerbQuestion.quizMode === 'dictionary' ? 'dictionaryForm' : `${currentVerbQuestion.quizMode}Form`];
        } else if (view === 'kanjiQuiz' && currentKanjiQuestion) {
            correctAnswer = currentKanjiQuestion.kanji[currentKanjiQuestion.quizMode];
        }
    }

    if (view === 'guide') {
      return <Guidebook />;
    }

    if (isQuizComplete) {
      return <QuizCompletionScreen score={score} totalQuestions={totalQuestions} onRestart={startNewQuiz} />;
    }

    if (!currentQuestionData) {
      return <div className="text-center text-gray-500 text-2xl">Loading Quiz...</div>;
    }

    return (
      <div className="w-full animate-pop-in">
        <div className="text-xl font-bold text-gray-700 mb-4 text-center">
            Score: <span className="text-pink-600 font-extrabold">{score}</span> / {totalQuestions}
        </div>
        <div className="text-center text-gray-500 font-bold mb-4">Question: {currentIndex + 1} / {totalQuestions}</div>
        <QuizCard
          prompt={getQuizPrompt()}
          options={options}
          feedback={feedback}
          selectedAnswer={selectedAnswer}
          correctAnswer={correctAnswer}
          onAnswerSelect={handleAnswerSelection}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen font-sans">
        <Header 
          view={view}
          onViewChange={(newView) => setView(newView)}
        />
        <main className="container mx-auto flex flex-col items-center justify-center flex-grow px-4 pb-8">
            {renderContent()}
        </main>
    </div>
  );
};

export default App;
