'use client';

import { createContext, useContext, useState } from 'react';

const GlobalContext = createContext({});

const data = [
    {
        rank: 1,
        playerName: '',
        value: 'mark mcgwire',
        team: 'STL',
        roundOne: false,
        roundTwo: false,
        stat: 70,
    },
    {
        rank: 2,
        playerName: '',
        value: 'sammy sosa',
        team: 'CHC',
        roundOne: false,
        roundTwo: false,
        stat: 66,
    },
    {
        rank: 3,
        playerName: '',
        value: 'ken griffey jr.',
        team: 'SEA',
        roundOne: false,
        roundTwo: false,
        stat: 56,
    },
    {
        rank: 4,
        playerName: '',
        value: 'greg vaughn',
        team: 'SDP',
        roundOne: false,
        roundTwo: false,
        stat: 50,
    },
    {
        rank: 5,
        playerName: '',
        value: 'albert belle',
        team: 'CHW',
        roundOne: false,
        roundTwo: false,
        stat: 49,
    },
    {
        rank: 6,
        playerName: '',
        value: 'vinny castilla',
        team: 'COL',
        roundOne: false,
        roundTwo: false,
        stat: 46,
    },
    {
        rank: 7,
        playerName: '',
        value: 'jose canseco',
        team: 'TOR',
        roundOne: false,
        roundTwo: false,
        stat: 46,
    },
    {
        rank: 8,
        playerName: '',
        value: 'manny ramirez',
        team: 'CLE',
        roundOne: false,
        roundTwo: false,
        stat: 45,
    },
    {
        rank: 9,
        playerName: '',
        value: 'juan gonzalez',
        team: 'TEX',
        roundOne: false,
        roundTwo: false,
        stat: 45,
    },
    {
        rank: 10,
        playerName: '',
        value: 'andres galarraga',
        team: 'ATL',
        roundOne: false,
        roundTwo: false,
        stat: 44,
    },
];

export const GlobalContextProvider = ({ children }) => {
    const [round, setRound] = useState(1);
    const [guesses, setGuesses] = useState(10);
    const [tableData, setTableData] = useState(data);

    return (
        <GlobalContext.Provider
            value={{
                round,
                setRound,
                guesses,
                setGuesses,
                tableData,
                setTableData,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => useContext(GlobalContext);
