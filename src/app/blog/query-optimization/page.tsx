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

export default function AzureAppServices() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">
                    {/* Hero Image */}
                    <div className="mb-8">
                        <Image
                        src="/blog/query.png"
                        alt="Query Optimization"
                        width={1200}
                        height={400}
                        className="w-full rounded"
                        />
                    </div>

                    {/* Meta row */}
                    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-600 mb-8">
                      <span className="flex items-center gap-1 text-orange-500">
                        <span>📅</span>
                        <span className="text-gray-700">August 9, 2024</span>
                      </span>

                      <span className="flex items-center gap-1 text-orange-500">
                        <span>👤</span>
                        <span className="text-gray-700">Vivek Verma</span>
                      </span>

                      <span className="flex items-center gap-1 text-orange-500">
                        <span>📘</span>
                        <span className="text-gray-700">IT Technology</span>
                      </span>
                    </div>


                    {/* Intro */}
                    <p className="mb-6 text-gray-700 leading-relaxed">
                        Query optimization is a critical aspect of database management, ensuring that your SQL queries run
                        efficiently and your applications perform at their best. This guide dives into the key concepts of query
                        optimization, providing comprehensive insights and practical techniques to enhance your database
                        performance.
                    </p>

                    {/* Why It Matters */}
                    <h2 className="text-2xl font-bold mt-10 mb-4">Why Query Optimization Matters</h2>
                    <p className="mb-6 text-gray-700 leading-relaxed">
                        Efficient queries lead to faster application performance, reduced server load, and a better user experience.
                        Poorly optimized queries can cause response time issues, increased server costs, and potential application
                        failures.
                    </p>

                    {/* Execution Plan */}
                    <h2 className="text-2xl font-bold mt-10 mb-4">Understanding the Query Execution Plan</h2>
                    <p className="mb-6 text-gray-700 leading-relaxed">
                        A query execution plan is a roadmap the database engine uses to execute a query. It shows how the
                        database retrieves the requested data, detailing the steps and operations involved.
                    </p>

                    <h3 className="text-xl font-semibold mt-6 mb-2">Viewing the Execution Plan</h3>
                    <p className="mb-4 text-gray-700">In SQL Server, you can view the execution plan using the EXPLAIN keyword:</p>
                    <pre className="bg-gray-100 p-4 rounded mb-6 overflow-x-auto">
                      {`EXPLAIN SELECT * FROM employees WHERE department = 'Sales';`}
                    </pre>

                    <p className="mb-4 text-gray-700">For MySQL:</p>
                    <pre className="bg-gray-100 p-4 rounded mb-6 overflow-x-auto">
                       {`EXPLAIN SELECT * FROM employees WHERE department = 'Sales';`} 
                    </pre>

                    <p className="mb-4 text-gray-700">In PostgreSQL:</p>
                    <pre className="bg-gray-100 p-4 rounded mb-6 overflow-x-auto">
                       {`EXPLAIN ANALYZE SELECT * FROM employees WHERE department = 'Sales';`} 
                    </pre>

                    {/* Key Elements */}
                    <h2 className="text-2xl font-bold mt-10 mb-4">Key Elements of an Execution Plan</h2>
                    <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
                        <li><strong>Seq Scan:</strong> Sequentially scans all rows in the table.</li>
                        <li><strong>Index Scan:</strong> Uses an index to find rows more quickly.</li>
                        <li><strong>Nested Loop Join:</strong> Combines rows from two tables using a nested loop.</li>
                        <li><strong>Hash Join:</strong> Uses a hash table to join two tables.</li>
                    </ul>

                    {/* Techniques */}
                    <h2 className="text-2xl font-bold mt-10 mb-4">Techniques for Query Optimization</h2>

                    <h3 className="text-xl font-semibold mt-6 mb-2">1. Use Indexes Wisely</h3>
                    <p className="mb-4 text-gray-700">
                        Indexes can significantly speed up data retrieval. However, they also introduce overhead for write operations.
                        Use indexes on columns frequently used in WHERE, JOIN, and ORDER BY clauses.
                    </p>
                    <p className="font-semibold mb-2">Creating an Index</p>
                    <pre className="bg-gray-100 p-4 rounded mb-6 overflow-x-auto">
                        CREATE INDEX idx_department ON employees (department);
                    </pre>

                    <h3 className="text-xl font-semibold mt-6 mb-2">2. Avoid Select *</h3>
                    <p className="mb-6 text-gray-700">
                        Selecting all columns can be inefficient, especially if you only need a few. Specify only the columns you need.
                    </p>

                    <h3 className="text-xl font-semibold mt-6 mb-2">3. Use Joins Efficiently</h3>
                    <p className="mb-4 text-gray-700">
                        Joins can be expensive. Ensure that the joined columns are indexed and avoid unnecessary joins.
                    </p>
                    <pre className="bg-gray-100 p-4 rounded mb-6 overflow-x-auto">
                        {`SELECT e.name, d.department_name
                        FROM employees e
                        JOIN departments d ON e.department_id = d.id;`}
                    </pre>

                    <h3 className="text-xl font-semibold mt-6 mb-2">4. Optimize Subqueries</h3>
                    <p className="mb-4 text-gray-700">Subqueries can often be rewritten as joins or with EXISTS for better performance.</p>
                    <pre className="bg-gray-100 p-4 rounded mb-6 overflow-x-auto">
                        {`-- Inefficient subquery
                        SELECT name FROM employees WHERE department_id IN (
                        SELECT id FROM departments WHERE department_name = 'Sales'
                        );

                        -- Optimized with join
                        SELECT e.name
                        FROM employees e
                        JOIN departments d ON e.department_id = d.id
                        WHERE d.department_name = 'Sales';`}
                    </pre>

                    <h3 className="text-xl font-semibold mt-6 mb-2">5. Limit the Number of Rows Returned</h3>
                    <p className="mb-4 text-gray-700">
                        Use LIMIT or TOP to restrict the number of rows returned by a query, especially in large datasets.
                    </p>
                    <pre className="bg-gray-100 p-4 rounded mb-6 overflow-x-auto">
                        {`-- MySQL
                        SELECT name FROM employees WHERE department = 'Sales' LIMIT 10;

                        -- SQL Server
                        SELECT TOP 10 name FROM employees WHERE department = 'Sales';`}
                    </pre>

                    <h3 className="text-xl font-semibold mt-6 mb-2">6. Analyze and Tune Slow Queries</h3>
                    <p className="mb-6 text-gray-700">
                        Use profiling tools and query logs to identify and optimize slow queries. Tools like MySQL’s slow_query_log
                        and SQL Server’s Query Store can be invaluable.
                    </p>

                    <h3 className="text-xl font-semibold mt-6 mb-2">7. Partition Large Tables</h3>
                    <p className="mb-6 text-gray-700">
                        Partitioning can help manage large tables by dividing them into smaller, more manageable pieces, improving
                        query performance and maintenance.
                    </p>

                    {/* External Resources */}
                    <h2 className="text-2xl font-bold mt-10 mb-4">External Resources</h2>
                    <ul className="list-disc list-inside space-y-2 text-blue-600 mb-6">
                        <li>
                        <Link
                            href="https://dev.mysql.com/doc/refman/8.0/en/optimization.html"
                            target="_blank"
                            className="hover:underline"
                        >
                            MySQL Query Optimization
                        </Link>
                        </li>
                        <li>
                        <Link
                            href="https://www.postgresql.org/docs/current/performance-tips.html"
                            target="_blank"
                            className="hover:underline"
                        >
                            PostgreSQL Performance Tips
                        </Link>
                        </li>
                        <li>
                        <Link
                            href="https://learn.microsoft.com/en-us/sql/relational-databases/performance/performance-tuning-sql-server"
                            target="_blank"
                            className="hover:underline"
                        >
                            SQL Server Query Performance Tuning
                        </Link>
                        </li>
                    </ul>

                    {/* Conclusion */}
                    <h2 className="text-2xl font-bold mt-10 mb-4">Conclusion</h2>
                    <p className="mb-6 text-gray-700 leading-relaxed">
                        Query optimization is essential for maintaining high-performance database systems. By understanding
                        execution plans, using indexes wisely, and applying various optimization techniques, you can ensure
                        your queries run efficiently and your applications perform seamlessly.
                    </p>

                    {/* Prev / Next Links */}
                    <div className="flex justify-between mt-12">
                        <Link href="/blog/azure-app-services" className="text-gray-600 hover:underline">
                        ← PREVIOUS: A Guide to Azure App Services
                        </Link>
                        <Link href="/blog/php-In-MordenWorld" className="text-gray-600 hover:underline">
                        NEXT → PHP in Modern World
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
