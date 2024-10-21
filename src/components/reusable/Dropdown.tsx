"use client";
import Image from "next/image";
import arrow from "@/../public/icons/arrow.svg";

interface Props {
    title: string;
    subTitle?: string;
    required?: boolean;
    show: boolean;
    bodyContent: any;
    dropdownActived: string;
    setDropdownActived: (value: string) => void;
}

export default function Dropdown({
    title,
    subTitle,
    required,
    show,
    bodyContent: BodyContent,
    dropdownActived,
    setDropdownActived
}: Props) {
    return (
        <div
            className="flex flex-col bg-grayOne rounded-lg"
        >
            <div
                className="flex items-center justify-between p-6 sm:p-9 cursor-pointer"
                onClick={() => dropdownActived == title ? setDropdownActived('') : setDropdownActived(title)}
            >
                <div>
                    <h3
                        className="font-bold text-xl"
                    >
                        {title}
                        {required && (
                            <span
                                className="text-greenOne"
                            >
                                *
                            </span>
                        )}
                    </h3>
                    {subTitle && (
                        <h4
                            className="text-grayTwo text-sm"
                        >
                            {subTitle}
                        </h4>
                    )}
                </div>
                <Image 
                    src={arrow}
                    width={24}
                    height={24}
                    alt='arrow'
                    className={`select-none ${!show && 'rotate-180'}`}
                />
            </div>
            {show && (
                <>
                    {BodyContent}
                </>
            )}
        </div>
    )
}
