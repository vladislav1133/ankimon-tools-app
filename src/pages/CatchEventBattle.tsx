import React, {useEffect, useState} from 'react';
import {Box, Button, TextField, Typography} from '@mui/material';
import {useSearchParams} from 'react-router-dom';
import {AnkiPokemon} from '../types/pokemons.types';

// type Pokemon = {
//   name: string;
//   id: number;
//   // Add more fields as needed
// };

interface BattlePokemon {
  name: string
  id: number
  caughtAt?: Date | string
  valid: boolean
}
type UserWithPokemons = {
  name: string;
  pokemons: BattlePokemon[];
};

const CatchEventBattle: React.FC = () => {
  const [searchParams] = useSearchParams();
  const pokemonIds = searchParams.getAll('catchPokemons');
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
    return needPokemons.map((needPok) => {
      const match = playerPoks.find((playerPok) => playerPok.id === needPok.id);

      return {
        id: needPok.id,
        name: needPok.name,
        valid: !!match,
        caughtAt: match?.captured_date
      };
    });
  };

  const handleAddUser = () => {
    if (!userName || !uploadedPokemons) {
      alert('Please enter a name and upload a valid Pokémon file.');
      return;
    }


    const passedPokemons = filterPokemonsByRules(uploadedPokemons);

    const newUser: UserWithPokemons = {
      name: userName,
      pokemons: passedPokemons,
    };

    setUsers((prev) => [...prev, newUser]);

    setUserName('');
    setUploadedPokemons(null);
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>CATCH BATTLE</Typography>

      <Typography variant="h5" gutterBottom>Need to Catch</Typography>
      <div style={{display: 'flex', flexWrap: 'wrap', gap: '16px'}}>
        {needPokemons.map((pok) => (
          <div key={pok.id}>
            {pok.name} - {pok.id}
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pok.id}.png`}
              alt=""
            />
          </div>
        ))}
      </div>

      <br/>
      <br/>
      <br/>
      <Typography variant="h5" gutterBottom>Add user to Table</Typography>



      {users.length > 0 && (
        <Box mb={4}>
          {users.map((user, idx) => (
            <Box key={idx} mb={2}>
              <Typography variant="h3"><strong>{user.name}</strong></Typography>
              <Box sx={{display: 'flex', flexWrap: 'wrap', gap: 2}}>
                {user.pokemons.map((p, i) => (
                  <Box key={i} sx={{textAlign: 'center'}}>
                    <img
                      style={{
                        filter: p.valid ? 'none' : 'grayscale(100%)',
                        opacity: p.valid ? 1 : 0.5, // optional to make it more "disabled"
                      }}
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png`}
                      alt={p.name}
                    />
                    <Typography variant="body2">{p.name}</Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          ))}
        </Box>
      )}


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
