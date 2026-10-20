export interface PokemonEntry { name: string; url: string; }
export interface PokemonPage { count: number; next: string | null; previous: string | null; results: PokemonEntry[]; }
export interface PokemonType { slot: number; type: { name: string; url: string }; }
export interface PokemonStat { base_stat: number; stat: { name: string }; }
export interface PokemonAbility { ability: { name: string }; is_hidden: boolean; }
export interface PokemonDetail {
  id: number;
  name: string;
  height: number;
  weight: number;
  base_experience: number | null;
  sprites: { front_default: string | null; other?: { 'official-artwork'?: { front_default: string | null } } };
  types: PokemonType[];
  stats: PokemonStat[];
  abilities: PokemonAbility[];
}
