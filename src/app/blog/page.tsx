import { blogs } from "@/data/blogs";
import Link from "next/link";

export default function BlogListPage() {
  return (
    <div className="max-w-5xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-extrabold text-teal-800 mb-10">Explore Articles</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {blogs.map((blog) => (
          <Link key={blog.slug} href={`/blog/${blog.slug}`}>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:scale-[1.01] transition-transform cursor-pointer">
              <h2 className="text-xl font-semibold text-cyan-900 mb-2">{blog.title}</h2>
              <p className="text-gray-700">{blog.summary}</p>
              <p className="text-cyan-600 font-semibold mt-2">Read more →</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}