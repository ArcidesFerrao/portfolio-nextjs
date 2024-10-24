"use server"

import db from "@/db/db";
import { z } from "zod";
import fs from "fs/promises"
import { redirect } from "next/navigation";

const fileSchema = z.instanceof(File, { message: "Required"})

const imageSchema = fileSchema.refine(file => file.size === 0 || file.type.startsWith("image/"))

const addSchema = z.object({
    projectName: z.string().min(1),
    description: z.string().min(1),
    tech: z.string().min(1),
    image: imageSchema.refine(file => file.size> 0, "Required"),
})

export async function addProject(prevState: unknown ,formData: FormData) {
    const result = addSchema.safeParse(Object.fromEntries(formData.entries()))

    if(result.success === false) {
        return result.error.formErrors.fieldErrors;
    }
    // console.log(formData);
    const data = result.data;
    // console.log(result);

    await fs.mkdir("public/projects", {recursive: true})
    const imagePath = `/projects/${crypto.randomUUID()}-${data.image.name}`
    await fs.writeFile(`public${imagePath}`, Buffer.from(await data.image.arrayBuffer()))
    
    await db.project.create({
        data: {
            authorId: "8a2dc2eb-fe1d-48fa-a1e9-f7dca70d2684",
            projectName: data?.projectName,
            description: data?.description,
            tech: data?.tech,
            imagePath,
        }
    })

    redirect("/admin/projects");
}