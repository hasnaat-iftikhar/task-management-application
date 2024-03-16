import { z } from "zod";

export const BoardFormValidator = z.object({
    title: z.string().min(3, {
        message: "Minimum length of 3 characters is required."
    }).max(12, {
        message: "maximum length of 12 characters is required."
    }),
    image: z.string().min(1, {
        message: "Please choose an image."
    })
});

export type BoardFormPayload = z.infer<typeof BoardFormValidator>;