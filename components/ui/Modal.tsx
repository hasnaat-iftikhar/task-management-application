"use client"

import React, { FC, ReactNode, useState } from 'react';

// Components
import { Button } from './Button';

interface Modal {
    children: ReactNode,
    button?: string,
    customButton?:ReactNode,
    className?:string
}

const Modal:FC<Modal> = ({
    children,
    button,
    customButton,
    className,
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

    return (
        <>
        {
            isModalVisible && (
            <div 
                className='fixed z-[10] top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-[rgba(255,255,255,0.6)] backdrop-blur-lg'
                onClick={closeModalOnBackdropClick}
            >
                <div className='max-w-[400px] w-full mx-auto'>
                    {children}
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