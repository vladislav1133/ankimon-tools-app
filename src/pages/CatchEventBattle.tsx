import React, { useState } from 'react';
import { Typography, TextField, Button, Box } from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import {Pokemon} from '../types/pokemons.types';

// type Pokemon = {
//   name: string;
//   id: number;
//   // Add more fields as needed
// };

type UserWithPokemons = {
  name: string;
  pokemons: Pokemon[];
};

const CatchEventBattle: React.FC = () => {
  const [searchParams] = useSearchParams();
  const pokemonIds = searchParams.getAll('catchPokemons');

  const [userName, setUserName] = useState('');
  const [uploadedPokemons, setUploadedPokemons] = useState<Pokemon[] | null>(null);
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

  const filterPokemonsByRules = (poks: Pokemon[]) => {

    const updatedPks = poks.filter((pok) => {
      return pokemonIds.includes(String(pok.id))
    });

    console.log('---1133a', `poks`, updatedPks);
    return updatedPks;
  }
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

      <Box mb={4}>
        <TextField
          label="User Name"
          value={userName}
          fullWidth
          onChange={(e) => setUserName(e.target.value)}
          sx={{ mb: 2 }}
        />

        <input type="file" accept="application/json" onChange={handleFileUpload} />

        <Button variant="contained" onClick={handleAddUser} sx={{ mt: 2 }}>
          Add User with Pokémons
        </Button>
      </Box>

      {users.length > 0 && (
        <Box mb={4}>
          <Typography variant="h6">Registered Users:</Typography>
          {users.map((user, idx) => (
            <Box key={idx} mb={2}>
              <Typography><strong>{user.name}</strong></Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                {user.pokemons.map((p, i) => (
                  <Box key={i} sx={{ textAlign: 'center' }}>
                    <img
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

      <div>
        {pokemonIds.map((id) => (
          <div key={id}>
            ID: {id}
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CatchEventBattle;
