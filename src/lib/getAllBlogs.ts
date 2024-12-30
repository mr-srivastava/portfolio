import glob from "fast-glob";
import * as path from "path";

async function importBlog(blogFileName: string) {
  const { meta, default: component } = await import(
    `@/app/blog/${blogFileName}`
  );

  return {
    slug: blogFileName.replace(/(\/page)?\.mdx$/, ""),
    ...meta,
    component,
  };
}

export async function getAllBlogs() {
  const blogFileNames = await glob(["*.mdx", "*/page.mdx"], {
    cwd: path.join(process.cwd(), "src/app/blog"),
  });

  const blogs = await Promise.all(blogFileNames.map(importBlog));
  return blogs.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  });
  return [];
}
