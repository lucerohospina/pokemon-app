export interface Pokemon {
  name: string;
  image?: string;
  attack: number;
  defense: number;
  hp?: number;
  type?: string;
  idAuthor: number;
}

export interface PokemonId {
  id: number;
}

export type WholePokemon = Pokemon & PokemonId;