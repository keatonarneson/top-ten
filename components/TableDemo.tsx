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
    stats: z.array(z.object({ value: z.coerce.number() })),
});

type ProfileFormValues = z.infer<typeof FormSchema>;

const defaultValues: Partial<ProfileFormValues> = {
    stats: [
        { value: 0 },
        { value: 0 },
        { value: 0 },
        { value: 0 },
        { value: 0 },
        { value: 0 },
        { value: 0 },
        { value: 0 },
        { value: 0 },
        { value: 0 },
    ],
};

const TableDemo = () => {
    const { round, userTableData } = useGlobalContext();

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues,
    });

    const { fields, append } = useFieldArray({
        name: 'stats',
        control: form.control,
    });

    function onSubmit(data: z.infer<typeof FormSchema>) {
        console.log(data);
    }

    return (
        <>
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
                    {userTableData.map(row => (
                        <TableRow key={row.rank}>
                            <TableCell className="font-medium">
                                {row.rank}
                            </TableCell>
                            {round !== 1 && <TableCell>{row.team}</TableCell>}
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
                                    <Input placeholder="#" />
                                </TableCell>
                            )}
                            {/* {round === 3 && <TableCell>{row.stat}</TableCell>} */}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Form {...form}>
                <form
                    id="stats"
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="w-2/3 space-y-6"
                >
                    <FormField
                        control={form.control}
                        name="stat"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Home Runs</FormLabel>
                                <FormControl>
                                    <Input placeholder="#" {...field} />
                                </FormControl>
                                {/* <FormDescription>
                                    This is your public display name.
                                </FormDescription> */}
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    {/* {fields.map((field, index) => (
                        <FormField
                            control={form.control}
                            key={field.id}
                            name={`stats.${index}.value`}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel
                                        className={cn(index !== 0 && 'sr-only')}
                                    >
                                        STATS
                                    </FormLabel>
                                    <FormDescription
                                        className={cn(index !== 0 && 'sr-only')}
                                    >
                                        Add links to your website, blog, or
                                        social media profiles.
                                    </FormDescription>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    ))} */}
                    {/* <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        className="mt-2"
                        onClick={() => append({ value: '' })}
                    >
                        Add URL
                    </Button> */}
                </form>
            </Form>

            <Button type="submit" form="stats">
                Submit
            </Button>
        </>
    );
};

export default TableDemo;
