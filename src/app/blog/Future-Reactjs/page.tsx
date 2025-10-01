import Image from "next/image";
import Link from "next/link";

const posts = [
  {
    title: "A Guide to Azure App Services",
    slug: "azure-app-services",
    date: "August 23, 2024",
    author: "Raman Jagga",
    category: "Development, IT Technology",
    excerpt: "Azure App Services is a fully managed platform-as-a-service...",
    image: "/blog/azure.png",
  },
  {
    title: "Mastering Query Optimization: An In-Depth Guide",
    slug: "query-optimization",
    date: "August 9, 2024",
    author: "Vivek Verma",
    category: "IT Technology",
    excerpt: "Query optimization is a critical aspect of database management...",
    image: "/blog/query.png",
  },
  {
    title: "PHP in Modern World",
    slug: "php-In-ModernWorld",
    date: "July 17, 2024",
    author: "Raman Jagga",
    category: "IT Technology",
    excerpt: "PHP, once the dominant server-side scripting language...",
    image: "/blog/php.jpg",
  },
  {
    title: "Context Hook in ReactJS",
    slug: "contextHook-InReactjs",
    date: "July 22, 2024",
    author: "Naman Jagtap",
    category: "IT Technology",
    excerpt: "ReactJS has revolutionized front-end development...",
    image: "/blog/context.jpg",
  },
  {
    title: "WordPress Website",
    slug: "WordPress",
    date: "June 18, 2024",
    author: "Naman Jagtap",
    category: "IT Technology",
    excerpt: "Creating a website on WordPress is an excellent way...",
    image: "/blog/wordpress.jpg",
  },
  {
    title: "Future of ReactJS",
    slug: "Future-Reactjs",
    date: "May 23, 2024",
    author: "Naman Jagtap",
    category: "IT Technology",
    excerpt:
      "The Future of ReactJS: Trends and Predictions. What does the future hold for ReactJS? Let’s explore...",
    image: "/blog/future-react.jpg",
  },
];

export default function FutureReactBlog() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-10">
        {/* LEFT CONTENT */}
        <div className="lg:col-span-2 space-y-8">
          {/* Hero Image */}
          <div>
            <Image
              src="/blog/future-react.jpg"
              alt="Future of ReactJS"
              width={1200}
              height={400}
              className="w-full rounded"
            />
          </div>


          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-600 mb-8">
            <span className="flex items-center gap-1 text-orange-500">
              <span>📅</span>
              <span className="text-gray-700">May 23, 2024</span>
            </span>

            <span className="flex items-center gap-1 text-orange-500">
              <span>👤</span>
              <span className="text-gray-700">✍️ Naman Jagtap</span>
            </span>

            <span className="flex items-center gap-1 text-orange-500">
              <span>📘</span>
              <span className="text-gray-700">🏷️ IT Technology</span>
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold">
            The Future of ReactJS: Trends and Predictions
          </h1>

          {/* Intro */}
          <p className="text-gray-700 leading-relaxed">
            ReactJS has been a dominant force in the world of front-end
            development since its release by Facebook in 2013. As a powerful
            JavaScript library for building user interfaces, React has set the
            standard for component-based development and fostered a robust
            ecosystem. But what does the future hold for ReactJS? Here are some
            trends and predictions that highlight where React is headed.
          </p>

          {/* Sections */}
          <h2 className="text-xl font-semibold mt-8 mb-2">
            1. Continued Popularity and Community Growth
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            ReactJS boasts one of the most vibrant and active communities in the
            development world. This community-driven development ensures React
            continues to evolve with regular updates and improvements. As more
            developers join the React ecosystem, we can expect a continuous flow
            of new ideas, tools, and best practices that will further cement
            React’s position as a leading UI library.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2">
            2. Concurrent Mode and Server Components
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            React’s team has been working on several cutting-edge features, most
            notably Concurrent Mode and Server Components. Concurrent Mode
            allows React applications to be more responsive by interrupting
            long-running tasks to handle high-priority updates. Server
            Components enable rendering on the server, reducing JavaScript
            needed on the client side and improving load times.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2">
            3. Integration with Modern Technologies
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            React is likely to integrate more seamlessly with modern
            technologies such as WebAssembly, improved TypeScript tooling, and
            closer integration with serverless architectures. Its adaptability
            will allow it to remain relevant as new paradigms emerge.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2">
            4. Improved Developer Experience
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            React development tools like Create React App, Next.js, and DevTools
            have simplified workflows. Future improvements will likely focus on
            making React more accessible, with better documentation, APIs, and
            tooling for both beginners and experienced developers.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2">
            5. Enhanced Performance and Optimization
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Performance has always been a critical aspect of React. With Fiber
            architecture, React has already seen significant improvements.
            Future updates will focus on better handling of large apps, improved
            rendering times, and more efficient state management.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2">6. Ecosystem Expansion</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            React’s ecosystem continues to expand with frameworks like Next.js,
            Gatsby, and React Native. These tools extend React beyond web apps
            into mobile, static site generation, and enterprise-grade
            applications. We can expect more specialized tools to meet evolving
            developer needs.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2">
            7. Focus on Accessibility and Inclusivity
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Accessibility is becoming increasingly important, and React is
            expected to prioritize inclusivity in design principles. Improved
            guidelines and tools will help developers build apps that are
            accessible to all, including those with disabilities.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">Conclusion</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The future of ReactJS looks incredibly promising. With a strong
            community, continuous innovation, and a commitment to performance
            and accessibility, React is well-positioned to remain a cornerstone
            of front-end development for years to come. Developers can look
            forward to leveraging React’s advancements to build more efficient,
            responsive, and user-friendly applications. As the web evolves,
            React will undoubtedly adapt and thrive, maintaining its crucial
            role in the developer’s toolkit.
          </p>

          {/* Tags */}
          <div className="flex gap-2 mb-10">
            <span className="px-2 py-1 bg-gray-100 border rounded text-xs">
              ReactJS
            </span>
          </div>

          {/* Prev/Next */}
          <div className="flex justify-between items-center border-t pt-6 text-sm">
            <Link
              href="/blog/WordPress"
              className="hover:underline text-gray-600"
            >
              ← WordPress Website
            </Link>
            <span className="text-gray-400"> </span>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
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
                  <Link href={`/blog/${post.slug}`}>
                    <div className="relative w-16 h-16 bg-gray-100 rounded overflow-hidden flex-shrink-0">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </Link>
                  <div>
                    <Link
                      href={`/blog/${post.slug}`}
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
