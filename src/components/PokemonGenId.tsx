import React from 'react'
import {getGen, getGenColor} from '../utils/pokemons.utils';

type Props = {
  id: number
};

const PokemonGenId = ({id}: Props) => {
  return (
    <span className="text-black rounded-[4px]" style={{backgroundColor: getGenColor(getGen(id) || 1)}}>&nbsp;#{id}&nbsp;</span>
  );
};

export default PokemonGenId;
