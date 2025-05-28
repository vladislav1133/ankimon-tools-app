import React, {useState} from 'react';
import {Box, Button, TextField, Typography} from '@mui/material';


// const url = 'https://vladislav1133.github.io/ankimon-tools-app/#/'
const url = 'http://localhost:3000/#/'


const getTomorrowDate = () => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return tomorrow.toISOString().slice(0, 10); // format YYYY-MM-DD
}

const getDayAfterTomorrowDate = () => {
  const dayAfterTomorrow = new Date();
  dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 2);
  return dayAfterTomorrow.toISOString().slice(0, 10);
}




const CatchEventGenerator: React.FC = () => {

  const [pokemonIds, setPokemonIds] = useState<string[]>(['4', '15', '25', '66', '86', '99', '36', '39', '107']);
  const [link, setLink] = useState('');
  const [startDate, setStartDate] = useState(getTomorrowDate());
  const [endDate, setEndDate] = useState(getDayAfterTomorrowDate());

  const generateEvent = () => {
    const params = new URLSearchParams();

    pokemonIds.forEach(id => params.append('catchPokemons', id));

    if (startDate) {
      params.append('date_start', startDate);
    }

    if (endDate) {
      params.append('date_end', endDate);
    }

    setLink(`${url}catch-event-battle?${params.toString()}`);
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
