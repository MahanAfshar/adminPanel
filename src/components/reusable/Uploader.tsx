"use client";
import { useRef } from "react";
import Image from "next/image";
import { Media } from "@/types";
import star from "@/../public/icons/star.svg";
import greenStar from "@/../public/icons/greenStar.svg";
import close from "@/../public/icons/close.svg";

interface Props {
    title?: string;
    required?: boolean;
    subTitle?: string;
    accept: string;
    max: string;
    multiple?: boolean;
    labelClassName?: string;
    inputClassName?: string;
    iconSrc?: string;
    iconClassName?: string;
    details?: string;
    images: Media[];
    handleChange: (value: Media[]) => void;
}

export default function Uploader({
    title,
    required,
    subTitle,
    accept,
    max,
    multiple = false,
    labelClassName,
    inputClassName,
    iconSrc,
    iconClassName,
    details,
    images,
    handleChange
}: Props) {
    const inputRef = useRef<HTMLInputElement>(null);
    const handleDelete = (url: string) => {
        const filteredData = images.filter(item => item.url !== url);
        handleChange(filteredData);
    };
    const handleMain = (url: string) => {
        const updatedData = images.map(item => {
            if(item.url == url)
                item.isMain = true;
            else
                item.isMain = false;
            return item;
        });
        handleChange(updatedData);
    };

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
                    <h5
                        className="text-grayTwo text-sm"
                    >
                        {subTitle}
                    </h5>
                )}
            </label>
            <div
                className="relative flex justify-center sm:justify-start flex-wrap gap-6 mt-3"
            >
                <input
                    type="file"
                    required={required}
                    accept={accept}
                    multiple={multiple}
                    hidden
                    onChange={e => {
                        const files = e.target.files;
                        
                        if(!files) return;

                        let images: Media[] = [];
                        for(const file of files) {
                            if(file.size >= Number(max) * 1_048_576) return alert('files is too big');

                            const imageURL = URL.createObjectURL(new Blob([file], {type: 'application/zip'}));
                            images.push({ url: imageURL, isMain: false });
                        }
                        handleChange(images);
                    }}
                    ref={inputRef}
                />
                <div
                    className={`rounded-lg bg-blackOne px-3 cursor-pointer ${inputClassName}`}
                    onClick={() => inputRef.current?.click()}
                >
                    {iconSrc && (
                        <Image 
                            src={iconSrc}
                            width={24}
                            height={24}
                            alt="upload"
                            className={iconClassName}
                        />
                    )}
                    {details}
                </div>
                {images?.map(({ url, isMain }) => (
                    <div
                        key={url}
                        className="relative"
                    >
                        <Image
                            src={url}
                            width={185}
                            height={185}
                            alt='product'
                            className="rounded-lg w-[185px] h-[185px]"
                        />
                        <Image 
                            src={isMain ? greenStar : star}
                            width={24}
                            height={24}
                            alt="star"
                            className="bg-whiteOne p-1 rounded-[4px] cursor-pointer absolute top-2 left-2"
                            onClick={() => handleMain(url)}
                        />
                        <Image 
                            src={close}
                            width={24}
                            height={24}
                            alt="close"
                            className="bg-whiteOne p-1 rounded-[4px] cursor-pointer absolute top-2 right-2"
                            onClick={() => handleDelete(url)}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
