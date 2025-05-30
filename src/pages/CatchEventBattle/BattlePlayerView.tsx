import React from 'react'
import {Box, Typography} from '@mui/material';
import {UserWithPokemons} from './CatchEventBattle';
import {format} from 'date-fns/format';
import {formatDuration, intervalToDuration} from 'date-fns';

type Props = {
  user: UserWithPokemons
  pokemonIds: number[]
};

const BattlePlayerView = ({user, pokemonIds}: Props) => {

  const formatTimeSpent = (timeSpent: number) => {
    const raw = formatDuration(intervalToDuration({ start: 0, end: timeSpent }), {
      format: ['days', 'hours', 'minutes'],
    });

    return raw
      .replace(/\bdays?\b/, 'd')
      .replace(/\bhours?\b/, 'h')
      .replace(/\bminutes?\b/, 'min');
  };

  return (
    <Box mb={2}>
      <div className="flex">
        <div className="mr-4">
          <Typography className="flex items-center justify-center rounded-[12px] border w-[80px]" variant="h3"><strong>1</strong></Typography>
        </div>
        <div className="flex items-center  justify-center mr-4">
          <Typography className="flex items-center  justify-center"  variant="h4"><strong>{user.name}</strong></Typography>
        </div>
        <div>
          <Typography variant="h6"><strong>caught {user.caughtNum}/{pokemonIds.length}</strong></Typography>
          <Typography variant="h6"><strong>time spent: {formatTimeSpent(user.timeSpent)}</strong></Typography>

        </div>
      </div>
      <Box sx={{display: 'flex', flexWrap: 'wrap', gap: 2}}>
        {user.pokemons.map((p, i) => (
          <Box key={i} sx={{textAlign: 'center'}}>
            <img
              style={{
                filter: p.caught ? 'none' : 'grayscale(100%)',
                opacity: p.caught ? 1 : 0.5, // optional to make it more "disabled"
              }}
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png`}
              alt={p.name}
            />
            <Typography variant="body2">{p.name}</Typography>
            <div>
              {p.caughtAt ? format(new Date(p.caughtAt), 'MM-dd HH:mm') : '—'}
            </div>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default BattlePlayerView;
