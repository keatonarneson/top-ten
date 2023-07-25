'use client';

import { useGlobalContext } from '@/context/global';
import TableDemo from '@/components/TableDemo';
import { ComboboxDemo } from '@/components/ComboboxDemo';

export default function Home() {
    const { round, setRound, guesses, setGuesses } = useGlobalContext();

    if (guesses === 0 && round === 1) {
        setGuesses(10);
        setRound(2);
    }

    if (guesses === 0 && round === 2) {
        setGuesses(10);
        setRound(3);
    }

    return (
        <div className="container flex flex-col items-center gap-5 mt-10 max-w-sm">
            <h1 className="font-bold text-3xl">1998 HR Leaders</h1>
            <ComboboxDemo />
            <h3 className="text-xl font-bold">Round: {round}</h3>
            <h3 className="text-xl text-red-500 font-bold">
                Guesses remaining: {guesses}
            </h3>
            <TableDemo />
        </div>
    );
}
