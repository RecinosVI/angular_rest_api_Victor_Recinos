export interface DemonSlayerCharacter {
  id: number;
  name: string;
  img: string;
  description?: string;
  age?: number | string;
  gender?: string;
  race?: string;
  affiliation_id?: number;
  arc_id?: number;
  quote?: string;
  combat_style?: string;
}
