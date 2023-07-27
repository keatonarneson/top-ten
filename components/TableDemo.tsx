'use client';
// @ts-nocheck

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

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, useFieldArray } from 'react-hook-form';
import * as z from 'zod';

import { cn } from '@/lib/utils';

import { Button } from '@/components/ui/button';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const FormSchema = z.object({
    stat: z.coerce.number(),
    // stats: z.array(z.object({ value: z.coerce.number() })),
});

type ProfileFormValues = z.infer<typeof FormSchema>;

// const defaultValues: Partial<ProfileFormValues> = {
//     stats: [
//         { value: 0 },
//         { value: 0 },
//         { value: 0 },
//         { value: 0 },
//         { value: 0 },
//         { value: 0 },
//         { value: 0 },
//         { value: 0 },
//         { value: 0 },
//         { value: 0 },
//     ],
// };

const TableDemo = () => {
    const { round, userTableData, setUserTableData, setRound } =
        useGlobalContext();

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
    });

    function onSubmit(data: z.infer<typeof FormSchema>) {
        console.log(data);
    }

    function handleClick(values) {
        userTableData.map((player, i) => {
            return (player.userStat = +values[`userStat-rank-${i}`]);
        });

        userTableData.map(player => {
            return (player.score =
                player.mult * Math.abs(player.stat - player.userStat));
        });

        // setUserTableData(updatedTable);
        setRound(4);
    }

    return (
        <>
            <Form {...form}>
                <form
                    id="stats"
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="w-2/3 space-y-6"
                >
                    <Table>
                        {/* <TableCaption>1998 HR Leaders</TableCaption> */}
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]">
                                    Rank
                                </TableHead>
                                {round !== 1 && <TableHead>Team</TableHead>}
                                <TableHead>Player Name</TableHead>
                                {round !== 1 && round !== 2 ? (
                                    <TableHead>HR</TableHead>
                                ) : (
                                    ''
                                )}
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {userTableData.map((row, i) => (
                                <TableRow key={row.rank}>
                                    <TableCell className="font-medium">
                                        {row.rank}
                                    </TableCell>
                                    {round !== 1 && (
                                        <TableCell>{row.team}</TableCell>
                                    )}
                                    <TableCell
                                        className={`${
                                            row.roundOne ? 'bg-slate-200' : ''
                                        } ${
                                            round === 3 &&
                                            !row.roundOne &&
                                            !row.roundTwo
                                                ? 'bg-red-200'
                                                : ''
                                        }`}
                                    >
                                        {row.playerName}
                                    </TableCell>
                                    {round === 3 && (
                                        <TableCell>
                                            <FormField
                                                control={form.control}
                                                name={`userStat-rank-${i}`}
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormControl>
                                                            <Input
                                                                placeholder="#"
                                                                {...field}
                                                            />
                                                        </FormControl>
                                                    </FormItem>
                                                )}
                                            />
                                        </TableCell>
                                    )}
                                    {/* {round === 3 && <TableCell>{row.stat}</TableCell>} */}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </form>
            </Form>
            {round === 3 && (
                <Button
                    type="submit"
                    form="stats"
                    onClick={() => handleClick(form.getValues())}
                >
                    Submit
                </Button>
            )}
        </>
    );
};

export default TableDemo;
