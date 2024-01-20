import React, { FC, ChangeEvent } from 'react';
import { twMerge } from 'tailwind-merge';

type InputTypes = "text" | "password" | "number";

interface InputProps {
    className?:string;
    label?: string;
    labelClassName?: string;
    inputClassName?: string;
    type: InputTypes;
    name: string;
    placeholder?: string;
    value?: string | number;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({
    className,
    label,
    labelClassName,
    inputClassName,
    type,
    name,
    placeholder,
    value,
    onChange,
}) => {
    return (
        <div className={`${className} w-full flex flex-col gap-[8px]`}>
            {label && (
                <label className={twMerge(labelClassName, "text-[14px] font-medium text-black opacity-80")} htmlFor={name}>
                    {label}
                </label>
            )}
            <input
                className={twMerge(inputClassName, "w-full bg-none py-[10px] px-[16px] rounded-[8px] outline-0 text-[14px] text-black border border-solid border-[#00000029]")}
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default Input;
