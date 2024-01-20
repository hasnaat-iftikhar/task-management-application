import { DeleteBoard } from '@/actions/board';
import { Trash2 } from 'lucide-react';
import React, { FC } from 'react'

interface BoardProps {
    id: string;
    title: string
}

const Board:FC<BoardProps> = ({
    id,
    title
}) => {
    const handleDelete = async () => {
        "use server"
        console.log("O'm in")
        await DeleteBoard(id);
    }

  return (
    <form action={handleDelete} className='relative w-full h-[120px] bg-[rgba(25,94,254,1)] p-[16px] rounded-[12px]'>
        <div className='flex flex-col gap-[4px]'>
            <p className='text-white text-[14px] font-medium'>Board</p>
            <p className='text-white text-[16px] font-normal'>{title}</p>
        </div>
        <button type='submit' className='bg-[#fff] w-[28px] h-[28px] rounded-[8px] flex justify-center items-center absolute top-[8px] right-[8px]'>
            <Trash2 width={16} height={16} className='text-destructive' />
        </button>
    </form>
  )
}

export default Board