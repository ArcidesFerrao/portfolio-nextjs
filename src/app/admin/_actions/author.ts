"use server"

import db from "@/db/db"
import { z } from "zod"
import fs from "fs/promises"


const fileSchema = z.instanceof(File, { message: "Required"})

const imageSchema = fileSchema.refine(file => file.size === 0 || file.type.startsWith("image/"))

const addSchema = z.object({
    name: z.string().min(1),
    email: z.string().min(1),
    image: imageSchema.refine(file => file.size> 0, "Required"),
})

export async function addAuthor(prevState: unknown ,formData: FormData) {
  const result = addSchema.safeParse(Object.fromEntries(formData.entries()))

  if(result.success === false) {
    return result.error.formErrors.fieldErrors;
  }
//   console.log(formData);

  const data = result.data;
//   console.log(data);
    await fs.mkdir("public/author", {recursive: true})
    const imagePath = `/author/${crypto.randomUUID()}-${data.image.name}`
    await fs.writeFile(`public${imagePath}`, Buffer.from(await data.image.arrayBuffer()))

  await db.author.create({
    data: {
        name: data.name,
        email: data.email,
        imagePath,
    }
  })
}
