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

export default function WordPressBlog() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-10">
        {/* LEFT CONTENT */}
        <div className="lg:col-span-2 space-y-8">
          {/* Hero Image */}
          <div>
            <Image
              src="/blog/wordpress.jpg"
              alt="WordPress Website"
              width={1200}
              height={400}
              className="w-full rounded"
            />
          </div>
          
          {/* Meta row */}
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-600 mb-8">
                  <span className="flex items-center gap-1 text-orange-500">
                    <span>📅</span>
                    <span className="text-gray-700">June 18, 2024</span>
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


          {/* Title */}
          <h1 className="text-3xl font-bold">WordPress Website</h1>

          {/* Intro */}
          <p className="text-gray-700 leading-relaxed">
            Creating a website on WordPress is an excellent way to establish an
            online presence, whether for a blog, a business, or a personal
            portfolio. WordPress offers a plethora of themes that can be
            customized to fit your specific needs. Here’s a step-by-step guide
            to developing a website using a WordPress theme.
          </p>

          {/* Steps */}
          <h2 className="text-2xl font-bold mt-10 mb-4">
            Step 1: Choose a Domain and Hosting Provider
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Before you start building your WordPress site, you need a domain
            name and a hosting provider. Here’s how to get started:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
            <li>
              <strong>Choose a Domain Name:</strong> Pick a memorable and
              relevant website address (e.g., www.yourwebsite.com).
            </li>
            <li>
              <strong>Select a Hosting Provider:</strong> Popular options
              include Bluehost, SiteGround, and WP Engine. Many providers offer
              one-click WordPress installation.
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-4">Step 2: Install WordPress</h2>
          <p className="text-gray-700 mb-4">
            Once you have your domain and hosting set up, install WordPress:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
            <li>Log into your hosting account.</li>
            <li>Find the WordPress installer tool.</li>
            <li>Click to install WordPress and follow instructions.</li>
            <li>Create an admin username and password.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-4">
            Step 3: Choose and Install a WordPress Theme
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
            <li>
              Access Dashboard: Go to{" "}
              <code>www.yourwebsite.com/wp-admin</code>.
            </li>
            <li>
              Navigate to Themes: In sidebar → Appearance → Themes.
            </li>
            <li>Click “Add New” to browse free/premium themes.</li>
            <li>Search, preview, and install a theme you like.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-4">Step 4: Customize Your Theme</h2>
          <p className="text-gray-700 mb-4">
            After activating your theme, customize it:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
            <li>Modify site identity (name, tagline).</li>
            <li>Change colors, fonts, and background.</li>
            <li>Add widgets (sidebars, footers).</li>
            <li>Upload logo/header image.</li>
            <li>Publish changes when satisfied.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-4">
            Step 5: Add Content to Your Website
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
            <li>
              Add Pages: Home, About, Contact, etc. (Pages → Add New).
            </li>
            <li>
              Add Blog Posts: Go to Posts → Add New, write content, and publish.
            </li>
            <li>
              Assign categories/tags where applicable.
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-4">Step 6: Install Plugins</h2>
          <p className="text-gray-700 mb-4">
            Plugins extend WordPress functionality. To install:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
            <li>Go to Plugins → Add New.</li>
            <li>Search for plugins like SEO, security, performance.</li>
            <li>Click “Install Now” → “Activate”.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-4">
            Step 7: Optimize and Maintain Your Website
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
            <li>Update regularly (themes, plugins, WordPress).</li>
            <li>Use plugins like UpdraftPlus for backups.</li>
            <li>
              Install SEO plugins like Yoast SEO for better visibility.
            </li>
            <li>
              Use Google Analytics to monitor performance and speed.
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-4">Conclusion</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Developing a website on WordPress using a theme is a straightforward
            process that combines creativity with functionality. By following
            these steps, you can create a customized website that meets your
            needs and engages your audience. Happy building!
          </p>

          {/* Tags */}
          {/* <div className="flex gap-2 mb-10">
            <span className="px-2 py-1 bg-gray-100 border rounded text-xs">
              WordPress
            </span>
          </div> */}

          {/* Prev/Next */}
          <div className="flex justify-between items-center border-t pt-6 text-sm">
            <Link
              href="/blog/contextHook-InReactjs"
              className="hover:underline text-gray-600"
            >
              ← Context Hook in ReactJS
            </Link>
            <Link
              href="/blog/Future-Reactjs"
              className="hover:underline text-gray-600"
            >
              Future of ReactJS →
            </Link>
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
