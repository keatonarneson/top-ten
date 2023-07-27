'use client';

import * as React from 'react';
import { Check, ChevronsUpDown } from 'lucide-react';

import { useGlobalContext } from '@/context/global';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from '@/components/ui/command';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';

const players = [
    {
        value: 'mark mcgwire',
        label: 'Mark McGwire',
        rank: 1,
    },
    {
        value: 'sammy sosa',
        label: 'Sammy Sosa',
        rank: 2,
    },
    {
        value: 'ken griffey jr.',
        label: 'Ken Griffey Jr.',
        rank: 3,
    },
    {
        value: 'greg vaughn',
        label: 'Greg Vaughn',
        rank: 4,
    },
    {
        value: 'albert belle',
        label: 'Albert Belle',
        rank: 5,
    },
    {
        value: 'dean palmer',
        label: 'Dean Palmer',
        rank: null,
    },
    {
        value: 'mike piazza',
        label: 'Mike Piazza',
        rank: null,
    },
    {
        value: 'andruw jones',
        label: 'Andruw Jones',
        rank: null,
    },
    {
        value: 'scott rolen',
        label: 'Scott Rolen',
        rank: null,
    },
    {
        value: 'ray lankford',
        label: 'Ray Lankford',
        rank: null,
    },
    {
        value: 'jeff kent',
        label: 'Jeff Kent',
        rank: null,
    },
    {
        value: 'vinny castilla',
        label: 'Vinny Castilla',
        rank: 6,
    },
    {
        value: 'jose canseco',
        label: 'Jose Canseco',
        rank: 7,
    },
    {
        value: 'manny ramirez',
        label: 'Manny Ramirez',
        rank: 8,
    },
    {
        value: 'juan gonzalez',
        label: 'Juan Gonzalez',
        rank: 9,
    },
    {
        value: 'andres galarraga',
        label: 'Andres Galarraga',
        rank: 10,
    },
];

export function ComboboxDemo() {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState('');

    const { userTableData, setUserTableData, setGuesses, round } =
        useGlobalContext();

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[200px] justify-between"
                >
                    {value
                        ? players.find(player => player.value === value)?.label
                        : 'Select player...'}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
                <Command>
                    <CommandInput placeholder="Search player..." />
                    <CommandEmpty>No player found.</CommandEmpty>
                    <CommandGroup>
                        {players.map(player => (
                            <CommandItem
                                key={player.value}
                                onSelect={currentValue => {
                                    setValue(
                                        currentValue === value
                                            ? ''
                                            : currentValue
                                    );
                                    setOpen(false);

                                    // refactor
                                    const newTable = userTableData.map(row => {
                                        if (round === 1) {
                                            if (row.value === currentValue) {
                                                return {
                                                    ...row,
                                                    playerName: currentValue,
                                                    roundOne: true,
                                                    mult: 0.5,
                                                };
                                            }
                                        }

                                        if (round === 2) {
                                            if (row.value === currentValue) {
                                                return {
                                                    ...row,
                                                    playerName: currentValue,
                                                    roundTwo: true,
                                                    mult: 1,
                                                };
                                            }
                                        }

                                        return row;
                                    });

                                    setUserTableData(newTable);

                                    setGuesses(guesses => guesses - 1);
                                }}
                            >
                                <Check
                                    className={cn(
                                        'mr-2 h-4 w-4',
                                        value === player.value
                                            ? 'opacity-100'
                                            : 'opacity-0'
                                    )}
                                />
                                {player.label}
                            </CommandItem>
                        ))}
                    </CommandGroup>
                </Command>
            </PopoverContent>
        </Popover>
    );
}
