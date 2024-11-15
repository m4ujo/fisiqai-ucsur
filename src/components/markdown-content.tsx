import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";
import "katex/dist/katex.min.css";

export default function MarkdownContent({ content }: { content: string }) {

  return (
    <div className="flex justify-center">
      <div className="max-w-sm lg:max-w-3xl pt-10 pb-10">
        <Markdown className="md" rehypePlugins={[rehypeKatex, rehypeRaw]} remarkPlugins={[remarkGfm, remarkMath]}>
          {content}
        </Markdown>
      </div>
    </div>
  );
}