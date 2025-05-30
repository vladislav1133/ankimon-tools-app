export interface BattlePokemon {
  name: string
  id: number
  caughtAt?: Date | string
  caught: boolean
}

export type UserWithPokemons = {
  name: string
  caughtNum: number
  pokemons: BattlePokemon[]
  timeSpent: number
};

export interface EventResult {
  rules: {
    eventName: string
    dateStart: string
    dateEnd: string
    pokemonIds: number[]
  },
  users: UserWithPokemons[]
}
