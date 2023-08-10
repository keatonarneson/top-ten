'use client';

import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

const answerData = [
    {
        rank: 1,
        playerName: 'mark mcgwire',
        value: 'mark mcgwire',
        team: 'STL',
        stat: 70,
    },
    {
        rank: 2,
        playerName: 'sammy sosa',
        value: 'sammy sosa',
        team: 'CHC',
        stat: 66,
    },
    {
        rank: 3,
        playerName: 'ken griffey jr.',
        value: 'ken griffey jr.',
        team: 'SEA',
        stat: 56,
    },
    {
        rank: 4,
        playerName: 'greg vaughn',
        value: 'greg vaughn',
        team: 'SDP',
        stat: 50,
    },
    {
        rank: 5,
        playerName: 'albert belle',
        value: 'albert belle',
        team: 'CHW',
        stat: 49,
    },
    {
        rank: 6,
        playerName: 'vinny castilla',
        value: 'vinny castilla',
        team: 'COL',
        stat: 46,
    },
    {
        rank: 7,
        playerName: 'jose canseco',
        value: 'jose canseco',
        team: 'TOR',
        stat: 46,
    },
    {
        rank: 8,
        playerName: 'manny ramirez',
        value: 'manny ramirez',
        team: 'CLE',
        stat: 45,
    },
    {
        rank: 9,
        playerName: 'juan gonzalez',
        value: 'juan gonzalez',
        team: 'TEX',
        stat: 45,
    },
    {
        rank: 10,
        playerName: 'andres galarraga',
        value: 'andres galarraga',
        team: 'ATL',
        stat: 44,
    },
];

const userData = [
    {
        rank: 1,
        playerName: '',
        value: 'mark mcgwire',
        team: 'STL',
        roundOne: false,
        roundTwo: false,
        userStat: null,
        stat: 70,
        mult: 2,
        score: 0,
    },
    {
        rank: 2,
        playerName: '',
        value: 'sammy sosa',
        team: 'CHC',
        roundOne: false,
        roundTwo: false,
        userStat: null,
        stat: 66,
        mult: 2,
        score: 0,
    },
    {
        rank: 3,
        playerName: '',
        value: 'ken griffey jr.',
        team: 'SEA',
        roundOne: false,
        roundTwo: false,
        userStat: null,
        stat: 56,
        mult: 2,
        score: 0,
    },
    {
        rank: 4,
        playerName: '',
        value: 'greg vaughn',
        team: 'SDP',
        roundOne: false,
        roundTwo: false,
        userStat: null,
        stat: 50,
        mult: 2,
        score: 0,
    },
    {
        rank: 5,
        playerName: '',
        value: 'albert belle',
        team: 'CHW',
        roundOne: false,
        roundTwo: false,
        userStat: null,
        stat: 49,
        mult: 2,
        score: 0,
    },
    {
        rank: 6,
        playerName: '',
        value: 'vinny castilla',
        team: 'COL',
        roundOne: false,
        roundTwo: false,
        userStat: null,
        stat: 46,
        mult: 2,
        score: 0,
    },
    {
        rank: 7,
        playerName: '',
        value: 'jose canseco',
        team: 'TOR',
        roundOne: false,
        roundTwo: false,
        userStat: null,
        stat: 46,
        mult: 2,
        score: 0,
    },
    {
        rank: 8,
        playerName: '',
        value: 'manny ramirez',
        team: 'CLE',
        roundOne: false,
        roundTwo: false,
        userStat: null,
        stat: 45,
        mult: 2,
        score: 0,
    },
    {
        rank: 9,
        playerName: '',
        value: 'juan gonzalez',
        team: 'TEX',
        roundOne: false,
        roundTwo: false,
        userStat: null,
        stat: 45,
        mult: 2,
        score: 0,
    },
    {
        rank: 10,
        playerName: '',
        value: 'andres galarraga',
        team: 'ATL',
        roundOne: false,
        roundTwo: false,
        userStat: null,
        stat: 44,
        mult: 2,
        score: 0,
    },
];

type GlobalContextProviderProps = {
    children: ReactNode;
};

type Answers = {
    rank: number;
    playerName: string;
    value: string;
    team: string;
    stat: number;
};

type UserData = {
    rank: number;
    playerName: string;
    value: string;
    team: string;
    roundOne: boolean;
    roundTwo: boolean;
    userStat: number | null;
    stat: number;
    // mult: 1 | 0.5 | 2;
    mult: number;
    score: number;
};

type GlobalContext = {
    round: number;
    setRound: React.Dispatch<React.SetStateAction<number>>;
    guesses: number;
    setGuesses: React.Dispatch<React.SetStateAction<number>>;
    answers: Answers[];
    userTableData: UserData[];
    setUserTableData: React.Dispatch<React.SetStateAction<UserData[]>>;
};

const GlobalContext = createContext<GlobalContext | null>(null);

export const GlobalContextProvider = ({
    children,
}: GlobalContextProviderProps) => {
    const [round, setRound] = useState<number>(1);
    const [guesses, setGuesses] = useState<number>(10);
    const [answers, setAnswers] = useState<Answers[]>(answerData);
    const [userTableData, setUserTableData] = useState<UserData[]>(userData);

    return (
        <GlobalContext.Provider
            value={{
                round,
                setRound,
                guesses,
                setGuesses,
                answers,
                userTableData,
                setUserTableData,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => useContext(GlobalContext);
