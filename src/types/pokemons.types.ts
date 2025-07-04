export type PokemonStats = {
  hp: number;
  atk: number;
  def: number;
  spa: number;
  spd: number;
  spe: number;
  xp?: number; // xp is optional in some contexts
};

export type AnkiPokemon = {
  name: string;
  nickname: string;
  level: number;
  gender: 'M' | 'F' | string;
  id: number;
  ability: string;
  type: string[];
  stats: PokemonStats;
  ev: PokemonStats;
  iv: PokemonStats;
  attacks: string[];
  base_experience: number;
  current_hp: number;
  growth_rate: string;
  friendship: number;
  pokemon_defeated: number;
  everstone: boolean;
  shiny: boolean;
  captured_date: string;
  individual_id: string;
  mega: boolean;
  'special-form': string | null;
  evos: string[];
};

interface ApiPokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: {
    slot: number;
    type: {
      name: string;  // e.g., "electric"
      url: string;
    }
  }[];
  sprites: {
    front_default: string | null;
    // other sprite urls...
  };
  // add more fields if needed
}
