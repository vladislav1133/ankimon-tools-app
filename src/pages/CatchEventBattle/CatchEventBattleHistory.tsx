import React, {useEffect, useState} from 'react';
import {Accordion, AccordionDetails, AccordionSummary, Box, Button, Typography} from '@mui/material';
import { differenceInDays } from 'date-fns';
import {getGenColor, getGenListFromIds} from '../../utils/pokemons.utils';
import BattlePlayerView from './BattlePlayerView';
import PokemonGenId from '../../components/PokemonGenId';
import {getPokemonNameById} from '../../apis/pokemons';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {EventResult} from '../../types/events';
import {results} from '../../constants/results';
import EventBattleTable from './EventBattleTable';

// type Pokemon = {
//   name: string;
//   id: number;
//   // Add more fields as needed
// };

const CatchEventBattleHistory: React.FC = () => {
  const [expanded, setExpanded] = useState(true);
  const [result, setResult] = useState<EventResult>();
  const daysCount = differenceInDays(new Date(result?.rules.dateEnd || ''), new Date(result?.rules.dateStart || '')) + 1;
  const presentedGens = getGenListFromIds(result?.rules.pokemonIds || []);
  const pokemonIds = result?.rules.pokemonIds || [];
  const [needPokemons, setNeedPokemons] = useState<any[]>([]);
  const [sortByTime, setSortByTime] = useState(false)
  const [showTable, setShowTable] = useState(false)


  const pubResuts = []

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
  }, [result]);

  const [showPokemons, setShowPokemons] = useState(true)

  const sortedRes = [...results].reverse();
  console.log('results', results)
  console.log('sortedRes', sortedRes)
  return (
    <div>
      <Accordion expanded={expanded} onChange={() => setExpanded(!expanded)}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>List of last Events:</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {sortedRes.map((re) => (
            <div style={{marginBottom: '16px'}}>
              Event: <span className="text-[#87CEEB]">{re.rules.eventName}</span>
              <Button style={{margin: '0 16px', padding: 0}} variant="contained" onClick={() => setResult(re)}>
                Load
              </Button>
              <div>
                
                <span className="text-[#c6e9f7]">started</span>: {re.rules.dateStart} | <span className="text-[#c6e9f7]">days</span>: {differenceInDays(new Date(re.rules.dateEnd), new Date(re.rules.dateStart)) + 1} | <span className="text-[#c6e9f7]">trainers</span>: {re.users.length}
              </div>
              </div>
          ))}
        </AccordionDetails>
      </Accordion>


      {result && (
        <Box>
          <Typography variant="h4" gutterBottom>Event - <span className="text-[#87CEEB]">{result.rules.eventName}</span></Typography>
          <div className="border rounded p-2 mb-2 mt-2">
            <div>Rules: <span className="text-[#ffb3b3]">catch as much as possible!</span>
            </div>
            <div>From: {result.rules.dateStart} 00:00</div>
            <div>Upto: {result.rules.dateEnd} 23:59</div>
            <div>Days: {daysCount}</div>
          </div>
          <div>
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
            <Button style={{margin: 0}} variant="outlined" onClick={() => setSortByTime(prev => !prev)} sx={{mt: 2}}>
              Set sort by: {sortByTime ? 'catch time' : 'standard'}
            </Button>
             <Button style={{margin: 0}} variant="outlined" onClick={() => setShowTable(prev => !prev)} sx={{mt: 2}}>
                      View by: {showTable ? 'default' : 'table'}
             </Button>
          </div>
          <hr/>
          <br/>

          {/*------------------------ DRAW USERS*/}
          {!showTable && result.users.length > 0 && (
            <Box mb={4}>
              {result.users.map((user, idx) => (
                <BattlePlayerView sortByTime={sortByTime} key={idx} user={user} pokemonIds={pokemonIds} idx={idx} showPokemons={showPokemons}/>
              ))}
            </Box>
          )}

          {showTable && result.users.length > 0 && (
           <EventBattleTable pokemonIds={pokemonIds} users={result.users}/>
           )}
        </Box>
      )}
    </div>
  );
};

export default CatchEventBattleHistory;
