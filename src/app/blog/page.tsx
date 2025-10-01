// app/blog/page.tsx (Next.js 13+ App Router)
// or pages/blog.tsx (Next.js 12 Pages Router)

import Image from "next/image";
import Link from "next/link";

const posts = [
  {
    title: "A Guide to Azure App Services",
    slug: "azure-app-services",
    date: "August 23, 2024",
    author: "Raman Jagga",
    category: "Development, IT Technology",
    excerpt:
      "Azure App Services is a fully managed platform-as-a-service (PaaS) that enables developers to build, deploy, and scale web apps, mobile apps, and RESTful APIs. It’s a powerful and flexible...",
    image: "/blog/azure.png",
  },
  {
    title: "Mastering Query Optimization: An In-Depth Guide",
    slug: "query-optimization",
    date: "August 9, 2024",
    author: "Vivek Verma",
    category: "IT Technology",
    excerpt:
      "Query optimization is a critical aspect of database management, ensuring that your SQL queries run efficiently and your applications perform at their best...",
    image: "/blog/query.png",
  },
  {
    title: "PHP in Modern World",
    slug: "php-In-MordenWorld",
    date: "July 17, 2024",
    author: "Raman Jagga",
    category: "IT Technology",
    excerpt:
      "PHP, once the dominant server-side scripting language, has faced its fair share of criticism over the years. However, it remains a cornerstone of web development...",
    image: "/blog/php.jpg",
  },
  {
    title: "Context Hook in ReactJS",
    slug: "contextHook-InReactjs",
    date: "July 17, 2024",
    author: "Raman Jagga",
    category: "Technology",
    excerpt:
      "Understanding the Context Hook in ReactJS has revolutionized front-end development with its component-based architecture and powerful hooks...",
    image: "/blog/context.jpg",
  },
  {
    title: "WordPress Website",
    slug: "WordPress",
    date: "June 12, 2024",
    author: "Raman Jagga",
    category: "IT Technology",
    excerpt:
      "Creating a website on WordPress is an excellent way to establish an online presence, whether for a blog, a business, or a personal portfolio...",
    image: "/blog/wordpress.jpg",
  },
  {
    title: "Future of ReactJS",
    slug: "Future-Reactjs",
    date: "March 22, 2024",
    author: "Naman Jindal",
    category: "Technology",
    excerpt:
      "The Future of ReactJS, Trends and Predictions. ReactJS has been a dominant force in the world of front-end development since its release by Facebook in 2013...",
    image: "/blog/future-react.jpg",
  },
];

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Left: Blog List */}
        <div className="lg:col-span-2 space-y-10 max-l-2xl">
          {posts.map((post, idx) => (
            <article
              key={idx}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              {/* Image */}
              <Link href={`/blog/${post.slug}`}>
                <div className="relative w-full h-118 bg-gray-100">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              </Link>
              

              {/* Content */}
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-600 mb-8">
                  <span className="flex items-center gap-1 text-orange-500">
                    <span>📅</span>
                    <span className="text-gray-700">August 23, 2024</span>
                  </span>

                  <span className="flex items-center gap-1 text-orange-500">
                    <span>👤</span>
                    <span className="text-gray-700">Naman Jagtap</span>
                  </span>

                  <span className="flex items-center gap-1 text-orange-500">
                    <span>📘</span>
                    <span className="text-gray-700">Development, IT Technology</span>
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`}
                  className="text-orange-600 font-medium hover:underline"
                >
                  Continue Reading →
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Right: Sticky Sidebar */}
        <aside className="lg:sticky lg:top-24 h-fit">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-lg font-semibold border-b pb-2 mb-4">
              <span className="border-b-2 border-orange-500 pb-1">
                Recent Posts
              </span>
            </h3>
            <ul className="space-y-5">
              {posts.slice(0, 5).map((post, idx) => (
                <li
                  key={idx}
                  className="flex items-center space-x-4 border-b pb-4 last:pb-0 last:border-0"
                >
                  {/* Thumbnail */}
                  <Link href={`blog/${post.slug}`}>
                    <div className="relative w-16 h-16 bg-gray-100 rounded overflow-hidden flex-shrink-0">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </Link>

                  {/* Title + Date */}
                  <div>
                    <Link
                      href={`blog/${post.slug}`}
                      className="text-sm font-medium hover:underline line-clamp-2"
                    >
                      {post.title}
                    </Link>
                    <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                      📅 {post.date}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}