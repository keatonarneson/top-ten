'use client';

import { useGlobalContext } from '@/context/global';

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';

const SummaryTable = () => {
    const { round, userTableData, setUserTableData, setRound } =
        useGlobalContext();

    console.log(userTableData);

    return (
        <>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Rank</TableHead>
                        <TableHead>Team</TableHead>
                        <TableHead>Player Name</TableHead>
                        <TableHead>HR</TableHead>
                        <TableHead className="w-[100px] bg-slate-500 text-white">
                            Answer
                        </TableHead>
                        <TableHead className="w-[100px] bg-slate-500 text-white">
                            Diff.
                        </TableHead>
                        <TableHead className="w-[100px] bg-slate-500 text-white">
                            Mult.
                        </TableHead>
                        <TableHead className="w-[100px] bg-slate-500 text-white">
                            Score
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {userTableData.map((row, i) => (
                        <TableRow key={row.rank}>
                            <TableCell className="font-medium">
                                {row.rank}
                            </TableCell>
                            <TableCell>{row.team}</TableCell>
                            <TableCell
                                className={`${
                                    row.roundOne ? 'bg-slate-200' : ''
                                } ${
                                    !row.roundOne && !row.roundTwo
                                        ? 'bg-red-200'
                                        : ''
                                }`}
                            >
                                {row.playerName}
                            </TableCell>

                            <TableCell>{row.userStat}</TableCell>
                            <TableCell>{row.stat}</TableCell>
                            <TableCell>
                                {Math.abs(row.stat - row.userStat)}
                            </TableCell>
                            <TableCell>
                                {row.roundOne === true
                                    ? 'x 0.5'
                                    : row.roundTwo === true
                                    ? ''
                                    : 'x 2'}
                            </TableCell>
                            <TableCell>{row.score}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <h1 className="font-bold text-3xl">
                Your score is:{' '}
                {userTableData
                    .map(player => player.score)
                    .reduce((prev, next) => prev + next)}
            </h1>
        </>
    );
};

export default SummaryTable;
