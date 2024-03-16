import React, { FC } from 'react';

// Icons
import { HelpCircle } from 'lucide-react';

// Components
import Modal from '@/components/ui/Modal';
import { Hint } from '@/components/shared/Hint';

// Actions
import CreateWorkspaceForm from './CreateWorkspaceForm';

interface CreateWorkspaceProps {}

const CreateWorkspace:FC<CreateWorkspaceProps> = () => {
    return (
        <Modal 
            title="Create new workspace"
            customButton={(
                <div className='cursor-pointer relative w-full h-[120px] bg-[#f1f1f1] p-[16px] rounded-[12px]'>
                    <div className='h-full flex flex-col justify-center items-center gap-[4px]'>
                        <p className='text-black text-[16px] font-medium'>Create new board</p>
                        <p className='text-black text-[14px] font-normal opacity-80'>5 remaining</p>
                    </div>
                    <Hint
                        sideOffset={240}
                        side='right'
                        description={`
                            Free Workspaces can have up to 5 open boards. For unlimited boards upgrade this workspace.
                        `}
                    >
                        <HelpCircle className="absolute bottom-2 right-2 h-[14px] w-[14px]" />
                    </Hint>
                </div>
            )}
        >
            <CreateWorkspaceForm />
        </Modal>
    )
}

export default CreateWorkspace