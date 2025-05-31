import React, {useEffect, useState} from 'react';
import {Box, Button, TextField, Typography} from '@mui/material';
import {useNavigate, useSearchParams} from 'react-router-dom';
import {AnkiPokemon} from '../../types/pokemons.types';
import { differenceInDays } from 'date-fns';
import {getGenColor, getGenListFromIds} from '../../utils/pokemons.utils';
import BattlePlayerView from './BattlePlayerView';
import PokemonGenId from '../../components/PokemonGenId';
import {getPokemonNameById} from '../../apis/pokemons';
import {BattlePokemon, UserWithPokemons} from '../../types/events';
import {getParamsPokemons} from '../../utils/url';

// type Pokemon = {
//   name: string;
//   id: number;
//   // Add more fields as needed
// };


const CatchEventBattle: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const pokemonIds = getParamsPokemons(searchParams);
  const dateStart = searchParams.get('date_start') || '';
  const dateEnd = searchParams.get('date_end') || '';
  const eventName = searchParams.get('event_name') || '';
  const daysCount = differenceInDays(new Date(dateEnd), new Date(dateStart)) + 1;
  const presentedGens = getGenListFromIds(pokemonIds);
  const [userName, setUserName] = useState('');
  const [uploadedPokemons, setUploadedPokemons] = useState<AnkiPokemon[] | null>(null);
  const [users, setUsers] = useState<UserWithPokemons[]>([]);
  const [needPokemons, setNeedPokemons] = useState<any[]>([]);
  const [showPokemons, setShowPokemons] = useState(true)

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

  useEffect(() => {
    getPokemonNameById(25).then(pok => console.log('1133b', pok));  // prints "pikachu"
  }, []);


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
    start.setHours(0, 0, 0, 0); // Set to 00:00:00.000

    const end = new Date(dateEnd);
    end.setHours(23, 59, 59, 999); // Set to 23:59:59.999

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

  const winSortedUsers = [...users].sort((a, b) => {
    if (b.caughtNum !== a.caughtNum) {
      return b.caughtNum - a.caughtNum; // More caught first
    }
    return a.timeSpent - b.timeSpent; // Less time spent wins in tie
  });


  const saveResults = () => {

    const result = {
      rules: {
        eventName: eventName,
        dateStart: dateStart,
        dateEnd: dateEnd,
        pokemonIds: pokemonIds
      },
      users: winSortedUsers
    }

    const jsonString = JSON.stringify(result, null, 2); // formatted JSON
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = `${eventName || 'battle'}_results.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  const backToGenerator = () => {
    const query = window.location.search || window.location.hash.split('?')[1] || '';
    navigate(`/catch-event-make${query ? '?' + query : ''}`);
  }

  if (!eventName) {
    return (<div>Event parameters are not selected</div>)
  }

  return (
    <div>
      <Typography variant="h4" gutterBottom>Event - <span className="text-[#87CEEB]">
        {eventName}</span>
        <span>&nbsp;</span>
        <Button component="span" style={{margin: 0}} variant="outlined" onClick={() => backToGenerator()}>
          Change Rules
        </Button>
        <span>&nbsp;</span>
        <Button style={{margin: 0}} variant="outlined" onClick={() => saveResults()}>
          Save Results
        </Button>
      </Typography>

      <div className="border rounded p-2 mb-2 mt-2">
        <div>Rules: <span className="text-[#ffb3b3]">catch as much as possible!</span></div>
        <div>From: {dateStart} 00:00</div>
        <div>Upto: {dateEnd} 23:59</div>
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

            {pok.name} <PokemonGenId id={pok.id}/>
          </div>
        ))}
      </div>
      <br/>
      <hr/>
      <div className="flex mb-2 mt-2 gap-4">
        <Button style={{margin: 0}} variant="contained" onClick={() => setShowPokemons(prev => !prev)} sx={{mt: 2}}>
          {!showPokemons ? 'Show' : 'Hide'} Pokemons
        </Button>
      </div>
      <hr/>
      <br/>
      {users.length > 0 && (
        <Box mb={4}>
          {winSortedUsers.map((user, idx) => (
            <BattlePlayerView key={idx} user={user} pokemonIds={pokemonIds} idx={idx} showPokemons={showPokemons}/>
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
