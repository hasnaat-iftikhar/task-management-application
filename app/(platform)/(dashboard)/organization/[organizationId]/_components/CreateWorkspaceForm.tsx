"use client"

import React, { FC, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { useMutation, useQuery } from 'react-query';
import { unsplash } from '@/lib/unsplash';

// Actions
import { CreateBoard } from '@/actions/board';

// Components
import Input from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

// Validation
import { BoardFormPayload } from "@/lib/validation/boardForm";

// Hooks
import { useToast } from '@/hooks/useToast';

// Images
import { defaultImages } from '@/constants/images';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Check } from 'lucide-react';
import Link from 'next/link';

interface CreateWorkspaceFormProps {
    className?: string;
}

const CreateWorkspaceForm:FC<CreateWorkspaceFormProps> = ({
    className,
}) => {
    const { toast } = useToast();

    // States
    const [title, setTitle] = useState("");
    const [images, setImages] = useState<Array<Record<string, any>>>(defaultImages);
    const [selectedImage, setSelectedImage] = useState<Record<string, any> | any>("");

    // Actions
    const { mutate: createBoard, isLoading: createBoardLoading } = useMutation({
        mutationFn: async () => {
          const payload: BoardFormPayload = {
            title,
            image: `${selectedImage.id}|${selectedImage.urls.thumb}|${selectedImage.urls.full}|${selectedImage.links.html}|${selectedImage.user.name}`
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
                setSelectedImage("");
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
    
    const {
        data: fetchedUnsplashImages,
        isLoading: fetchingUnsplashImages,
        isError: errorFetchingUnsplashImages
    } = useQuery({ queryKey: ["unsplashFetchedImages"], queryFn: function() {
        const result: any = unsplash.photos.getRandom({
            collectionIds: ["317099"],
            count: 9,
        });

        if (result && result.response) {
            const newImages = (result.response as Array<Record<string, any>>);
            setImages(newImages);
        }

        return result;
    }});

    // Error handling
    if(errorFetchingUnsplashImages) {
        console.log("[errorFetchingUnsplashImages]", errorFetchingUnsplashImages)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        createBoard();
    }
    
    return (
        <form
            onSubmit={handleSubmit}
            className={twMerge(className, "flex flex-col justify-center items-start gap-[12px]")}
        >
            <div className="w-full grid grid-cols-3 gap-2 mb-2">
                {images.map((image) => (
                    <div 
                        key={image.id}
                        className={cn(
                            "cursor-pointer relative aspect-video group hover:opacity-75 transition bg-muted",
                            fetchingUnsplashImages && "opacity-50 hover:opacity-50 cursor-auto"
                        )}
                        onClick={() => {
                            if (fetchingUnsplashImages) return;
                            setSelectedImage(image);
                        }}
                    >
                        <input 
                            type="radio"
                            id="image"
                            name="image"
                            className="hidden"
                            checked={selectedImage.id === image.id}
                            disabled={fetchingUnsplashImages}
                            value={`${image.id}|${image.urls.thumb}|${image.urls.full}|${image.links.html}|${image.user.name}`}
                        />
                        <Image
                            src={image.urls.thumb}
                            alt="Unsplash image"
                            className="object-cover rounded-sm"
                            fill  
                        />
                        {selectedImage.id === image.id && (
                            <div className="absolute inset-y-0 h-full w-full bg-black/30 flex items-center justify-center">
                                <Check className="h-4 w-4 text-white" />
                            </div>
                        )}
                        <Link 
                            href={image.links.html}
                            target="_blank"
                            className="opacity-0 group-hover:opacity-100 absolute bottom-0 w-full text-[10px] truncate text-white hover:underline p-1 bg-black/50"
                        >
                            {image.user.name}
                        </Link>
                    </div>
                ))}
            </div>

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