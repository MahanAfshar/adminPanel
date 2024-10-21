"use client";
import Image from "next/image";

interface Props {
    title?: string;
    type?: 'button' | 'submit';
    className?: string;
    disabled?: boolean;
    iconSrc?: string;
    iconClassName?: string;
    onClick?: () => void;
}

export default function Button({
    title,
    type = 'button',
    className,
    disabled,
    iconSrc,
    iconClassName,
    onClick
}: Props) {
  return (
    <button
        type={type}
        className={`flex items-center justify-center rounded-lg ${className}`}
        disabled={disabled}
        onClick={onClick}
    >
        {title && title}
        {iconSrc && (
            <Image
                src={iconSrc}
                width={20}
                height={20}
                alt='icon'
                className={iconClassName}
            />
        )}
    </button>
  )
}
