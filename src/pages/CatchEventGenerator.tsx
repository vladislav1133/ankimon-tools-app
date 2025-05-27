import React, {useState} from 'react';
import {Box, Button, TextField, Typography} from '@mui/material';

const CatchEventGenerator: React.FC = () => {

  const [pokemonIds, setPokemonIds] = useState<string[]>(['15', '25', '66']);
  const [link, setLink] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const generateEvent = () => {
    const params = new URLSearchParams();
    pokemonIds.forEach(id => params.append('catchPokemons', id));
    setLink(`/catch-event-battle?${params.toString()}`);
  }

  return (
    <div>
      <Typography variant="h4">Catch Event - Generator </Typography>

      <Box display="flex" flexDirection="column" gap={2} maxWidth={300} mb={4}>
        <TextField
          label="Start Date"
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          InputLabelProps={{ shrink: true }}
        />

        <TextField
          label="Finish Date"
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          InputLabelProps={{ shrink: true }}
        />
      </Box>


      <div>
        {pokemonIds.map((id) => (
          <div key={id}>
            ID: {id}
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt=""/>
          </div>
        ))}
      </div>

      <Button onClick={() => generateEvent()}>Generate Event</Button>
      <div>
        Link: <a href={link}>{link}</a>
      </div>
    </div>
  );
}

export default CatchEventGenerator;
