import { promises as fs } from "fs";
import path from "path";
import MarkdownContent from "@/components/markdown-content";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const file = (await params).slug;
  const filePath = path.join(process.cwd(), "src", "assets", "content", `${file}.md`);
  const content = await fs.readFile(filePath, "utf-8");

  return <MarkdownContent content={content} />;
}