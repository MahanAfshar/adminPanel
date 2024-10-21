"use client";
import { useRef } from "react";

interface Props {
    title?: string;
    required?: boolean;
    subTitle?: string;
    labelClassName?: string;
    textAreaClassName?: string;
    placeholder?: string;
    max?: string;
    cols: string;
    rows: string;
    value: string;
    handleChange: (value: string) => void;
}

export default function TextArea({
    title,
    required,
    subTitle,
    labelClassName,
    textAreaClassName,
    placeholder,
    max,
    cols,
    rows,
    value,
    handleChange
}: Props) {
    return (
        <div>
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
                    <h5>
                        {subTitle}
                    </h5>
                )}
            </label>
            <div
                className="relative flex flex-col items-end"
            >
                <textarea 
                    required={required}
                    placeholder={placeholder}
                    className={`rounded-lg bg-blackOne w-full p-3 mt-3 ${textAreaClassName}`}
                    cols={Number(cols)}
                    rows={Number(rows)}
                    value={value}
                    onChange={(e) => handleChange(e.target.value)}
                />
                {max && (
                    <span
                        className="mt-2 text-xs text-grayTwo"
                    >
                        {value ? value.length : 0}/{max}
                    </span>
                )}
            </div>
        </div>
    )
}
