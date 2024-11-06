"use client";

import { useFormStatus } from "react-dom";
import { addProject } from "../_actions/projects";
import { useActionState } from "react";
import { UploadDropzone } from "@/app/lib/uploadthing";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { z } from "zod";

const addSchema = z.object({
  projectName: z.string().min(1),
  description: z.string().min(1),
  projectLink: z.string().min(1),
  tech: z.string().min(1),
  image: z.string().min(1, "At least one image is required"),
  // image: imageSchema.refine(file => file.size> 0, "Required"),
});

export default function ProjectForm() {
  // const [error, action] = useActionState(addProject, {});
  const [lastResult, action] = useActionState(addProject, undefined);
  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: addSchema });
    },
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });
  return (
    <form
      id={form.id}
      onSubmit={form.onSubmit}
      action={action}
      className="project-form"
    >
      <div>
        <label htmlFor="projectName">Name</label>
        <input type="text" name="projectName" id="name" required />
        {fields.projectName.errors && <div>{fields.projectName.errors}</div>}
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <input type="text" name="description" id="description" required />
        {/* {error.description && <div>{error.description}</div>} */}
      </div>
      <div>
        <label htmlFor="projectLink">Project Link</label>
        <input type="text" name="projectLink" id="projectLink" required />
        {/* {error.projectLink && <div>{error.projectLink}</div>} */}
      </div>
      <div>
        <label htmlFor="tech">Technologies</label>
        <input type="text" name="tech" id="tech" required />
        {/* {error.tech && <div>{error.tech}</div>} */}
      </div>
      <div>
        <label htmlFor="image">Image path</label>
        {/* <input type="file" name="image" id="image" required /> */}
        <UploadDropzone endpoint="imageUploader" />
        {/* {error.image && <div>{error.image}</div>} */}
      </div>

      <SubmitButton />
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return <input type="submit" value={pending ? "Saving..." : "Save"} />;
}
