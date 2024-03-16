"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { FieldValues } from "react-hook-form";

// Libs
import { db } from "@/lib/db";
import {BoardFormValidator} from "@/lib/validation/boardForm";
import { auth } from "@clerk/nextjs";

export type State = {
    error?: boolean;
    success?: boolean;
    status: "404" | "200";
    message: string;
    data?: {
        id: string;
        title: string;
        orgId: string;
        imageId: string;
        imageThumbUrl: string;
        imageFullUrl: string;
        imageLinkHTML: string;
        imageUserName: string;
    }
}

export async function CreateBoard(formData: FieldValues) {
    const { userId, orgId } = auth();

    if (!userId || !orgId) {
        const response: State = {
            error: true,
            status: "404",
            message: "Unauthorized"
        }

        return response;
    }

    try {
        const {title, image} = BoardFormValidator.parse(formData);
        const [
            imageId,
            imageThumbUrl,
            imageFullUrl,
            imageLinkHTML,
            imageUserName
        ] = image?.split("|");

        if (!imageId || !imageThumbUrl || !imageFullUrl || !imageUserName || !imageLinkHTML) {
            const response: State = {
                error: true,
                status: "404",
                message: "Missing fields. Failed to create board."
            }

            return response;
        }

        const createdBoard = await db.board.create({
            data: {
                title,
                orgId,
                imageId,
                imageThumbUrl,
                imageFullUrl,
                imageLinkHTML,
                imageUserName
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
        console.log("error", error)
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
    await db.board.delete({
        where: {
            id
        }
    });

    revalidatePath(`/organization`);
}