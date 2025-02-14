
import React, { useState, useRef, useEffect } from 'react';
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Globe, Flag, Users, TrendingUp, CheckCircle2, XCircle, HelpCircle } from "lucide-react";
import { countries, Country } from "@/data/countries";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface GameBoardProps {
  remainingGuesses: number;
}

interface GuessResult {
  country: Country;
  isCorrect: boolean;
}

export const GameBoard: React.FC<GameBoardProps> = ({ remainingGuesses: initialGuesses }) => {
  const [guess, setGuess] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState<Country[]>([]);
  const [previousGuesses, setPreviousGuesses] = useState<GuessResult[]>([]);
  const [targetCountry] = useState(() => {
    const randomIndex = Math.floor(Math.random() * countries.length);
    return countries[randomIndex];
  });
  const [showGameOverDialog, setShowGameOverDialog] = useState(false);
  const [remainingGuesses, setRemainingGuesses] = useState(initialGuesses);
  const [hintUsed, setHintUsed] = useState(false);
  const suggestionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (suggestionsRef.current && !suggestionsRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setGuess(value);
    
    if (value.length > 0) {
      const filtered = countries.filter(country => 
        country.name.toLowerCase().includes(value.toLowerCase())
      ).slice(0, 5);
      setSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (countryName: string) => {
    setGuess(countryName);
    setShowSuggestions(false);
  };

  const resetGame = () => {
    window.location.reload();
  };

  const showHint = () => {
    if (remainingGuesses > 3 || hintUsed) return;

    const characteristics = [
      { name: 'Continent', value: targetCountry.continent },
      { name: 'Population', value: formatPopulation(targetCountry.population) },
      { name: 'GDP', value: formatGDP(targetCountry.gdp) },
      { name: 'Flag Colors', value: targetCountry.flagColors.join(', ') }
    ];

    const randomHint = characteristics[Math.floor(Math.random() * characteristics.length)];
    toast.info(`Hint - ${randomHint.name}: ${randomHint.value}`);
    setHintUsed(true);
  };

  const handleSubmitGuess = () => {
    const guessedCountry = countries.find(
      country => country.name.toLowerCase() === guess.toLowerCase()
    );
    
    if (!guessedCountry) {
      toast.error("Please select a valid country from the suggestions");
      return;
    }

    if (previousGuesses.some(g => g.country.name === guessedCountry.name)) {
      toast.error("You've already guessed this country!");
      return;
    }

    const isCorrect = guessedCountry.name === targetCountry.name;
    setPreviousGuesses(prev => [...prev, { country: guessedCountry, isCorrect }]);
    setGuess("");
    setRemainingGuesses(prev => prev - 1);

    if (isCorrect || remainingGuesses <= 1) {
      setShowGameOverDialog(true);
    }
  };

  const formatPopulation = (pop: number) => {
    return new Intl.NumberFormat('en-US', { notation: 'compact' }).format(pop);
  };

  const formatGDP = (gdp: number) => {
    return new Intl.NumberFormat('en-US', { 
      notation: 'compact',
      maximumFractionDigits: 1,
      style: 'currency',
      currency: 'USD'
    }).format(gdp * 1000000);
  };

  const getComparisonColor = (
    guessedValue: any,
    targetValue: any,
    type: 'exact' | 'partial' | 'numeric'
  ) => {
    if (type === 'exact') {
      return guessedValue === targetValue ? 'bg-green-50' : '';
    } else if (type === 'partial') {
      if (Array.isArray(guessedValue) && Array.isArray(targetValue)) {
        const allMatch = guessedValue.length === targetValue.length && 
          guessedValue.every(val => targetValue.includes(val));
        const someMatch = guessedValue.some(val => targetValue.includes(val));
        return allMatch ? 'bg-green-50' : someMatch ? 'bg-yellow-50' : '';
      }
    } else if (type === 'numeric') {
      return guessedValue === targetValue ? 'bg-green-50' : 'bg-yellow-50';
    }
    return '';
  };

  const getNumericComparison = (guessedValue: number, targetValue: number) => {
    if (guessedValue === targetValue) return null;
    // Inverted arrows: arrow points to where the target value is relative to guess
    return guessedValue > targetValue ? '↓' : '↑';
  };

  return (
    <div className="flex flex-col items-center w-full max-w-3xl mx-auto space-y-8 animate-fade-in">
      <Dialog open={showGameOverDialog} onOpenChange={setShowGameOverDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {previousGuesses[previousGuesses.length - 1]?.isCorrect 
                ? "Congratulations!" 
                : "Game Over"}
            </DialogTitle>
            <DialogDescription>
              {previousGuesses[previousGuesses.length - 1]?.isCorrect 
                ? "You've found the correct country!" 
                : `The correct country was ${targetCountry.name}`}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button onClick={resetGame}>New Game</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Card className="w-full p-6 bg-white/50 backdrop-blur-sm border border-gray-100 shadow-sm">
        <div className="flex flex-col space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-800">Guess the Country</h2>
            <div className="flex items-center gap-4">
              <Button 
                variant="outline" 
                size="sm"
                onClick={showHint}
                disabled={remainingGuesses > 3 || hintUsed}
                className="flex items-center gap-2"
              >
                <HelpCircle className="w-4 h-4" />
                Hint
              </Button>
              <span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium">
                {remainingGuesses} guesses left
              </span>
            </div>
          </div>
          
          <div className="flex gap-4 relative">
            <div className="flex-1 relative">
              <Input
                type="text"
                placeholder="Enter country name..."
                value={guess}
                onChange={handleInputChange}
                className="flex-1"
              />
              {showSuggestions && suggestions.length > 0 && (
                <div 
                  ref={suggestionsRef}
                  className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-auto"
                >
                  {suggestions.map((country) => (
                    <button
                      key={country.name}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
                      onClick={() => handleSuggestionClick(country.name)}
                    >
                      {country.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <Button onClick={handleSubmitGuess}>
              Guess
            </Button>
          </div>
        </div>
      </Card>

      <div className="w-full space-y-3">
        {previousGuesses.map((guess, index) => (
          <Card 
            key={index}
            className={`p-4 transition-colors ${
              guess.isCorrect ? 'bg-green-50' : 'bg-white'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {guess.isCorrect ? (
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                ) : (
                  <XCircle className="w-5 h-5 text-red-500" />
                )}
                <span className="font-semibold">{guess.country.name}</span>
              </div>
              <div className="flex items-center gap-6 text-sm text-gray-600">
                <div className={`flex items-center gap-2 px-2 py-1 rounded ${
                  getComparisonColor(guess.country.continent, targetCountry.continent, 'exact')
                }`}>
                  <Globe className="w-4 h-4" />
                  <span>{guess.country.continent}</span>
                </div>
                <div className={`flex items-center gap-2 px-2 py-1 rounded ${
                  getComparisonColor(guess.country.population, targetCountry.population, 'numeric')
                }`}>
                  <Users className="w-4 h-4" />
                  <span>{formatPopulation(guess.country.population)}</span>
                  <span className="text-xs font-medium">
                    {getNumericComparison(guess.country.population, targetCountry.population)}
                  </span>
                </div>
                <div className={`flex items-center gap-2 px-2 py-1 rounded ${
                  getComparisonColor(guess.country.gdp, targetCountry.gdp, 'numeric')
                }`}>
                  <TrendingUp className="w-4 h-4" />
                  <span>{formatGDP(guess.country.gdp)}</span>
                  <span className="text-xs font-medium">
                    {getNumericComparison(guess.country.gdp, targetCountry.gdp)}
                  </span>
                </div>
                <div className={`flex items-center gap-2 px-2 py-1 rounded ${
                  getComparisonColor(guess.country.flagColors, targetCountry.flagColors, 'partial')
                }`}>
                  <Flag className="w-4 h-4" />
                  <div className="flex gap-1">
                    {guess.country.flagColors.map((color, i) => (
                      <div 
                        key={i}
                        className="w-4 h-4 rounded-full border border-gray-200"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
