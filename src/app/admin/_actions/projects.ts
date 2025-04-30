"use server"

import db from "@/db/db";
import { projectSchema } from "../schema/addProjectSchema";
import { redirect } from "next/navigation";
import { parseWithZod } from "@conform-to/zod";
import { SubmissionResult } from "@conform-to/react";


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
        
        
export async function addProjects(prevState: unknown, formData: FormData) {
    const entries = Object.fromEntries(formData.entries());

    const techs = JSON.parse(entries.tech as string || "[]");

    const formattedData = new FormData();

    Object.entries(entries).forEach(([key, value]) => {
        if (key !== "tech") {
            formattedData.append(key, value as string)
        }
    })

    formattedData.append("technologies", JSON.stringify(techs))
    
    const submission = parseWithZod(formattedData, { schema: projectSchema,});
    
    if(submission.status !== "success") {
        return submission.reply();
    }

    try {
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
            
    } catch (error) {
        console.error("database error", error)
        return {
            status: "error",
            error: { general: ["Failed to create project"]},
        } satisfies SubmissionResult<string[]>
    }
}