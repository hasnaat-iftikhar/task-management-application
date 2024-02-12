"use client";

import React from 'react'
import Image from 'next/image';
import { useOrganization } from '@clerk/nextjs'
import { twMerge } from 'tailwind-merge';

// Components
import { Skeleton } from '@/components/ui/Skeleton';
import { CreditCard } from 'lucide-react';

const Info = ({
    className=""
}) => {
    const { organization: activeOrganization, isLoaded: isActiveOrganizationLoaded } = useOrganization();

    if(!isActiveOrganizationLoaded) <Info.Skeleton />

    return (
        <div className={twMerge(className, "flex items-center gap-x-3")}>
            <div className="w-[46px] h-[46px] relative">
                <Image
                    fill
                    src={activeOrganization?.imageUrl!}
                    alt="Organization"
                    className="rounded-md object-cover"
                />
            </div>
            <div className="space-y-1">
                <p className="font-bold text-[16px]">
                    {activeOrganization?.name}
                </p>
                <div className="flex items-center text-xs text-muted-foreground">
                <CreditCard className="h-3 w-3 mr-1" />
                Free
                </div>
            </div>
        </div>
    )
}

Info.Skeleton = function SkeletonInfo() {
    return (
        <div className="flex items-center gap-x-4">
            <div className="w-[60px] h-[60px] relative">
                <Skeleton className="w-full h-full absolute" />
            </div>
            <div className="space-y-2">
                <Skeleton className="h-10 w-[200px]" />
                <div className="flex items-center">
                    <Skeleton className="h-4 w-4 mr-2" />
                    <Skeleton className="h-4 w-[100px]" />
                </div>
            </div>
        </div>
    );
};

export default Info