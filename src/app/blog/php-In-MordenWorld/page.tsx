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
    image: "/blogs/azure.png",
  },
  {
    title: "Mastering Query Optimization: An In-Depth Guide",
    slug: "query-optimization",
    date: "August 9, 2024",
    author: "Vivek Verma",
    category: "IT Technology",
    excerpt:
      "Query optimization is a critical aspect of database management, ensuring that your SQL queries run efficiently and your applications perform at their best...",
    image: "/blogs/query.png",
  },
  {
    title: "PHP in Modern World",
    slug: "php-In-MordenWorld",
    date: "July 17, 2024",
    author: "Raman Jagga",
    category: "IT Technology",
    excerpt:
      "PHP, once the dominant server-side scripting language, has faced its fair share of criticism over the years. However, it remains a cornerstone of web development...",
    image: "/blogs/php.jpg",
  },
  {
    title: "Context Hook in ReactJS",
    slug: "contextHook-InReactjs",
    date: "July 17, 2024",
    author: "Raman Jagga",
    category: "Technology",
    excerpt:
      "Understanding the Context Hook in ReactJS has revolutionized front-end development with its component-based architecture and powerful hooks...",
    image: "/blogs/context.jpg",
  },
  {
    title: "WordPress Website",
    slug: "WordPress",
    date: "June 12, 2024",
    author: "Raman Jagga",
    category: "IT Technology",
    excerpt:
      "Creating a website on WordPress is an excellent way to establish an online presence, whether for a blog, a business, or a personal portfolio...",
    image: "/blogs/wordpress.jpg",
  },
  {
    title: "Future of ReactJS",
    slug: "Future-Reactjs",
    date: "March 22, 2024",
    author: "Naman Jindal",
    category: "Technology",
    excerpt:
      "The Future of ReactJS, Trends and Predictions. ReactJS has been a dominant force in the world of front-end development since its release by Facebook in 2013...",
    image: "/blogs/future-react.jpg",
  },
];
export default function phpInMordenWorld() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">
               {/* Featured image */}
          <div className="mb-6">
            <Image
              src="/blog/php.jpg" // change to your image
              alt="Blog cover"
              width={1200}
              height={640}
              className="w-full h-auto rounded"
              priority
            />
          </div>      

          {/* Meta row */}
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-600 mb-8">
                  <span className="flex items-center gap-1 text-orange-500">
                    <span>📅</span>
                    <span className="text-gray-700">July 24, 2024</span>
                  </span>

                  <span className="flex items-center gap-1 text-orange-500">
                    <span>👤</span>
                    <span className="text-gray-700"> Naman Jagtap</span>
                  </span>

                  <span className="flex items-center gap-1 text-orange-500">
                    <span>📘</span>
                    <span className="text-gray-700">IT Technology</span>
                  </span>
                </div>

          {/* Intro */}
          <p className="text-[15px] leading-7 text-gray-700 mb-8">
            PHP, once the dominant server-side scripting language, has faced its fair share of
            criticism over the years. However, it remains a cornerstone of web development,
            powering a significant portion of the internet. Let’s explore PHP’s role in the modern
            web development landscape and how it continues to evolve.
          </p>

          {/* H1 */}
          <h1 className="text-3xl font-extrabold tracking-tight mb-4">
            The Enduring Popularity of PHP
          </h1>

          <p className="text-[15px] leading-7 text-gray-700 mb-4">
            Despite the emergence of newer languages and frameworks, PHP remains widely used.
            According to W3Techs, PHP is used by around 78.9% of all websites with a known
            server-side programming language. This enduring popularity can be attributed to several
            factors:
          </p>

          <ul className="list-disc marker:text-black pl-6 space-y-2 text-[15px] leading-7 text-gray-700 mb-8">
            <li>
              <span className="font-semibold text-black">Simplicity:</span> PHP is easy to learn
              and use, making it accessible for beginners.
            </li>
            <li>
              <span className="font-semibold text-black">Wide Adoption:</span> Major platforms like
              WordPress, Joomla, and Drupal are built on PHP, ensuring a large user base.
            </li>
            <li>
              <span className="font-semibold text-black">Cost-Effective:</span> PHP is open-source
              and has a large repository of free and affordable tools and resources.
            </li>
          </ul>

          <h2 className="text-2xl font-extrabold tracking-tight mb-3">
            Modern PHP: Improvements and Advancements
          </h2>
          <p className="text-[15px] leading-7 text-gray-700 mb-4">
            PHP has come a long way since its early days. Modern PHP (from version 7 onwards) has
            introduced significant improvements, making it more competitive with other languages:
          </p>
          <ul className="list-disc marker:text-black pl-6 space-y-2 text-[15px] leading-7 text-gray-700 mb-8">
            <li>
              <span className="font-semibold text-black">Performance:</span> PHP 7 brought
              substantial performance enhancements, making it almost twice as fast as its
              predecessors. PHP 8 continues this trend with JIT (Just-In-Time) compilation.
            </li>
            <li>
              <span className="font-semibold text-black">Better Error Handling:</span> With
              throwable exceptions, error handling in PHP has become more robust.
            </li>
            <li>
              <span className="font-semibold text-black">Type Declarations:</span> PHP now supports
              scalar and return type declarations, improving code quality and maintainability.
            </li>
          </ul>

          <h2 className="text-2xl font-extrabold tracking-tight mb-3">
            The Ecosystem: Frameworks and Tools
          </h2>
          <p className="text-[15px] leading-7 text-gray-700 mb-4">
            The PHP ecosystem has grown to include powerful frameworks and tools that streamline
            development and improve productivity:
          </p>
          <ul className="list-disc marker:text-black pl-6 space-y-2 text-[15px] leading-7 text-gray-700 mb-8">
            <li>
              <span className="font-semibold text-black">Frameworks:</span> Laravel, Symfony, and
              CodeIgniter are among the most popular PHP frameworks, offering elegant syntax,
              powerful features, and strong community support.
            </li>
            <li>
              <span className="font-semibold text-black">Package Management:</span> Composer has
              revolutionized PHP development by providing an efficient dependency management system.
            </li>
            <li>
              <span className="font-semibold text-black">Development Environments:</span> Tools like
              PHPStorm and Visual Studio Code provide robust environments with debugging, linting,
              and VCS integration.
            </li>
          </ul>

          <h2 className="text-2xl font-extrabold tracking-tight mb-3">
            PHP in Full-Stack Development
          </h2>
          <p className="text-[15px] leading-7 text-gray-700 mb-4">
            PHP is not just for server-side scripting anymore. It has found its place in full-stack
            development with the help of modern tools and practices:
          </p>
          <ul className="list-disc marker:text-black pl-6 space-y-2 text-[15px] leading-7 text-gray-700 mb-8">
            <li>
              <span className="font-semibold text-black">APIs and Microservices:</span> PHP can be
              used to build RESTful APIs and microservices, often paired with React or Vue.
            </li>
            <li>
              <span className="font-semibold text-black">Docker and Containers:</span> PHP apps can
              be containerized with Docker for consistent environments.
            </li>
            <li>
              <span className="font-semibold text-black">
                Continuous Integration/Continuous Deployment (CI/CD):
              </span>{" "}
              CI/CD pipelines automate testing and deployments for faster, reliable releases.
            </li>
          </ul>

          <h2 className="text-2xl font-extrabold tracking-tight mb-3">Conclusion</h2>
          <p className="text-[15px] leading-7 text-gray-700 mb-4">
            PHP has proven its resilience and adaptability in the ever-evolving world of web
            development. With continuous improvements, a vibrant ecosystem, and strong community
            support, PHP remains a powerful choice. As we move forward, PHP’s role in full-stack
            development, API creation, and enterprise solutions will keep growing.
          </p>
          <p className="text-[15px] leading-7 text-gray-700 mb-6">
            For further reading, check the{" "}
            <a
              href="https://www.php.net/"
              target="_blank"
              className="text-orange-600 underline underline-offset-2"
            >
              official PHP website
            </a>{" "}
            and{" "}
            <a
              href="https://phptherightway.com/"
              target="_blank"
              className="text-orange-600 underline underline-offset-2"
            >
              PHP: The Right Way
            </a>
            .
          </p>

          {/* Tags */}
          <div className="mt-2 mb-10">
            <span className="inline-block text-xs px-2 py-1 border rounded bg-gray-100 text-gray-700">
              PHP
            </span>
          </div>

          {/* Prev / Next */}
          <div className="flex justify-between items-center border-t pt-6 text-sm">
            <Link href="/blog/query-optimization" className="group inline-flex items-center gap-2">
              <span className="text-gray-400">←</span>
              <span className="text-gray-700 group-hover:underline">
                Mastering Query Optimization
              </span>
            </Link>
            <Link href="/blog/contextHook-InReactjs" className="group inline-flex items-center gap-2">
              <span className="text-gray-700 group-hover:underline">
                Context Hook In ReactJS
              </span>
              <span className="text-gray-400">→</span>
            </Link>
          </div>
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

                  {/* Title + Date */}
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