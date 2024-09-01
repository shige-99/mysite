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
  date: string;
  [key: string]: any;
}

export default async function BlogPost({ params }: Params) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), "content", `${slug}.md`);

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);
  const { title, date } = data as FrontMatter;

  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkHtml)
    .process(content);
  const contentHtml = processedContent.toString();

  return (
    <div className="bg-white px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-black">
        <div className="mt-2 text-3xl font-bold py-8 px-4 rounded-lg bg-blue tracking-tight text-black sm:text-4xl">
          <h1>{title}</h1>
          <p className="text-sm text-slate-500 mt-4">{date}</p>
        </div>
        <div
          className="mt-6 prose prose-lg px-4"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        ></div>
      </div>
    </div>
  );
}
