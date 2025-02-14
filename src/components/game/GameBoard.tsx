
import React, { useState, useRef, useEffect } from 'react';
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Globe, Flag, Users, TrendingUp } from "lucide-react";
import { countries, Country } from "@/data/countries";

interface GameBoardProps {
  remainingGuesses: number;
}

export const GameBoard: React.FC<GameBoardProps> = ({ remainingGuesses }) => {
  const [guess, setGuess] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState<Country[]>([]);
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
      ).slice(0, 5); // Show only first 5 matches
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
      console.log("Invalid country name");
      return;
    }

    console.log("Submitted guess:", guessedCountry);
    setGuess("");
  };

  return (
    <div className="flex flex-col items-center w-full max-w-3xl mx-auto space-y-8 animate-fade-in">
      <Card className="w-full p-6 bg-white/50 backdrop-blur-sm border border-gray-100 shadow-sm">
        <div className="flex flex-col space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-800">Guess the Country</h2>
            <span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium">
              {remainingGuesses} guesses left
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        <Card className="p-4 hover:shadow-md transition-shadow">
          <div className="flex items-center space-x-3">
            <Globe className="w-5 h-5 text-gray-600" />
            <div>
              <p className="text-sm font-medium text-gray-600">Continent</p>
              <p className="text-lg font-semibold">-</p>
            </div>
          </div>
        </Card>

        <Card className="p-4 hover:shadow-md transition-shadow">
          <div className="flex items-center space-x-3">
            <Flag className="w-5 h-5 text-gray-600" />
            <div>
              <p className="text-sm font-medium text-gray-600">Flag Colors</p>
              <p className="text-lg font-semibold">-</p>
            </div>
          </div>
        </Card>

        <Card className="p-4 hover:shadow-md transition-shadow">
          <div className="flex items-center space-x-3">
            <Users className="w-5 h-5 text-gray-600" />
            <div>
              <p className="text-sm font-medium text-gray-600">Population</p>
              <p className="text-lg font-semibold">-</p>
            </div>
          </div>
        </Card>

        <Card className="p-4 hover:shadow-md transition-shadow">
          <div className="flex items-center space-x-3">
            <TrendingUp className="w-5 h-5 text-gray-600" />
            <div>
              <p className="text-sm font-medium text-gray-600">GDP</p>
              <p className="text-lg font-semibold">-</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
