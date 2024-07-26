export interface IPokemon {
  pokedex_id: number;
  generation: number;
  category: string;
  name: {
    en: string;
    fr: string;
    jp: string;
  };
  sprites: {
    regular: string;
    shiny: string;
    gmax: {
      regular?: string;
      shiny?: string;
    } | null;
  };
  types: {
    name: string;
    image: string;
  }[];
  talents: {
    name: string;
    tc: boolean;
  }[];
  stats: {
    hp: number;
    atk: number;
    def: number;
    spe_atk: number;
    spe_def: number;
    vit: number;
  };
  evolution: {
    pre: {
      pokedex_id: number;
      name: string;
      condition: string;
    }[] | null;
    next: {
      pokedex_id: number;
      name: string;
      condition: string;
    }[] | null;
    mega: {
      orbe: string;
      sprites: {
        regular: string;
        shiny: string;
      };
    }[] | null;
  };
}

export interface IPokemonType {
  name: string;
  image: string;
}
