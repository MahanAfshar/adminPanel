"use client";
import { useState } from "react";
import Image from "next/image";
import arrow from "@/../public/icons/arrow.svg";

interface Props {
    placeholder?: string;
    inputClassName?: string;
    options: any[];
    dynamicValue: string;
    setDynamicValue: (value: string) => void;
}

export default function SelectOrType({
    placeholder = 'select or type',
    inputClassName,
    options,
    dynamicValue,
    setDynamicValue
}: Props) {
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState('');
    const filteredOptions = options.filter(option => option.name.toLowerCase().includes(search.toLowerCase()))

    return (
        <div>
            <div
                className="relative"
            >
                <input
                    type="text"
                    placeholder={placeholder}
                    value={dynamicValue}
                    className={`w-full p-3 pr-8 text-sm rounded-lg bg-grayOne placeholder:text-grayTwo ${inputClassName}`}
                    onFocus={() => setIsOpen(true)}
                    onBlur={() => {
                        setTimeout(() => {
                            setIsOpen(false);
                        }, 100);
                    }}
                    onChange={(e) => {
                        const { target: {value} } = e;
                        setSearch(value);
                        setDynamicValue(value);
                    }}
                />
                <Image 
                    src={arrow}
                    width={20}
                    height={20}
                    alt="arrow"
                    className={`absolute top-3 right-3 ${!isOpen && 'rotate-180'}`}
                />
            </div>
            {isOpen && (
                <ul
                    className="w-full text-grayTwo text-sm rounded-lg bg-grayOne mt-3"
                >
                    {search && (
                        <li
                            className="p-3 [&:not(:last-of-type)]:border-b-2 border-blackOne cursor-pointer line-clamp-1"
                            onClick={() => {
                                setDynamicValue(search);
                                setIsOpen(false);
                            }}
                        >
                            {search}
                        </li>
                    )}
                    {filteredOptions.map(option => (
                        <li
                            key={option.id}
                            className="p-3 [&:not(:last-of-type)]:border-b-2 border-blackOne cursor-pointer"
                            onClick={() => {
                                setDynamicValue(option.name);
                                setIsOpen(false);
                            }}
                        >
                            {option.name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}
