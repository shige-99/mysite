import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkHtml from "remark-html";

interface Params {
  params: {
    slug: string;
  };
}

interface FrontMatter {
  title: string;
  [key: string]: any;
}

export default async function BlogPost({ params }: Params) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), "content", `${slug}.md`);

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);
  const title = (data as FrontMatter).title;

  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkHtml)
    .process(content);
  const contentHtml = processedContent.toString();

  return (
    <div className="bg-white px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {title}
        </h1>
        <div
          className="mt-6"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        ></div>
      </div>
    </div>
  );
}
