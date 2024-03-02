"use client"

import React, { FC, useState } from 'react'
import { twMerge } from 'tailwind-merge';
import { useMutation } from 'react-query';

// Actions
import { CreateBoard } from '@/actions/board';

// Components
import Input from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

// Validation
import { BoardFormPayload } from "@/lib/validation/boardForm";

// Hooks
import { useToast } from '@/hooks/useToast';

interface CreateWorkspaceFormProps {
    className?: string;
}

const CreateWorkspaceForm:FC<CreateWorkspaceFormProps> = ({
    className,
}) => {
    const { toast } = useToast();

    // States
    const [title, setTitle] = useState("");

    // Actions
    const { mutate: createBoard, isLoading: createBoardLoading } = useMutation({
        mutationFn: async () => {
          const payload: BoardFormPayload = {
            title,
          };

          try {
            const res = await CreateBoard(payload);

            if(res?.status === "404") {
                toast({
                    variant: "destructive",
                    title: "Error!",
                    description: res.message
                });
            }

            if(res?.status === "200") {
                toast({
                    variant: "success",
                    title: "Awesome!",
                    description: res.message
                });

                setTitle("");
            }
          } catch (error) {
            console.error("Error while board creation", error);

            toast({
                variant: "success",
                title: "Error!",
                description: "Application error while board creation"
            });
          }
        },
      });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        createBoard();
    }
    
    return (
        <form
            onSubmit={handleSubmit}
            className={twMerge(className, "flex flex-col justify-center items-start gap-[12px]")}
        >
            <Input
                label='Workspace name'
                type="text"
                placeholder="Enter a board title"
                name='title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                disabled={createBoardLoading}
            />

            <Button disabled={createBoardLoading} type='submit' size="sm" variant="dark">Create</Button>
        </form>
    )
}

export default CreateWorkspaceForm