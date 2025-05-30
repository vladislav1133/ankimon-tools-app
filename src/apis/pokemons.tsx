
export async function getPokemonNameById(id: number) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  if (!response.ok) {
    throw new Error('Pokémon not found');
  }
  return await response.json();  // this is the Pokémon name
}
