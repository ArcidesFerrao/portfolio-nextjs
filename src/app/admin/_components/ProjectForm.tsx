"use client";

import { useFormStatus } from "react-dom";
import { addProject } from "../_actions/projects";
import { useActionState, useState } from "react";
import { UploadDropzone } from "@/app/lib/uploadthing";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { projectSchema } from "../schema/addProjectSchema";

export default function ProjectForm() {
  // const [error, action] = useActionState(addProject, {});
  const [image, setImage] = useState<string>("");
  const [lastResult, action] = useActionState(addProject, undefined);
  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: projectSchema });
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
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <input type="text" name="description" id="description" required />
      </div>
      <div>
        <label htmlFor="projectLink">Project Link</label>
        <input type="text" name="projectLink" id="projectLink" required />
      </div>
      <div>
        <label htmlFor="tech">Technologies</label>
        <input type="text" name="tech" id="tech" required />
      </div>
      <div>
        <label htmlFor="image">Image</label>
        <input
          type="hidden"
          value={image}
          key={fields.image.key}
          name="image"
          defaultValue={fields.image.initialValue}
        />
        {image !== "" ? (
          <img src={image} width={300} />
        ) : (
          <UploadDropzone
            endpoint="imageUploader"
            onClientUploadComplete={(res) => {
              setImage(res[0].url);
            }}
            onUploadError={() => {
              alert("something went wrong");
            }}
          />
        )}
      </div>
      {fields.projectName.errors && <div>{fields.projectName.errors}</div>}

      <SubmitButton />
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return <input type="submit" value={pending ? "Saving..." : "Save"} />;
}
