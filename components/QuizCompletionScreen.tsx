import React, { useEffect, useRef } from 'react';

interface QuizCompletionScreenProps {
    score: number;
    totalQuestions: number;
    onRestart: () => void;
}

const QuizCompletionScreen: React.FC<QuizCompletionScreenProps> = ({ score, totalQuestions, onRestart }) => {
    useEffect(() => {
        if ((window as any).confetti) {
            (window as any).confetti({
                particleCount: 200,
                spread: 120,
                origin: { y: 0.6 },
                colors: ['#FF007A', '#FFD600', '#00C4FF']
            });
        }
    }, []);

    const percentage = Math.round((score / totalQuestions) * 100);
    let message = "Good effort! Keep practicing!";
    if (percentage > 95) {
        message = "素晴らしい！Excellent Work!";
    } else if (percentage > 80) {
        message = "Great job! You're getting there!";
    } else if (percentage > 60) {
        message = "Well done! Keep reviewing!";
    }

    return (
        <div className="w-full max-w-2xl mx-auto p-4 md:p-6 text-center text-gray-800 animate-pop-in">
            <div className="bg-white rounded-2xl card-shadow p-8">
               
                <h2 className="text-4xl md:text-5xl font-extrabold text-pink-600 mb-4">Quiz Complete!</h2>
                <p className="text-xl md:text-2xl mb-6 text-gray-600">{message}</p>
                <div className="bg-gray-50 rounded-xl p-6 my-8 border border-gray-200">
                    <p className="text-lg text-gray-500 font-bold">Your Final Score</p>
                    <p className="text-6xl font-extrabold text-gray-800 my-2">
                        {score} <span className="text-4xl text-gray-400">/ {totalQuestions}</span>
                    p>
                    <p className="text-3xl font-bold text-green-500">({percentage}%)</p>
                </div>
                <button
                    onClick={onRestart}
                    className="w-full max-w-sm mx-auto px-6 py-4 bg-pink-600 hover:bg-pink-700 text-white font-bold rounded-lg transition duration-300 text-xl shadow-lg shadow-pink-500/30 transform hover:scale-105"
                >
                    Play Again
                </button>
            </div>
        </div>
    );
};

export default QuizCompletionScreen;