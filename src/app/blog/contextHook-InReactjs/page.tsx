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
    slug: "php-In-MordenWorld",
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
    excerpt:
      "ReactJS has revolutionized front-end development with its component-based architecture...",
    image: "/blog/context.jpg",
  },
  {
    title: "WordPress Website",
    slug: "WordPress",
    date: "June 12, 2024",
    author: "Raman Jagga",
    category: "IT Technology",
    excerpt: "Creating a website on WordPress is an excellent way to establish an online presence...",
    image: "/blog/wordpress.jpg",
  },
];

export default function ContextHookBlog() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-10">
        {/* LEFT CONTENT */}
        <div className="lg:col-span-2 space-y-8">
          {/* Hero Image */}
          <div>
            <Image
              src="/blog/context.jpg"
              alt="Context Hook in ReactJS"
              width={1200}
              height={400}
              className="w-full rounded"
            />
          </div>


          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-600 mb-8">
            <span className="flex items-center gap-1 text-orange-500">
              <span>📅</span>
              <span className="text-gray-700">July 22, 2024</span>
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
          <h1 className="text-3xl font-bold">
            Understanding the Context Hook in ReactJS
          </h1>

          {/* Intro */}
          <p className="text-gray-700 leading-relaxed">
            ReactJS has revolutionized front-end development with its
            component-based architecture and powerful hooks. Among these hooks,
            the Context Hook stands out as a crucial tool for managing state and
            passing data through the component tree without prop drilling. In
            this blog, we will explore the Context Hook, its benefits, and how
            to use it effectively in your React applications.
          </p>

          {/* Sections */}
          <h2 className="text-2xl font-bold mt-10 mb-4">
            What is the Context Hook?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The Context Hook, introduced in React 16.8, provides a way to share
            values like state or functions between components without passing
            props down manually at every level. It helps to avoid the “prop
            drilling” problem, where you have to pass props through several
            layers of components.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">
            When to Use the Context Hook
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The Context Hook is particularly useful in situations where data
            needs to be accessible by many components at different nesting
            levels. Common use cases include:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
            <li>
              <strong>Theme Management:</strong> Switching themes in an
              application.
            </li>
            <li>
              <strong>User Authentication:</strong> Sharing user information
              across the application.
            </li>
            <li>
              <strong>Localization:</strong> Providing language settings to
              various components.
            </li>
          </ul>
          <p className="text-gray-700">
            For more detailed scenarios, you can refer to the{" "}
            <Link
              href="https://react.dev/"
              target="_blank"
              className="text-orange-600 underline"
            >
              official React documentation
            </Link>
            .
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">Creating a Context</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Creating a context in React is straightforward. You need to:
          </p>
          <ol className="list-decimal list-inside text-gray-700 space-y-2 mb-6">
            <li>Create a Context object.</li>
            <li>Provide a value for the context.</li>
            <li>Consume the context value in the required components.</li>
          </ol>

          <p className="mb-4">Here’s a simple example:</p>
          <pre className="bg-gray-50 border-l-4 border-orange-500 p-4 text-sm overflow-x-auto mb-6 italic">
                {`import React, { createContext, useContext, useState } from 'react';

                // Create a Context
                const ThemeContext = createContext();

                // Create a provider component
                const ThemeProvider = ({ children }) => {
                  const [theme, setTheme] = useState("light");
                  return (
                    <ThemeContext.Provider value={{ theme, setTheme }}>
                      {children}
                    </ThemeContext.Provider>
                  );
                };

                // Consume the context in a component
                const ThemeSwitcher = () => {
                  const { theme, setTheme } = useContext(ThemeContext);
                  return (
                    <div>
                      <p>Current Theme: {theme}</p>
                      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
                        Toggle Theme
                      </button>
                    </div>
                  );
                };

                const App = () => (
                  <ThemeProvider>
                    <ThemeSwitcher />
                  </ThemeProvider>
                );

                export default App;`}
          </pre>

          <p className="text-gray-700 mb-6">
            In this example, <code>ThemeProvider</code> provides the theme
            context to its child components, and <code>ThemeSwitcher</code>{" "}
            consumes it using the <code>useContext</code> hook.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">
            Benefits of the Context Hook
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
            <li>
              <strong>Avoids Prop Drilling:</strong> Simplifies the passing of
              data through the component tree.
            </li>
            <li>
              <strong>Improves Code Maintainability:</strong> Makes the code
              cleaner and easier to manage.
            </li>
            <li>
              <strong>Encourages Reusability:</strong> Promotes reusability of
              components and context providers.
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-4">
            Performance Considerations
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            While the Context Hook is powerful, it should be used wisely.
            Overusing context can lead to performance issues, especially when
            frequent updates occur. To mitigate this, consider:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
            <li>
              Splitting context into smaller, more focused contexts.
            </li>
            <li>
              Using memoization techniques with <code>useMemo</code> and{" "}
              <code>useCallback</code>.
            </li>
          </ul>
          <p className="text-gray-700">
            For in-depth performance tips, check out{" "}
            <Link
              href="https://kentcdodds.com/blog/optimize-context-value"
              target="_blank"
              className="text-orange-600 underline"
            >
              Kent C. Dodds’ article on optimizing context
            </Link>
            .
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">Conclusion</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The Context Hook in ReactJS is an invaluable tool for managing state
            and sharing data across your application efficiently. By
            understanding and implementing the Context Hook properly, you can
            build more scalable and maintainable applications.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            For further reading, visit{" "}
            <Link
              href="https://react.dev/reference/react/useContext"
              target="_blank"
              className="text-orange-600 underline"
            >
              React’s official guide on Context
            </Link>{" "}
            and explore more{" "}
            <Link
              href="https://react.dev/learn/context"
              target="_blank"
              className="text-orange-600 underline"
            >
              advanced patterns and techniques
            </Link>
            .
          </p>

          {/* Tags */}
          <div className="flex gap-2 mb-10">
            <span className="px-2 py-1 bg-gray-100 border rounded text-xs">
              Context Hook
            </span>
            <span className="px-2 py-1 bg-gray-100 border rounded text-xs">
              ReactJS
            </span>
          </div>

          {/* Prev/Next */}
          <div className="flex justify-between items-center border-t pt-6 text-sm">
            <Link
              href="/blog/php-In-MordenWorld"
              className="hover:underline text-gray-600"
            >
              ← PHP in Modern World
            </Link>
            <Link
              href="/blog/WordPress"
              className="hover:underline text-gray-600"
            >
              WordPress Website →
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
