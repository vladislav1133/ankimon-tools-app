import React, { useEffect } from 'react';
import { Button, Typography } from '@mui/material';
import EventWinnersBanner from '../components/EventWinnersBanner';
import { useNavigate, useSearchParams } from 'react-router-dom';

const acualEvLnik = '/catch-event-battle?catchPokemons=978%2C976%2C963%2C964%2C977%2C846%2C847%2C904%2C550%2C594%2C602%2C603%2C604%2C129%2C130%2C118%2C119%2C116%2C117&date_start=2025-07-05&date_end=2025-07-19&event_name=Fishing+Season+1+🐟+%28July%2C+2025%29'

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const lastEventRedirect = () => {
    navigate('/catch-event-history?loaded=0&viewType=table');
  };

    const actualEventRedirect = () => {
    navigate(acualEvLnik);
  };

  useEffect(() => {
    if (searchParams.get('open') === 'actualEvent') {
      navigate(acualEvLnik);
    }
  }, [searchParams, navigate]);

  return (
    <div>
      <Typography variant="h4">Website for Ankimon users</Typography>
      <div className="mb-4">
        <Button variant="outlined" onClick={() => lastEventRedirect()}>
          Check Last Event Results
        </Button>
      </div>

      <EventWinnersBanner />

        <Button variant="outlined" className="text-[22px]"
          sx={{  fontSize: '20px', color: '#66aa77', borderColor: '#b2fab4', '&:hover': { borderColor: '#a0e0a0',},}}
          onClick={() => actualEventRedirect()}>
          OPEN ACTUAL EVENT 👀
        </Button>

      <div className="mt-12"></div>
      <div>Ankimon Discord link: <a className="text-[#87CEEB]" href="https://discord.gg/YsduDjAV">click</a></div>
      <div>Ankimon Anki Extension link: <a className="text-[#87CEEB]" href="https://ankiweb.net/shared/info/1908235722">click</a></div>
    </div>
  );

}

export default Home;
