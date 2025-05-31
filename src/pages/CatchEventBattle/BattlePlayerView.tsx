import React, {useEffect} from 'react';
import {Box, Typography} from '@mui/material';
import {format} from 'date-fns/format';
import {formatDuration, intervalToDuration} from 'date-fns';
import PokemonGenId from '../../components/PokemonGenId';
import {UserWithPokemons} from '../../types/events';

type Props = {
  user: UserWithPokemons
  pokemonIds: number[]
  idx: number
  showPokemons: boolean
  sortByTime: boolean
};

const BattlePlayerView = ({user, pokemonIds, idx, showPokemons, sortByTime}: Props) => {

  const formatTimeSpent = (timeSpent: number) => {
    const raw = formatDuration(intervalToDuration({ start: 0, end: timeSpent }), {
      format: ['days', 'hours', 'minutes'],
    });

    return raw
      .replace(/\bdays?\b/, 'd')
      .replace(/\bhours?\b/, 'h')
      .replace(/\bminutes?\b/, 'min');
  };

  const pokemons = sortByTime
    ? [...user.pokemons].sort((a, b) => new Date(a.caughtAt || '2150-01-01').getTime() - new Date(b.caughtAt || '2150-01-01').getTime())
    : user.pokemons;

  useEffect(() => {
    console.log('---1133es 🍉', 'pokemons', pokemons);
  }, [pokemons]);

  return (
    <Box mb={2}>
      <div className="flex">
        <div className="mr-4">
          <Typography variant="h4" className="flex items-center justify-center rounded-[12px] border w-[80px]"><strong>{idx+1}</strong></Typography>
        </div>
        <div className="flex items-center  justify-center mr-4">
          <Typography variant="h6" className="flex items-center  justify-center"><strong>{user.name}</strong></Typography>
        </div>
        <div>
          <Typography variant="body1"><strong>caught {user.caughtNum}/{pokemonIds.length}</strong></Typography>
          <Typography variant="body1"><strong>time spent: {formatTimeSpent(user.timeSpent)}</strong></Typography>

        </div>
      </div>
      {showPokemons && (
        <Box sx={{display: 'flex', flexWrap: 'wrap', gap: 2}}>
          {pokemons.map((p, i) => (
            <Box key={i} sx={{textAlign: 'center'}}>
              <img
                style={{
                  filter: p.caught ? 'none' : 'grayscale(100%)',
                  opacity: p.caught ? 1 : 0.5, // optional to make it more "disabled"
                }}
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png`}
                alt={p.name}
              />
              <Typography variant="body2">{p.name} <PokemonGenId id={p.id}/></Typography>
              <div>
                {p.caughtAt ? format(new Date(p.caughtAt), 'MM-dd HH:mm') : '—'}
              </div>
            </Box>
          ))}
        </Box>
      )}

    </Box>
  );
};

export default BattlePlayerView;
