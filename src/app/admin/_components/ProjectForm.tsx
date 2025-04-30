"use client";

import { useFormStatus } from "react-dom";
import { addProject } from "../_actions/projects";
import { useActionState, useState } from "react";
import { UploadDropzone } from "@/app/lib/uploadthing";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { projectSchema } from "../schema/addProjectSchema";

export default function ProjectForm() {
  const [image, setImage] = useState<string>("");
  const [tech, setTech] = useState<string[]>([]);

  const [lastResult, action] = useActionState(addProject, undefined);
  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: projectSchema });
    },
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });

  const handleChangeTech = (index: number, value: string) => {
    const newTech = [...tech];
    newTech[index] = value;
    setTech(newTech);
  };

  const addTech = () => {
    setTech([...tech, ""]);
  };

  const removeTech = (index: number) => {
    const newTech = tech.filter((_, i) => i != index);
    setTech(newTech);
  };

  return (
    <form
      id={form.id}
      onSubmit={form.onSubmit}
      action={action}
      className="project-form"
    >
      <div>
        {/* <label htmlFor="projectName">Name</label> */}
        <input
          type="text"
          name="projectName"
          id="name"
          placeholder="Name"
          required
        />
      </div>
      <div>
        {/* <label htmlFor="projectLink">Project Link</label> */}
        <input
          type="text"
          name="projectLink"
          id="projectLink"
          placeholder="Project Link"
          required
        />
      </div>
      <div>
        {/* <label htmlFor="description">Description</label> */}
        <textarea
          // type="text"
          name="description"
          id="description"
          placeholder="Description"
          required
        />
      </div>
      <fieldset>
        <legend>Technologies</legend>
        {tech.map((technology, index) => (
          <div key={index} className="tech-field">
            <input
              type="text"
              // name="tech"
              id={`tech-${index}`}
              value={technology}
              onChange={(e) => handleChangeTech(index, e.target.value)}
              placeholder="Technology"
              // required
            />
            <button
              type="button"
              onClick={() => removeTech(index)}
              disabled={tech.length === 1}
            >
              Remove
            </button>
          </div>
        ))}
        <button type="button" onClick={addTech}>
          +
        </button>
      </fieldset>
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
            className="border-blue-500 "
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
