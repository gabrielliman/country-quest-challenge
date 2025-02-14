
export interface Country {
  name: string;
  continent: string;
  population: number;
  gdp: number;
  flagColors: string[];
}

export const countries: Country[] = [
  {
      "name": "United States",
      "continent": "North America",
      "population": 331002651,
      "gdp": 21400000,
      "flagColors": [
          "red",
          "white",
          "blue"
      ]
  },
  {
      "name": "China",
      "continent": "Asia",
      "population": 1444216107,
      "gdp": 14700000,
      "flagColors": [
          "red",
          "yellow"
      ]
  },
  {
      "name": "Japan",
      "continent": "Asia",
      "population": 125836021,
      "gdp": 5100000,
      "flagColors": [
          "red",
          "white"
      ]
  },
  {
      "name": "Germany",
      "continent": "Europe",
      "population": 83166711,
      "gdp": 3840000,
      "flagColors": [
          "black",
          "red",
          "yellow"
      ]
  },
  {
      "name": "Brazil",
      "continent": "South America",
      "population": 213993437,
      "gdp": 1440000,
      "flagColors": [
          "green",
          "yellow",
          "blue",
          "white"
      ]
  },
  {
      "name": "India",
      "continent": "Asia",
      "population": 1393409038,
      "gdp": 2875000,
      "flagColors": [
          "orange",
          "white",
          "green",
          "blue"
      ]
  },
  {
      "name": "United Kingdom",
      "continent": "Europe",
      "population": 68207114,
      "gdp": 2827000,
      "flagColors": [
          "red",
          "white",
          "blue"
      ]
  },
  {
      "name": "France",
      "continent": "Europe",
      "population": 67413000,
      "gdp": 2716000,
      "flagColors": [
          "blue",
          "white",
          "red"
      ]
  },
  {
      "name": "Australia",
      "continent": "Oceania",
      "population": 25687041,
      "gdp": 1331000,
      "flagColors": [
          "blue",
          "white",
          "red"
      ]
  },
  {
      "name": "South Africa",
      "continent": "Africa",
      "population": 59308690,
      "gdp": 351000,
      "flagColors": [
          "green",
          "yellow",
          "black",
          "white",
          "red",
          "blue"
      ]
  },
  {
      "name": "Mexico",
      "continent": "North America",
      "population": 126014024,
      "gdp": 1221000,
      "flagColors": [
          "green",
          "white",
          "red"
      ]
  },
  {
      "name": "Russia",
      "continent": "Europe/Asia",
      "population": 145912025,
      "gdp": 1487000,
      "flagColors": [
          "white",
          "blue",
          "red"
      ]
  }
];