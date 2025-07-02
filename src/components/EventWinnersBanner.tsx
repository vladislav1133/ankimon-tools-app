import React, { useEffect, useState } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Typography } from '@mui/material';
import { differenceInDays } from 'date-fns';
import slowKingPic from '../assets/pics/slowking_head.png'; // adjust path as needed


import { results } from '../constants/results';
import { getEvSlowKing, getEvWinner } from '../utils/history_n_stats.utils';

const lastEvent = results[results.length - 1]
const lastWinner = getEvWinner(lastEvent, true)
const lastSlowKing = getEvSlowKing(lastEvent)

const EventWinnersBanner: React.FC = () => {
    return (
        <div>
            <div className="border-t pt-2">
                Actual <span className="text-[#ffcc00] cursor-default" title="Title for player who catch all pokemons in shortest period">Crown of Swiftness</span> holder is - <span className="text-[#87CEEB] text-[22px] cursor-default" title="Title for player who catch all pokemons in shortest period">{lastWinner?.name} 👑</span>
            </div>
            <div className=" border-b pb-2 mb-4">
                Actual <span className="text-[#ffb3b3] cursor-default" title="Title for most chilled and relaxed person of event">Crown of Slowking</span> holder is - <span className="text-[#87CEEB] text-[22px] cursor-default" title="Title for most chilled and relaxed person of event">{lastSlowKing?.name}
                    <img className="inline-block" src={slowKingPic} alt="slowking" style={{ width: '40px', marginTop: '-18px' }}
                    />
                </span>
            </div>
        </div>
    );
};

export default EventWinnersBanner;
