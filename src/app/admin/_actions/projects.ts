"use server"

import db from "@/db/db";
import { projectSchema } from "../schema/addProjectSchema";
import { redirect } from "next/navigation";
import { parseWithZod } from "@conform-to/zod";


export async function addProject(prevState: unknown, formData: FormData) {
    const submission = parseWithZod(formData, { schema: projectSchema,});

    if(submission.status !== "success") {
        return submission.reply();
    }

    await db.project.create({
                data: {
                    authorId:"cc132fc1-8cbb-4e40-8a82-3c62ab395648",
                    projectName: submission.value.projectName,
                    description: submission.value.description,
                    tech: submission.value.tech,
                    projectLink: submission.value.projectLink,
                    imagePath: submission.value.image,
                }
            })
    redirect("/admin/projects");
}
