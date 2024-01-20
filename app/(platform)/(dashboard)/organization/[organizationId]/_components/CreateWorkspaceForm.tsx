import React, { FC } from 'react'
import { twMerge } from 'tailwind-merge';

// Actions
import { CreateBoard } from '@/actions/board';

// Components
import Input from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

interface CreateWorkspaceFormProps {
    className?: string
}

const CreateWorkspaceForm:FC<CreateWorkspaceFormProps> = ({
    className
}) => {
  return (
    <div className={twMerge(className, "w-full rounded-[12px] overflow-hidden")}>
        <div className='p-[16px] bg-[#fff] flex justify-between items-center border-b border-solid border-x-0 border-t-0 border-[#0000001a]'>
            <h3 className='text-[16px] font-semibold'>Create new workspace</h3>
        </div>
        <form 
            action={async (formData) => {
                "use server"
                await CreateBoard(formData);
            }}
            className='bg-[#fff] p-[12px] flex flex-col justify-center items-start gap-[12px]'
        >
            <Input
                label='Workspace name'
                type="text"
                name="title"
                placeholder="Enter a board title"
            />
            <Button size="sm" variant="dark">Create</Button>
        </form>
    </div>
  )
}

export default CreateWorkspaceForm