"use client";
import { useState } from "react";
import Image from "next/image";
import arrow from "@/../public/icons/arrow.svg";
import { Collection } from "@/types/index";

interface Props {
    title?: string;
    required?: boolean;
    subTitle?: string;
    labelClassName?: string;
    inputClassName?: string;
    optionsClassName?: string;
    placeholder?: string;
    options: Collection[];
    handleChange: (value: string) => void;
}

export default function SelectBox({
    title,
    required,
    subTitle,
    labelClassName,
    inputClassName,
    optionsClassName,
    placeholder,
    options,
    handleChange
}: Props) {
    const [isOpen, setIsOpen] = useState(false);
    const [dynamicPlaceholder, setDynamicPlaceholder] = useState(placeholder);

    return (
        <div
            className="relative"
        >
            <label
                className={`flex flex-col gap-2 ${labelClassName}`}
            >
                {title && (
                    <h4>
                        {title}
                        {required && (
                            <span
                                className="text-greenOne"
                            >
                                *
                            </span>
                        )}
                    </h4>
                )}
                {subTitle && (
                    <h5
                        className="text-sm text-grayTwo"
                    >
                        {subTitle}
                    </h5>
                )}
            </label>
            <div
                className={`relative p-3 mt-3 rounded-lg bg-blackOne cursor-pointer select-none ${inputClassName}`}
                onClick={() => setIsOpen(prev => !prev)}
            >
                <span
                    className={`text-sm ${placeholder == dynamicPlaceholder && 'text-grayTwo'}`}
                >
                    {dynamicPlaceholder}
                </span>
                <Image 
                    src={arrow}
                    width={20}
                    height={20}
                    alt="icon"
                    className={`absolute top-6 right-0 -translate-x-1/2 -translate-y-1/2`}
                />
            </div>
            {isOpen && (
                <ul
                    className={`mt-2 rounded-lg bg-blackOne text-sm text-grayTwo ${optionsClassName}`}
                >
                    {options.map(({ id, value }) => (
                        <li
                           key={id}
                           className="p-3 w-full cursor-pointer [&:not(:last-of-type)]:border-b-2 [&:not(:last-of-type)]:border-grayOne"
                           onClick={() => {
                               handleChange(id)
                               setDynamicPlaceholder(value);
                               setIsOpen(false);
                           }}
                       >
                           {value}
                       </li>
                    ))}
                </ul>
            )}
        </div>
    )
}
