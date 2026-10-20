export interface DbzCharacter {
  id: number;
  name: string;
  ki?: string;
  maxKi?: string;
  race?: string;
  gender?: string;
  description?: string;
  image: string;
  affiliation?: string;
  originPlanet?: { name: string; description?: string; image?: string };
  transformations?: { id: number; name: string; image: string; ki?: string }[];
}

export interface DbzPage {
  items: DbzCharacter[];
  meta: { totalItems: number; itemCount: number; itemsPerPage: number; totalPages: number; currentPage: number };
  links?: { first?: string; previous?: string; next?: string; last?: string };
}
