import React, {useEffect, useState} from 'react';
import {Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography} from '@mui/material';
import {data, useNavigate, useSearchParams} from 'react-router-dom';
import {AnkiPokemon} from '../../types/pokemons.types';
import { differenceInDays, formatDuration, intervalToDuration } from 'date-fns';
import {getGenColor, getGenListFromIds} from '../../utils/pokemons.utils';
import BattlePlayerView from './BattlePlayerView';
import PokemonGenId from '../../components/PokemonGenId';
import {getPokemonNameById} from '../../apis/pokemons';
import {BattlePokemon, EventResult, UserWithPokemons} from '../../types/events';
import {getParamsPokemons} from '../../utils/url';
import { formatTimeSpent, parseUTC } from '../../utils/dates.utils';
  

interface Props {
    users: UserWithPokemons[],
    pokemonIds: number[]
}

const EventBattleTable: React.FC<Props> = ({ users, pokemonIds }) => {
  
const getTableNumber = (num: number) => {
  if (num === 1) return '1 🏆'
  if (num === 2) return '2 🥈'
  if (num === 3) return '3 🥉'
  return num
}

  return (
    <div>
              <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Place</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Caught</TableCell>
            <TableCell>Time Spent</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((row, idx) => (
            <TableRow key={row.name}>
              <TableCell >{getTableNumber(idx + 1)}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.caughtNum === pokemonIds.length ? `all ${row.caughtNum}` : `${row.caughtNum}/${pokemonIds.length}`}</TableCell>
              <TableCell>{formatTimeSpent(row.timeSpent)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
};

export default EventBattleTable;
