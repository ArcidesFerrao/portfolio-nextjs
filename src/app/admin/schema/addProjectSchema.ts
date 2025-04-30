import { z } from "zod";
export const projectSchema = z.object({
    projectName: z.string().min(1),
    description: z.string().min(1),
    projectLink: z.string().min(1),
    tech: z.string().transform((str) => JSON.parse(str)).pipe(z.array(z.string().min(3, "Technologies must have at least 3 chars")).min(1)),
    image: z.string().min(1, "At least one image is required"),
    // image: imageSchema.refine(file => file.size> 0, "Required"),
})