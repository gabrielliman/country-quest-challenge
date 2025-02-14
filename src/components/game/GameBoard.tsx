
import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Globe, Flag, Users, TrendingUp } from "lucide-react";

interface GameBoardProps {
  remainingGuesses: number;
}

export const GameBoard: React.FC<GameBoardProps> = ({ remainingGuesses }) => {
  const [guess, setGuess] = useState("");
  
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
          
          <div className="flex gap-4">
            <Input
              type="text"
              placeholder="Enter country name..."
              value={guess}
              onChange={(e) => setGuess(e.target.value)}
              className="flex-1"
            />
            <Button onClick={() => console.log("Guess submitted:", guess)}>
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
