'use client';
// @ts-nocheck

import { useGlobalContext } from '@/context/global';
import TableDemo from '@/components/TableDemo';
import { ComboboxDemo } from '@/components/ComboboxDemo';
import SummaryTable from '@/components/SummaryTable';

export default function Home() {
    const {
        round,
        setRound,
        guesses,
        setGuesses,
        userTableData,
        setUserTableData,
        answers,
    } = useGlobalContext();

    if (guesses === 0 && round === 1) {
        setGuesses(10);
        setRound(2);
    }

    if (guesses === 0 && round === 2) {
        setGuesses(10);
        setRound(3);
    }

    if (round === 3) {
        userTableData.map(a => {
            const exists = answers.find(b => a.value == b.value);
            return exists ? ((a.playerName = exists.playerName), a) : a;
        });
    }

    return (
        <div className="container flex flex-col items-center gap-5 mt-10 max-w-5xl">
            <h1 className="font-bold text-3xl">1998 HR Leaders</h1>
            {round === 1 || round === 2 ? (
                <>
                    <ComboboxDemo />
                    <h3 className="text-xl font-bold">Round: {round}</h3>
                    <h3 className="text-xl text-red-500 font-bold">
                        Guesses remaining: {guesses}
                    </h3>
                </>
            ) : (
                ''
            )}

            {round !== 4 && <TableDemo />}
            {round === 4 && <SummaryTable />}
        </div>
    );
}
