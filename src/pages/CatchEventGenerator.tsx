import React, {useState} from 'react';
import {Box, Button, TextField, Typography} from '@mui/material';
import {getGenColor, getGenListFromIds} from '../utils/pokemons.utils';


//const url = 'https://vladislav1133.github.io/ankimon-tools-app/#/'
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
  const [newPokemonId, setNewPokemonId] = useState('');
  const [removePokemonId, setRemovePokemonId] = useState('');
  const [pokemonIds, setPokemonIds] = useState<number[]>([4, 15, 25, 66, 86, 99, 36, 39, 107]);
  const [link, setLink] = useState('');
  const [startDate, setStartDate] = useState(getTomorrowDate());
  const [endDate, setEndDate] = useState(getDayAfterTomorrowDate());
  const presentedGens = getGenListFromIds(pokemonIds);
  const [eventName, setEventName] = useState(`KAS's alpha event #1`);

  const generateEvent = () => {
    const params = new URLSearchParams();

    pokemonIds.forEach(id => params.append('catchPokemons', String(id)));
    if (startDate) {params.append('date_start', startDate);}
    if (endDate) {params.append('date_end', endDate);}
    if (eventName) {params.append('event_name', eventName)}

    setLink(`${url}catch-event-battle?${params.toString()}`);
  }

  const resetRules = () => {
    setPokemonIds([])
  }
  return (
    <div>
      <Box display="flex" flexDirection="column" gap={2} maxWidth={300} mb={4}>
        <TextField
          label="Event Name"
          type="text"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
        />
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


      <div className="flex gap-8">
        <Box display="flex" gap={2} mb={2}>
          <TextField
            label="New Pokémon ID"
            type="number"
            value={newPokemonId}
            onChange={(e) => setNewPokemonId(e.target.value)}
          />
          <Button
            variant="outlined"
            onClick={() => {
              if (newPokemonId && !pokemonIds.includes(Number(newPokemonId))) {
                setPokemonIds([...pokemonIds, Number(newPokemonId)]);
                setNewPokemonId('');
              }
            }}
          >
            Add
          </Button>
        </Box>
        <Box display="flex" gap={2} mb={2}>
          <TextField
            label="Remove Pokémon ID"
            type="number"
            value={removePokemonId}
            onChange={(e) => setRemovePokemonId(e.target.value)}
          />
          <Button
            variant="outlined"
            color="error"
            onClick={() => {
              const idToRemove = Number(removePokemonId);
              if (idToRemove && pokemonIds.includes(idToRemove)) {
                setPokemonIds(pokemonIds.filter((id) => id !== idToRemove));
                setRemovePokemonId('');
              }
            }}
          >
            Remove
          </Button>
        </Box>
      </div>



      <div className="mb-12"></div>

      <div>
        <div>Generation include:</div>
        <div className="flex gap-2">
          {presentedGens.map((gen) => (
            <div style={{backgroundColor: getGenColor(gen)}} className="rounded-[6px] p-1 w-fit text-black">Gen {gen}</div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-10 gap-2">
        {pokemonIds.map((id) => (
          <div key={id}>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt=""/>
            ID: {id}
          </div>
        ))}
      </div>

      <div className="flex gap-4 mt-12">
        <Button className="" variant="contained" onClick={() => resetRules()}>
          Reset Rules
        </Button>
        <Button  variant="contained" onClick={() => generateEvent()}>Generate Event</Button>
      </div>
      <div>
        Link: <a href={link}>{link}</a>
      </div>
    </div>
  );
}

export default CatchEventGenerator;
