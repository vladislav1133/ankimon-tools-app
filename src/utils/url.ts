
export const getParamsPokemons = (searchParams: URLSearchParams) => {
  let pokemonIds = [];

  const repeated = searchParams.getAll('catchPokemons'); // always returns an array (empty or not)
  if (repeated.length > 1) {
    // Format: ?catchPokemons=133&catchPokemons=134&...
    pokemonIds = repeated.map(Number);
  } else {
    // Format: ?catchPokemons=133,134,135,...
    const single = searchParams.get('catchPokemons');
    pokemonIds = single ? single.split(',').map(Number) : [];
  }
  return pokemonIds;
}
