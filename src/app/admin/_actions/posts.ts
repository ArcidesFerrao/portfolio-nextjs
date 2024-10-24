"use server"

import db from "@/db/db"
import { z } from "zod"
import fs from "fs/promises"
import { redirect } from "next/navigation"


const fileSchema = z.instanceof(File, { message: "Required"})

const imageSchema = fileSchema.refine(file => file.size === 0 || file.type.startsWith("image/"))

const addSchema = z.object({
    title: z.string().min(1),
    intro: z.string().min(1),
    outro: z.string().min(1),
    description: z.string().min(1),
    references: z.string().min(1),
    image: imageSchema.refine(file => file.size> 0, "Required"),
})

export async function addPost(prevState: unknown ,formData:FormData) {
    console.log(formData);

    const result = addSchema.safeParse(Object.fromEntries(formData.entries()));

    if(result.success === false) {
        return result.error.formErrors.fieldErrors;
    }

    const data = result.data;

    await fs.mkdir("public/post", {recursive: true})
    const imagePath = `/post/${crypto.randomUUID()}-${data.image.name}`
    await fs.writeFile(`public${imagePath}`, Buffer.from(await data.image.arrayBuffer()))


    await db.post.create({
        data: {
            authorId: "8a2dc2eb-fe1d-48fa-a1e9-f7dca70d2684",
            title: data.title,
            intro: data.intro,
            outro: data.outro,
            description: data.description,
            references: data.references,
            imagePath,

        }
    })

    redirect("/admin/blog");

}