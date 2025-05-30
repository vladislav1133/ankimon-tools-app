import React, {useEffect, useState} from 'react';
import {Box, Button, TextField, Typography} from '@mui/material';
import {useSearchParams} from 'react-router-dom';
import {AnkiPokemon} from '../../types/pokemons.types';
import { differenceInDays } from 'date-fns';
import {getGenColor, getGenListFromIds} from '../../utils/pokemons.utils';
import BattlePlayerView from './BattlePlayerView';

// type Pokemon = {
//   name: string;
//   id: number;
//   // Add more fields as needed
// };

interface BattlePokemon {
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

const CatchEventBattle: React.FC = () => {
  const [searchParams] = useSearchParams();
  const pokemonIds = searchParams.getAll('catchPokemons').map(Number);
  const dateStart = searchParams.get('date_start') || '';
  const dateEnd = searchParams.get('date_end') || '';
  const eventName = searchParams.get('event_name') || '';
  const daysCount = differenceInDays(new Date(dateEnd), new Date(dateStart));
  const presentedGens = getGenListFromIds(pokemonIds);

  useEffect(() => {
    console.log('---1133gg 🍉', 'dateStart', dateStart);
  }, [dateStart]);

  const [needPokemons, setNeedPokemons] = useState<any[]>([]);

  useEffect(() => {
    console.log('---1133x 🍉', 'needPokemons', needPokemons);
  }, [needPokemons]);

  useEffect(() => {
    if (!pokemonIds || pokemonIds.length === 0) {
      setNeedPokemons([]);
      return;
    }

    async function fetchPokemons() {
      try {
        // fetch all pokemons concurrently
        const names = await Promise.all(pokemonIds.map(id => getPokemonNameById(Number(id))));
        setNeedPokemons(names);
      } catch (error) {
        console.error(error);
      }
    }

    fetchPokemons();
  }, []);


  async function getPokemonNameById(id: number) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    if (!response.ok) {
      throw new Error('Pokémon not found');
    }
    return await response.json();  // this is the Pokémon name
  }


  useEffect(() => {
    getPokemonNameById(25).then(pok => console.log('1133b', pok));  // prints "pikachu"
  }, []);

  const [userName, setUserName] = useState('');
  const [uploadedPokemons, setUploadedPokemons] = useState<AnkiPokemon[] | null>(null);
  const [users, setUsers] = useState<UserWithPokemons[]>([]);

  console.log('---1133', `users`, users);
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const json = JSON.parse(event.target?.result as string);
        if (Array.isArray(json)) {
          setUploadedPokemons(json);
        } else {
          setUploadedPokemons([json]);
        }
      } catch {alert('Invalid JSON format in file');}
    };
    reader.readAsText(file);
  };

  const filterPokemonsByRules = (
    playerPoks: AnkiPokemon[],
  ): BattlePokemon[] => {
    const start = new Date(dateStart);
    const end = new Date(dateEnd);

    return needPokemons.map((needPok) => {
      const matching = playerPoks
        .filter((playerPok) => playerPok.id === needPok.id)
        .filter((p) => {
          const date = new Date(p.captured_date);
          return date >= start && date <= end;
        });

      const earliest = matching.reduce((min, curr) => {
        return !min || new Date(curr.captured_date) < new Date(min.captured_date) ? curr : min;
      }, undefined as AnkiPokemon | undefined);

      return {
        id: needPok.id,
        name: needPok.name,
        caught: !!earliest,
        caughtAt: earliest?.captured_date
      };
    });
  };

  const handleAddUser = () => {
    if (!userName || !uploadedPokemons) {
      alert('Please enter a name and upload a valid Pokémon file.');
      return;
    }


    const passedPokemons = filterPokemonsByRules(uploadedPokemons);


    console.log('---1133ee', `passedPokemons`, passedPokemons);
    const times = passedPokemons
      .filter(p => p.caught && p.caughtAt)
      .map(p => new Date(p.caughtAt as string).getTime());

    const timeSpent = times.length > 0
      ? Math.max(...times) - Math.min(...times)
      : 0; // milliseconds

    const newUser: UserWithPokemons = {
      name: userName,
      caughtNum: passedPokemons.filter((o) => o.caught).length,
      pokemons: passedPokemons,
      timeSpent,
    };

    setUsers((prev) => [...prev, newUser]);

    setUserName('');
    setUploadedPokemons(null);
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>Event - <span className="text-[#87CEEB]">{eventName}</span></Typography>

      <Typography variant="h5" gutterBottom>Need to Catch</Typography>

      <div className="border rounded p-2 mb-2 mt-2">
        <div>Rules:</div>
        <div>Start - End: {dateStart} - {dateEnd}</div>
        <div>Days: {daysCount}</div>
      </div>
      <div>
        <div>Generation include:</div>
        <div className="flex gap-2">
          {presentedGens.map((gen) => (
            <div style={{backgroundColor: getGenColor(gen)}}
                 className="rounded-[6px] p-1 w-fit text-black">Gen {gen}</div>
          ))}
        </div>
      </div>


      <div style={{display: 'flex', flexWrap: 'wrap', gap: '16px'}}>
        {needPokemons.map((pok) => (
          <div key={pok.id}>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pok.id}.png`}
              alt=""
            />
            {pok.name} #<span className="text-[#87CEEB]">{pok.id}</span>
          </div>
        ))}
      </div>

      <br/>
      <br/>
      <hr/>
      <br/>
      {users.length > 0 && (
        <Box mb={4}>
          {users.map((user, idx) => (
            <BattlePlayerView key={idx} user={user} pokemonIds={pokemonIds}/>
          ))}
        </Box>
      )}


      <Typography variant="h5" gutterBottom>Add user to Table</Typography>
      <Box mb={4}>
        <TextField
          label="User Name"
          value={userName}
          fullWidth
          onChange={(e) => setUserName(e.target.value)}
          sx={{mb: 2}}
        />

        <input type="file" accept="application/json" onChange={handleFileUpload}/>

        <Button variant="contained" onClick={handleAddUser} sx={{mt: 2}}>
          Add User with Pokémons
        </Button>
      </Box>

    </div>
  );
};

export default CatchEventBattle;
