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

const TableDemo = () => {
    const { round, tableData } = useGlobalContext();

    return (
        <Table>
            <TableCaption>1998 HR Leaders</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Rank</TableHead>
                    {round !== 1 && <TableHead>Team</TableHead>}
                    <TableHead>Player Name</TableHead>
                    {round === 3 && <TableHead>HR</TableHead>}
                </TableRow>
            </TableHeader>
            <TableBody>
                {tableData.map(row => (
                    <TableRow key={row.rank}>
                        <TableCell className="font-medium">
                            {row.rank}
                        </TableCell>
                        {round !== 1 && <TableCell>{row.team}</TableCell>}
                        <TableCell
                            className={`${row.roundOne ? 'bg-slate-200' : ''}`}
                        >
                            {row.playerName}
                        </TableCell>
                        {round === 3 && <TableCell>{row.stat}</TableCell>}
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default TableDemo;
