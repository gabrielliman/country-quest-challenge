
export type GameMode = 'all' | 'rich' | 'large' | 'populous';

export interface GameModeInfo {
  id: GameMode;
  name: string;
  description: string;
  getCountries: () => Country[];
}
