"use client";

interface Props {
    title?: string;
    required?: boolean;
    subTitle?: string;
    labelClassName?: string;
    inputClassName?: string;
    type?: string;
    placeholder?: string;
    max?: string;
    pattern?: string;
    value?: string;
    handleChange: (value: string) => void;
}

export default function Input({
    title,
    required,
    subTitle,
    labelClassName,
    inputClassName,
    type = 'text',
    placeholder,
    max,
    pattern,
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
                <input
                    type={type}
                    required={required}
                    placeholder={placeholder}
                    pattern={pattern}
                    maxLength={Number(max)}
                    className={`rounded-lg bg-blackOne w-full p-3 mt-3 ${inputClassName}`}
                    value={value}
                    onChange={e => handleChange(e.target.value)}
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
