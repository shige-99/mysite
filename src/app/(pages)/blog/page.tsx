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

export default async function Blog() {
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
    <div className="bg-white">
      <Header />
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="space-y-16 pt-10 sm:pt-16">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="flex max-w-xl flex-col items-start justify-between"
              >
                <div className="group relative">
                  <div className="flex items-center gap-x-4 text-xs">
                    <div className="text-gray-500">{post.frontmatter.date}</div>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-blue-700 group-hover:text-blue-400">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="mt-3 text-lg font-semibold leading-6 text-blue-700 group-hover:text-blue-400"
                    >
                      {post.frontmatter.title}
                    </Link>
                  </h3>
                  <p
                    className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600"
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
  );
}
