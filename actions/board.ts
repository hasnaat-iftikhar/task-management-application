"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const CreateBoardValidation = z.object({
    title: z.string()
})

export async function CreateBoard(formData: FormData) {
    const { title } = CreateBoardValidation.parse({
        title: formData.get("title") as string
    });

    await db.board.create({
        data: {
            title
        }
    });

    revalidatePath("/organization/org_2a2n6gM6c7QSJLGzcO1AO9XkjFE");
}

export async function DeleteBoard(id: string) {
    console.log("id", id)
    await db.board.delete({
        where: {
            id
        }
    });

    revalidatePath("/organization/org_2a2n6gM6c7QSJLGzcO1AO9XkjFE")
}