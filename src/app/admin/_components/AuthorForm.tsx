"use client";

import { useActionState } from "react";
import { addAuthor } from "../_actions/author";

export default function AuthorForm() {
  const [error, action] = useActionState(addAuthor, {});

  return (
    <form action={action} className="admin-author-form">
      <div>
        <label htmlFor="name">Author</label>
        <input type="text" name="name" id="name" required />
        {error?.name && <div>{error.name}</div>}
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="email" required />
      </div>
      <div>
        <label htmlFor="image">Image</label>
        <input type="file" name="image" id="image" required />
      </div>
      <input type="submit" value="Submit" />
    </form>
  );
}
