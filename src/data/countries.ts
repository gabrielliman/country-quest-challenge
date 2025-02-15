export interface Country {
  name: string;
  continent: string;
  population: number;
  gdp: number;
  flagColors: string[];
  size: number; // in square kilometers
}

// Update your countries array to include size and ensure proper filtering for game modes
export const countries: Country[] = [
  // Example country with size:
  {
    name: "United States",
    continent: "North America",
    population: 331002651,
    gdp: 21400,
    flagColors: ["red", "white", "blue"],
    size: 9833517
  },
  {
    name: "China",
    continent: "Asia",
    population: 1444216107,
    gdp: 14300,
    flagColors: ["red", "yellow"],
    size: 9596961
  },
  {
    name: "India",
    continent: "Asia",
    population: 1380004385,
    gdp: 2900,
    flagColors: ["orange", "white", "green"],
    size: 3287263
  },
  {
    name: "Indonesia",
    continent: "Asia",
    population: 273523600,
    gdp: 1186,
    flagColors: ["red", "white"],
    size: 1904569
  },
  {
    name: "Pakistan",
    continent: "Asia",
    population: 225199937,
    gdp: 278,
    flagColors: ["green", "white"],
    size: 881913
  },
  {
    name: "Brazil",
    continent: "South America",
    population: 212559417,
    gdp: 1445,
    flagColors: ["green", "yellow", "blue"],
    size: 8515767
  },
  {
    name: "Nigeria",
    continent: "Africa",
    population: 206139587,
    gdp: 473,
    flagColors: ["green", "white"],
    size: 923768
  },
  {
    name: "Bangladesh",
    continent: "Asia",
    population: 164689383,
    gdp: 274,
    flagColors: ["green", "red"],
    size: 147570
  },
  {
    name: "Russia",
    continent: "Europe",
    population: 145934462,
    gdp: 1699,
    flagColors: ["white", "blue", "red"],
    size: 17098246
  },
  {
    name: "Mexico",
    continent: "North America",
    population: 128932753,
    gdp: 1269,
    flagColors: ["green", "white", "red"],
    size: 1972550
  },
  {
    name: "Japan",
    continent: "Asia",
    population: 126476461,
    gdp: 5154,
    flagColors: ["white", "red"],
    size: 377975
  },
  {
    name: "Ethiopia",
    continent: "Africa",
    population: 114963058,
    gdp: 93,
    flagColors: ["green", "yellow", "red"],
    size: 1104300
  },
  {
    name: "Philippines",
    continent: "Asia",
    population: 109581078,
    gdp: 377,
    flagColors: ["blue", "red", "white", "yellow"],
    size: 300000
  },
  {
    name: "Egypt",
    continent: "Africa",
    population: 102334404,
    gdp: 303,
    flagColors: ["red", "white", "black"],
    size: 1010408
  },
  {
    name: "Vietnam",
    continent: "Asia",
    population: 97338579,
    gdp: 262,
    flagColors: ["red", "yellow"],
    size: 331210
  },
  {
    name: "Germany",
    continent: "Europe",
    population: 83900473,
    gdp: 3846,
    flagColors: ["black", "red", "yellow"],
    size: 357022
  },
  {
    name: "Iran",
    continent: "Asia",
    population: 84057485,
    gdp: 242,
    flagColors: ["green", "white", "red"],
    size: 1648195
  },
  {
    name: "Turkey",
    continent: "Asia",
    population: 84339067,
    gdp: 761,
    flagColors: ["red", "white"],
    size: 783562
  },
  {
    name: "France",
    continent: "Europe",
    population: 65273511,
    gdp: 2716,
    flagColors: ["blue", "white", "red"],
    size: 643801
  },
  {
    name: "United Kingdom",
    continent: "Europe",
    population: 67215293,
    gdp: 2707,
    flagColors: ["blue", "white", "red"],
    size: 242495
  },
  {
    name: "Italy",
    continent: "Europe",
    population: 60461326,
    gdp: 2003,
    flagColors: ["green", "white", "red"],
    size: 301340
  },
  {
    name: "Tanzania",
    continent: "Africa",
    population: 59734218,
    gdp: 62,
    flagColors: ["green", "yellow", "blue", "black"],
    size: 947303
  },
  {
    name: "South Africa",
    continent: "Africa",
    population: 59308690,
    gdp: 302,
    flagColors: ["red", "green", "black", "white", "yellow", "blue"],
    size: 1221037
  },
  {
    name: "Myanmar",
    continent: "Asia",
    population: 54800829,
    gdp: 76,
    flagColors: ["yellow", "green", "red", "white"],
    size: 676579
  },
  {
    name: "Kenya",
    continent: "Africa",
    population: 53771296,
    gdp: 99,
    flagColors: ["black", "red", "green", "white"],
    size: 580367
  },
  {
    name: "South Korea",
    continent: "Asia",
    population: 51780579,
    gdp: 1642,
    flagColors: ["white", "black", "red", "blue"],
    size: 100210
  },
  {
    name: "Colombia",
    continent: "South America",
    population: 50882891,
    gdp: 271,
    flagColors: ["yellow", "blue", "red"],
    size: 1141748
  },
  {
    name: "Spain",
    continent: "Europe",
    population: 46754778,
    gdp: 1398,
    flagColors: ["red", "yellow"],
    size: 505990
  },
  {
    name: "Uganda",
    continent: "Africa",
    population: 45853779,
    gdp: 40,
    flagColors: ["black", "yellow", "red", "white"],
    size: 241551
  },
  {
    name: "Argentina",
    continent: "South America",
    population: 45376763,
    gdp: 445,
    flagColors: ["blue", "white", "yellow"],
    size: 2780400
  },
  {
    name: "Algeria",
    continent: "Africa",
    population: 43851044,
    gdp: 172,
    flagColors: ["green", "white", "red"],
    size: 2381741
  },
  {
    name: "Sudan",
    continent: "Africa",
    population: 43849260,
    gdp: 34,
    flagColors: ["red", "white", "black", "green"],
    size: 1886068
  },
  {
    name: "Canada",
    continent: "North America",
    population: 38005238,
    gdp: 1647,
    flagColors: ["red", "white"],
    size: 9984670
  },
  {
    name: "Poland",
    continent: "Europe",
    population: 37958143,
    gdp: 596,
    flagColors: ["white", "red"],
    size: 312685
  },
  {
    name: "Morocco",
    continent: "Africa",
    population: 36910560,
    gdp: 120,
    flagColors: ["red", "green"],
    size: 446550
  },
  {
    name: "Ukraine",
    continent: "Europe",
    population: 43733762,
    gdp: 150,
    flagColors: ["blue", "yellow"],
    size: 603628
  },
  {
    name: "Saudi Arabia",
    continent: "Asia",
    population: 34813871,
    gdp: 793,
    flagColors: ["green", "white"],
    size: 2149690
  },
  {
    name: "Uzbekistan",
    continent: "Asia",
    population: 33469203,
    gdp: 50,
    flagColors: ["blue", "white", "green", "red"],
    size: 447400
  },
  {
    name: "Peru",
    continent: "South America",
    population: 32971854,
    gdp: 223,
    flagColors: ["red", "white"],
    size: 1285216
  },
  {
    name: "Malaysia",
    continent: "Asia",
    population: 32365999,
    gdp: 336,
    flagColors: ["red", "white", "blue", "yellow"],
    size: 330803
  },
  {
    name: "Venezuela",
    continent: "South America",
    population: 28435943,
    gdp: 482,
    flagColors: ["yellow", "blue", "red"],
    size: 912050
  },
  {
    name: "Nepal",
    continent: "Asia",
    population: 29136808,
    gdp: 33,
    flagColors: ["red", "blue", "white"],
    size: 147181
  },
  {
    name: "Ghana",
    continent: "Africa",
    population: 31072945,
    gdp: 67,
    flagColors: ["red", "yellow", "green", "black"],
    size: 238533
  },
  {
    name: "Yemen",
    continent: "Asia",
    population: 29825964,
    gdp: 21,
    flagColors: ["red", "white", "black"],
    size: 527968
  },
  {
    name: "Australia",
    continent: "Oceania",
    population: 25499884,
    gdp: 1392,
    flagColors: ["blue", "white", "red"],
    size: 7692024
  },
  {
    name: "Ivory Coast",
    continent: "Africa",
    population: 26378275,
    gdp: 70,
    flagColors: ["orange", "white", "green"],
    size: 322463
  },
  {
    name: "North Korea",
    continent: "Asia",
    population: 25831360,
    gdp: 28,
    flagColors: ["red", "blue", "white"],
    size: 120538
  },
  {
    name: "Cameroon",
    continent: "Africa",
    population: 26545863,
    gdp: 40,
    flagColors: ["green", "red", "yellow"],
    size: 475442
  },
  {
    name: "Niger",
    continent: "Africa",
    population: 24206636,
    gdp: 13,
    flagColors: ["orange", "white", "green"],
    size: 1267000
  },
  {
    name: "Sri Lanka",
    continent: "Asia",
    population: 21477270,
    gdp: 84,
    flagColors: ["yellow", "red", "green"],
    size: 65610
  }
];

export const getGameModeCountries = (mode: string): Country[] => {
  switch (mode) {
    case 'rich':
      return [...countries].sort((a, b) => b.gdp - a.gdp).slice(0, 50);
    case 'large':
      return [...countries].sort((a, b) => b.size - a.size).slice(0, 50);
    case 'populous':
      return [...countries].sort((a, b) => b.population - a.population).slice(0, 50);
    default:
      return countries;
  }
};
