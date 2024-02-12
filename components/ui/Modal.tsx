"use client"

import React, { FC, ReactNode, useState } from 'react';

// Components
import { Button } from './Button';
import { X } from 'lucide-react';

interface Modal {
    title: string,
    children: ReactNode,
    button?: string,
    customButton?:ReactNode,
    className?:string,
}

const Modal:FC<Modal> = ({
    title,
    children,
    button,
    customButton,
    className
}) => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const toggleModal = () => {
        setIsModalVisible(!isModalVisible)
    }

    const closeModalOnBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (event.target === event.currentTarget) {
          toggleModal();
        }
    };

    const handleCloseModal = () => {
        setIsModalVisible(false);
    }

    return (
        <>
        {
            isModalVisible && (
            <div 
                className='fixed z-[10] top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-[rgba(255,255,255,0.4)] backdrop-blur-sm'
                onClick={closeModalOnBackdropClick}
            >
                <div className='max-w-[400px] w-full mx-auto rounded-[12px] overflow-hidden border border-[#d6d6d6]'>
                    <div className='p-4 bg-[#fff] flex justify-between items-center border-b border-solid border-x-0 border-t-0 border-[#0000001a]'>
                        <h3 className='text-[16px] font-semibold'>{title}</h3>
                        <X onClick={handleCloseModal} width={18} height={18} className="cursor-pointer" />
                    </div>
                    <div className='p-4 bg-[#fff]'>
                        {children}
                    </div>
                </div>
            </div>
            )
        }

        {
            customButton ? 
            <div className={className} onClick={toggleModal}>{customButton}</div> : 
            <Button variant="dark" size="lg" className={className} onClick={toggleModal}>{button}</Button>
        }
        </>
    )
}

export default Modal