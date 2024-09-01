import { Metadata } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Header from "@/components/Header";

interface Post {
  slug: string;
  frontmatter: {
    title: string;
    date: string;
    description?: string;
  };
}

export const metadata: Metadata = {
  title: "shige",
  description: "personal site of shige",
  openGraph: {
    title: "shige",
    description: "personal site of shige",
    siteName: "personal site of shige",
    locale: "jp",
    type: "website",
  },
};

export default async function Home() {
  const postsDirectory = path.join(process.cwd(), "content");
  const fileNames = fs.readdirSync(postsDirectory);

  const posts: Post[] = await Promise.all(
    fileNames.map(async (fileName) => {
      const filePath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug: fileName.replace(".md", ""),
        frontmatter: data as Post["frontmatter"],
      };
    })
  ).then((posts) =>
    posts.sort(
      (a, b) =>
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime()
    )
  );

  return (
    <div>
      <Header />
      <div className="py-8 px-4 mx-auto rounded-lg flex flex-col items-center text-black bg-blue container max-w-3xl">
        <h1 className="text-3xl font-bold">ハイサイ👋🏻</h1>
        <div className="mt-4">
          <p className="text-lg">
            shige、東京で働ちょーるソフトウェアエンジニアやさ。
          </p>
        </div>
      </div>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <div className="space-y-16 pt-10 sm:pt-16">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="flex max-w-xl flex-col items-start justify-between"
                >
                  <div className="group relative">
                    <div className="flex items-center gap-x-4 text-xs">
                      <div className="text-slate-500">
                        {post.frontmatter.date}
                      </div>
                    </div>
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-black">
                      <Link href={`/blog/${post.slug}`}>
                        {post.frontmatter.title}
                      </Link>
                    </h3>
                    <p
                      className="mt-3 line-clamp-3 text-sm leading-6 text-black"
                      dangerouslySetInnerHTML={{
                        __html: `${post.frontmatter.description}`,
                      }}
                    ></p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
