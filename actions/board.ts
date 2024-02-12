"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { FieldValues } from "react-hook-form";

// Libs
import { db } from "@/lib/db";
import {BoardFormValidator} from "@/lib/validation/boardForm";
import { useOrganization } from "@clerk/nextjs";

export type State = {
    error?: boolean;
    success?: boolean;
    status: "404" | "200";
    message: string;
    data?: {
        id: string;
        title: string
    }
}

export async function CreateBoard(formData: FieldValues) {
    try {
        const {title} = BoardFormValidator.parse(formData);
        
        const createdBoard = await db.board.create({
            data: {
                title
            }
        });

        const response: State = {
            success: true,
            status: "200",
            message: "Board created successfully.",
            data: createdBoard
        }

        revalidatePath(`/board/${createdBoard.id}`)

        return response;
    } catch(error) {
        if (error instanceof z.ZodError) {
            const response: State = {
                error: true,
                status: "404",
                message: error?.errors[0].message
            }

            return response;
        }
    }
}

export async function DeleteBoard(id: string) {
    const { organization: activeOrganization } =
    useOrganization();

    await db.board.delete({
        where: {
            id
        }
    });

    revalidatePath(`/organization/${activeOrganization?.id}`)
}