import { DeleteBoard } from '@/actions/board';
import { Trash2 } from 'lucide-react';
import Image from 'next/image';
import React, { FC } from 'react'

interface BoardProps {
    id: string;
    title: string;
    imageThumbUrl: string;
}

const Board:FC<BoardProps> = ({
    id,
    title,
    imageThumbUrl
}) => {
    const handleDelete = async () => {
        "use server"
        await DeleteBoard(id);
    }

    return (
        <form action={handleDelete} className='relative w-full h-[120px] p-[16px] rounded-[12px] overflow-hidden shadow-inner'>
            <Image src={imageThumbUrl} fill alt={title} className='object-cover' />
            <div className='z-[1] absolute top-0 left-0 w-full h-full bg-[#00000080]'></div>
            <div className='z-[1] relative flex flex-col gap-[4px]'>
                <p className='text-white text-[14px] font-medium'>Board</p>
                <p className='text-white text-[16px] font-normal'>{title}</p>
            </div>
            <button type='submit' className='z-[1] bg-[#fff] w-[28px] h-[28px] rounded-[8px] flex justify-center items-center absolute top-[8px] right-[8px]'>
                <Trash2 width={16} height={16} className='text-destructive' />
            </button>
        </form>
    )
}

export default Board