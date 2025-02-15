
import { useState } from 'react';
import { GameBoard } from '@/components/game/GameBoard';
import { useParams, useNavigate } from 'react-router-dom';
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { LayoutDashboard } from 'lucide-react';

const Index = () => {
  const [remainingGuesses, setRemainingGuesses] = useState(6);
  const { mode = 'all' } = useParams();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-end items-center gap-4 mb-8">
          <Button 
            variant="outline"
            size="sm"
            onClick={() => navigate('/')}
            className="flex items-center gap-2"
          >
            <LayoutDashboard className="w-4 h-4" />
            Game Modes
          </Button>
          <ThemeToggle />
        </div>
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-2">
            Country Quest
          </h1>
          <p className="text-lg text-muted-foreground">
            Guess the mystery country in 6 tries or less
          </p>
        </div>
        
        <GameBoard remainingGuesses={remainingGuesses} gameMode={mode} />
      </div>
    </div>
  );
};

export default Index;
