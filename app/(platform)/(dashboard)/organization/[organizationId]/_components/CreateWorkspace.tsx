import React, { FC } from 'react'

// Components
import Modal from '@/components/ui/Modal';

// Actions
import CreateWorkspaceForm from './CreateWorkspaceForm';

interface CreateWorkspaceProps {}

const CreateWorkspace:FC<CreateWorkspaceProps> = () => {
    return (
        <Modal 
            customButton={(
                <div className='cursor-pointer relative w-full h-[120px] bg-[#f1f1f1] p-[16px] rounded-[12px]'>
                    <div className='h-full flex flex-col justify-center items-center gap-[4px]'>
                        <p className='text-black text-[16px] font-medium'>Create new board</p>
                        <p className='text-black text-[14px] font-normal opacity-80'>5 remaining</p>
                    </div>
                </div>
            )}
        >
            <CreateWorkspaceForm />
        </Modal>
    )
}

export default CreateWorkspace