
import React, { useState, useRef, useEffect } from 'react';
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Globe, Flag, Users, TrendingUp, CheckCircle2, XCircle } from "lucide-react";
import { countries, Country } from "@/data/countries";
import { toast } from "sonner";

interface GameBoardProps {
  remainingGuesses: number;
}

interface GuessResult {
  country: Country;
  isCorrect: boolean;
}

export const GameBoard: React.FC<GameBoardProps> = ({ remainingGuesses }) => {
  const [guess, setGuess] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState<Country[]>([]);
  const [previousGuesses, setPreviousGuesses] = useState<GuessResult[]>([]);
  const [targetCountry] = useState(() => {
    const randomIndex = Math.floor(Math.random() * countries.length);
    return countries[randomIndex];
  });
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

    if (isCorrect) {
      toast.success("Congratulations! You found the correct country!");
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
    }).format(gdp * 1000000); // Convert to actual value
  };

  return (
    <div className="flex flex-col items-center w-full max-w-3xl mx-auto space-y-8 animate-fade-in">
      <Card className="w-full p-6 bg-white/50 backdrop-blur-sm border border-gray-100 shadow-sm">
        <div className="flex flex-col space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-800">Guess the Country</h2>
            <span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium">
              {remainingGuesses - previousGuesses.length} guesses left
            </span>
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
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4" />
                  <span>{guess.country.continent}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>{formatPopulation(guess.country.population)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  <span>{formatGDP(guess.country.gdp)}</span>
                </div>
                <div className="flex items-center gap-2">
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
