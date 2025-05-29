export const  getGen = (id: number) => {
  if (id >= 1 && id <= 151) return 1;
  if (id >= 152 && id <= 251) return 2;
  if (id >= 252 && id <= 386) return 3;
  if (id >= 387 && id <= 493) return 4;
  if (id >= 494 && id <= 649) return 5;
  if (id >= 650 && id <= 721) return 6;
  if (id >= 722 && id <= 809) return 7;
  if (id >= 810 && id <= 905) return 8;
  if (id >= 906 && id <= 1025) return 9;
  return null; // Unknown or invalid ID
}

export const getGenListFromIds = (ids: number[]) => {
  const generations: Set<number> = new Set();

  for (const id of ids) {
    const gen = getGen(id);
    if (gen !== null) {
      generations.add(gen);
    }
  }

  return Array.from(generations).sort((a, b) => a - b);
}

export const getGenColor = (gen: number): string => {
  switch (gen) {
    case 1: return '#A8A77A'; // Gen 1: Kanto - earthy green
    case 2: return '#C22E28'; // Gen 2: Johto - crimson
    case 3: return '#EE8130'; // Gen 3: Hoenn - orange
    case 4: return '#6390F0'; // Gen 4: Sinnoh - blue
    case 5: return '#A33EA1'; // Gen 5: Unova - purple
    case 6: return '#7AC74C'; // Gen 6: Kalos - green
    case 7: return '#F7D02C'; // Gen 7: Alola - yellow
    case 8: return '#96D9D6'; // Gen 8: Galar - teal
    case 9: return '#B6A136'; // Gen 9: Paldea - gold
    default: return '#D3D3D3'; // Unknown - light gray
  }
};
