
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ThemeToggle } from "@/components/theme-toggle";
import { useNavigate } from "react-router-dom";
import { Globe, TrendingUp, Map, Users } from "lucide-react";

const gameModes = [
  {
    id: 'all',
    name: 'Global Explorer',
    description: 'Test your knowledge with all countries in the world',
    icon: Globe
  },
  {
    id: 'rich',
    name: 'Top Economies',
    description: 'Challenge yourself with the 50 wealthiest nations',
    icon: TrendingUp
  },
  {
    id: 'large',
    name: 'Giant Countries',
    description: 'Guess among the 50 largest countries by area',
    icon: Map
  },
  {
    id: 'populous',
    name: 'Population Titans',
    description: 'Play with the 50 most populous nations',
    icon: Users
  }
];

const GameModes = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-end mb-4">
          <ThemeToggle />
        </div>
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-2">
            Country Quest
          </h1>
          <p className="text-lg text-muted-foreground">
            Choose your game mode
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {gameModes.map((mode) => {
            const Icon = mode.icon;
            return (
              <Card
                key={mode.id}
                className="p-6 cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => navigate(`/play/${mode.id}`)}
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{mode.name}</h3>
                    <p className="text-muted-foreground">{mode.description}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GameModes;
