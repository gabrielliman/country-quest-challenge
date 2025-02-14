
import { useState } from 'react';
import { GameBoard } from '@/components/game/GameBoard';

const Index = () => {
  const [remainingGuesses, setRemainingGuesses] = useState(6);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Country Quest
          </h1>
          <p className="text-lg text-gray-600">
            Guess the mystery country in 6 tries or less
          </p>
        </div>
        
        <GameBoard remainingGuesses={remainingGuesses} />
      </div>
    </div>
  );
};

export default Index;
