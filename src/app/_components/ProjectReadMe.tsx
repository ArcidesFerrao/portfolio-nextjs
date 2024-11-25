"use client";

import ReactMarkdown from "react-markdown";

export default function ProjectReadme({ content }: { content: string }) {
  return (
    <div className="markdown-container">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}
