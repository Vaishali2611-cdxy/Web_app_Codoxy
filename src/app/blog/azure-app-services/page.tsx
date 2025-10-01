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

export default function AzureAppServices() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">
                {/* Hero Section */}
                <div className="mb-8">
                    <Image
                    src="/blog/azure.png"
                    alt="Azure App Services"
                    width={1200}
                    height={400}
                    className="w-full rounded"
                    />
                </div>                

                          {/* Meta row */}
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-600 mb-8">
                  <span className="flex items-center gap-1 text-orange-500">
                    <span>📅</span>
                    <span className="text-gray-700">August 28, 2024</span>
                  </span>

                  <span className="flex items-center gap-1 text-orange-500">
                    <span>👤</span>
                    <span className="text-gray-700"> Naman Jagtap</span>
                  </span>

                  <span className="flex items-center gap-1 text-orange-500">
                    <span>📘</span>
                    <span className="text-gray-700"> • Development, IT,
                    Technology</span>
                  </span>
                </div>

                {/* Intro */}
                <p className="mb-6 text-gray-700 leading-relaxed">
                    Azure App Services is a fully managed platform-as-a-service (PaaS) that enables developers
                    to build, deploy, and scale web apps, mobile apps, and RESTful APIs. It’s a powerful and
                    flexible service that simplifies the process of managing applications while providing
                    enterprise-grade security, scalability, and integration capabilities.
                </p>
                <p className="mb-6 text-gray-700 leading-relaxed">
                    In this guide, we’ll explore Azure App Services in detail, covering its key features,
                    benefits, and how to get started.
                </p>

                {/* Sections */}
                <h2 className="text-2xl font-bold mt-10 mb-4">What is Azure App Services?</h2>
                <p className="mb-6 text-gray-700 leading-relaxed">
                    Azure App Services is a cloud platform that allows you to host web applications, mobile
                    backends, and RESTful APIs in any programming language without worrying about infrastructure
                    management. It supports a variety of languages and frameworks, including .NET, Java,
                    Node.js, PHP, Python, and Ruby, making it an ideal choice for developers who want to focus
                    on the code rather than the underlying infrastructure.
                </p>

                <h2 className="text-2xl font-bold mt-10 mb-4">
                    Key Components of Azure App Services
                </h2>
                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                    <li>Web Apps: Host and deploy scalable web applications using popular frameworks and languages.</li>
                    <li>API Apps: Create and host RESTful APIs that can be consumed by various clients.</li>
                    <li>Mobile Apps: Build backend services for mobile applications with features like offline sync, push notifications, and authentication.</li>
                    <li>Azure Functions: Execute code on-demand without having to manage infrastructure, ideal for event-driven and serverless architecture.</li>
                </ol>

                <h2 className="text-2xl font-bold mt-10 mb-4">Benefits of Using Azure App Services</h2>
                <ol className="list-decimal list-inside space-y-4 text-gray-700">
                    <li>
                    <strong>Ease of Use.</strong> Azure App Services abstracts much of the complexity involved
                    in deploying and managing web applications. With its intuitive interface and integration
                    with Visual Studio, GitHub, and other development tools, you can deploy your apps in
                    minutes.
                    </li>
                    <li>
                    <strong>Scalability.</strong> Scaling your applications is as simple as adjusting the
                    settings in the Azure portal. You can scale out to handle increased traffic by adding more
                    instances or scale up by moving to more powerful hardware. Auto-scaling features allow you
                    to dynamically adjust resources based on demand.
                    </li>
                    <li>
                    <strong>Security.</strong> Azure App Services provides built-in security features like
                    SSL/TLS encryption, authentication, and integration with Azure Active Directory (AAD).
                    </li>
                    <li>
                    <strong>Global Reach.</strong> With Azure’s global network of data centers, you can deploy
                    your applications closer to your users, reducing latency and improving performance.
                    </li>
                    <li>
                    <strong>Integration with Other Azure Services.</strong> Seamlessly integrates with other
                    Azure services like SQL Database, Azure Storage, and Azure Cognitive Services.
                    </li>
                </ol>

                <h2 className="text-2xl font-bold mt-10 mb-4">
                How to Get Started with Azure App Services
                </h2>

                <h3 className="text-xl font-semibold mt-6 mb-2">1. Creating an App Service</h3>
                <p className="text-gray-700 mb-4">
                To create an Azure App Service, follow these steps:
                </p>
                <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-6">
                <li>
                    <strong>Log in to the Azure Portal:</strong>{" "}
                    Go to{" "}
                    <Link
                    href="https://portal.azure.com"
                    target="_blank"
                    className="text-blue-600 hover:underline"
                    >
                    https://portal.azure.com
                    </Link>{" "}
                    and sign in with your Azure account.
                </li>
                <li>
                    <strong>Create a New App Service:</strong>
                    <ul className="list-disc list-inside ml-6 space-y-1">
                    <li>
                        Navigate to “Create a resource” and select “App Service.”
                    </li>
                    <li>
                        Choose your subscription, resource group, and give your app a unique name.
                    </li>
                    <li>
                        Select the runtime stack (e.g., .NET, Java, Node.js) and the operating system (Windows or Linux).
                    </li>
                    <li>
                        Choose a pricing tier based on your needs.
                    </li>
                    <li>
                        Click “Review + Create” and then “Create.”
                    </li>
                    </ul>
                </li>
                </ol>

                <h3 className="text-xl font-semibold mt-6 mb-2">2. Deploying Your Application</h3>
                <p className="text-gray-700 mb-4">
                Once your App Service is created, you can deploy your application using various methods:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li>
                    <strong>Continuous Deployment with GitHub or Azure Repos:</strong> Set up continuous deployment by linking your Azure App Service to a GitHub or Azure Repos repository. Azure will automatically deploy changes every time you push code.
                </li>
                <li>
                    <strong>Deploy from Visual Studio:</strong> Use Visual Studio’s built-in tools to deploy your application directly to Azure.
                </li>
                <li>
                    <strong>Zip Deploy:</strong> Upload a ZIP file containing your application files using the Azure CLI or Azure Portal.
                </li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-2">
                3. Configuring and Managing Your App Service
                </h3>
                <p className="text-gray-700 mb-4">
                After deployment, you can manage and configure your app through the Azure Portal:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li>
                    <strong>Application Settings:</strong> Configure environment variables, connection strings, and app settings without modifying your code.
                </li>
                <li>
                    <strong>Scaling:</strong> Adjust the number of instances or upgrade your plan to handle more traffic.
                </li>
                <li>
                    <strong>Monitoring and Diagnostics:</strong> Use Azure Monitor, Application Insights, and Log Analytics to track the performance and health of your application.
                </li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-2">4. Security and Authentication</h3>
                <p className="text-gray-700 mb-4">
                Azure App Services provides multiple options for securing your application:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li>
                    <strong>SSL/TLS Certificates:</strong> Enable HTTPS by default and use custom SSL certificates for your domains.
                </li>
                <li>
                    <strong>Authentication and Authorization:</strong> Integrate with Azure Active Directory, Google, Facebook, and other identity providers to manage user authentication.
                </li>
                <li>
                    <strong>IP Restrictions:</strong> Limit access to your application by setting up IP address restrictions.
                </li>
                </ul>

                <h2 className="text-2xl font-bold mt-10 mb-4">Advanced Features</h2>

                <div className="space-y-6 text-gray-700">
                <div>
                    <h3 className="text-xl font-semibold mb-2">1. Custom Domains and SSL</h3>
                    <p>
                    You can configure custom domains and secure them with SSL certificates. Azure App Services
                    allows you to easily bind custom domains and manage certificates, including free App Service
                    Managed Certificates.
                    </p>
                </div>

                <div>
                    <h3 className="text-xl font-semibold mb-2">2. Deployment Slots</h3>
                    <p>
                    Deployment slots allow you to deploy different versions of your application to separate
                    environments (e.g., staging, production). You can swap slots without downtime, making it easy
                    to test new features before going live.
                    </p>
                </div>

                <div>
                    <h3 className="text-xl font-semibold mb-2">3. Automated Backups</h3>
                    <p>
                    Azure App Services provides automated backups for your application and its associated data.
                    Configure backup frequency and retention policies to ensure your data is always safe.
                    </p>
                </div>

                <div>
                    <h3 className="text-xl font-semibold mb-2">4. DevOps Integration</h3>
                    <p>
                    Azure App Services integrates with Azure DevOps, GitHub Actions, and other CI/CD tools,
                    enabling automated build and deployment pipelines. This streamlines releases and helps maintain
                    high availability.
                    </p>
                </div>
                </div>


                {/* Next Blog Link */}
                <div className="flex justify-end mt-12">
                    <Link href="/blog/query-optimization" className="text-gray-600 hover:underline">
                    NEXT → Mastering Query Optimization
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
