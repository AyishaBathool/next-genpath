// components/MarkdownRenderer.tsx
"use client";

import { marked } from "marked";

interface MarkdownRendererProps {
  content: string;
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  const html = marked.parse(content);

  return (
    <div
      className="prose prose-lg max-w-none prose-headings:text-teal-700 prose-p:text-gray-800 prose-a:text-cyan-600"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
