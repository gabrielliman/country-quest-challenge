
export interface Country {
  name: string;
  continent: string;
  population: number;
  gdp: number;
  flagColors: string[];
}

export const countries: Country[] = [
  {
    name: "United States",
    continent: "North America",
    population: 331002651,
    gdp: 21400000,
    flagColors: ["red", "white", "blue"]
  },
  {
    name: "China",
    continent: "Asia",
    population: 1444216107,
    gdp: 14700000,
    flagColors: ["red", "yellow"]
  },
  {
    name: "Japan",
    continent: "Asia",
    population: 125836021,
    gdp: 5100000,
    flagColors: ["red", "white"]
  },
  // ... Adding just a few countries for the example, you can add more
];
