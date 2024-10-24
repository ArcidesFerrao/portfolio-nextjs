"use client";

import { useFormStatus } from "react-dom";
import { addProject } from "../_actions/projects";
import { useActionState } from "react";

export default function ProjectForm() {
  const [error, action] = useActionState(addProject, {});
  return (
    <form action={action} className="project-form">
      <div>
        <label htmlFor="projectName">Name</label>
        <input type="text" name="projectName" id="name" required />
        {error.projectName && <div>{error.projectName}</div>}
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <input type="text" name="description" id="description" required />
        {error.description && <div>{error.projectName}</div>}
      </div>
      <div>
        <label htmlFor="tech">Technologies</label>
        <input type="text" name="tech" id="tech" required />
        {error.tech && <div>{error.tech}</div>}
      </div>
      <div>
        <label htmlFor="image">Image path</label>
        <input type="file" name="image" id="image" required />
        {error.image && <div>{error.image}</div>}
      </div>

      <SubmitButton />
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return <input type="submit" value={pending ? "Saving..." : "Save"} />;
}
