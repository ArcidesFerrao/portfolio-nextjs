"use client";

import { useActionState } from "react";
import { addPost } from "../../_actions/posts";

export default function PostForm() {
  const [error, action] = useActionState(addPost, {});

  return (
    <form action={action} className="project-form">
      <div>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" required />
        {error?.title && <div>{error.title}</div>}
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <input type="text" name="description" id="description" required />
      </div>
      <div>
        <label htmlFor="intro">Intro</label>
        <input type="text" name="intro" id="intro" required />
      </div>
      <div>
        <label htmlFor="outro">Outro</label>
        <input type="text" name="outro" id="outro" required />
      </div>
      <div>
        <label htmlFor="references">References</label>
        <input type="text" name="references" id="references" required />
      </div>
      <div>
        <label htmlFor="image">Image path</label>
        <input type="file" name="image" id="image" required />
      </div>

      <input type="submit" value="Submit" />
    </form>
  );
}
