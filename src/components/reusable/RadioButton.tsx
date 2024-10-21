"use client";

interface Props {
    title?: string;
    required?: boolean;
    labelClassName?: string;
    inputClassName?: string;
    containerClassName?: string;
    options: any[];
    value: string;
    handleChange: (value: string) => void;
}

export default function RadioButton({
    title,
    required,
    labelClassName,
    inputClassName,
    containerClassName = 'flex items-start gap-3 w-full rounded-lg bg-blackOne p-3 cursor-pointer',
    options,
    value,
    handleChange
}: Props) {
    return (
        <div
            className="flex flex-col gap-2 px-6 pb-6 sm:px-9 sm:pb-9"
        >
            <div
                className="flex"
            >
                {title && (
                    <h6>{title}</h6>
                )}
                {required && (
                    <span
                        className="text-greenOne"
                    >
                        *
                    </span>
                )}
            </div>
            {options.map(option => (
                <label
                    key={option.label}
                    htmlFor={option.label}
                    className={containerClassName}
                    onClick={() => handleChange(option.value)}
                >
                    <input
                        type="radio"
                        id={option.label}
                        value={option.value}
                        name={option.name}
                        defaultChecked={option.value == value ? true : false}
                        className={`appearance-none w-3 h-3 sm:w-5 sm:h-5 rounded-full border-2 sm:border-4 border-blackOne ring-1 ring-white checked:bg-white cursor-pointer ${inputClassName}`}
                    />
                    <div
                        className={`flex flex-col gap-2 text-xs sm:text-sm ${labelClassName}`}
                    >
                        <span
                            className="font-medium cursor-pointer"
                        >
                            {option.label}
                        </span>
                        {option.description && (
                            <p
                                className="text-grayTwo hidden sm:block"
                            >
                                {option.description}
                            </p>
                        )}
                    </div>
                </label>
            ))}
        </div>
    )
}
