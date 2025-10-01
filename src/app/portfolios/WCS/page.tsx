import Image from "next/image";

export default function WCS() {
  return (
    <main className="bg-white">
      {/* Page Header */}
      <section className="py-10 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 hover:text-orange-500 transition-colors duration-300">WCS</h1>
      </section>

      {/* Intro Section */}
      <section className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-10 mb-12">
        <div className="md:col-span-2 space-y-6 text-black-700">
          <p>
            <strong>Washington Consular Services (WCS)</strong> offers document
            legalization and authentication services to businesses of all sizes
            and individuals across various industries, backed by over 40 years
            of experience.
          </p>
          <p>
            <strong>Legacy Software Modernization:</strong> Transformed Document
            Authentication & Legalization company, WCSS, for an enhanced service
            experience.
          </p>
          <p>
            The client was looking for a trusted partner who could support them
            with legacy software modernization of their outdated .NET web
            application hosted on-premises. Their existing business process was
            spread across multiple systems and involved manual intervention.
          </p>
          <p>
            Codoxy designed and implemented a unified system that enhanced their
            quality of service and customer experience.
          </p>
        </div>

        {/* Side Image */}
        <div className="flex justify-center">
          <Image
            src="/portfolios/wcs.jpg" // replace with your image
            alt="Mobile Example"
            width={600}
            height={408}
            className="rounded"
          />
        </div>
      </section>

      {/* Workflow Image */}
      <section className="max-w-4xl mx-auto px-4 mb-12 ml-50">
        <Image
          src="/portfolios/wcss_01.png" // replace with your image
          alt="Workflow"
          width={500}
          height={400}
          className="mx-auto"
        />
      </section>

      {/* Implementation Table */}
      <section className="max-w-5xl mx-auto px-4 mb-16">
        <h2 className="text-4xl text-black font-bold mb-6">Implementation</h2>
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 text-sm">
            <tbody>
              <tr className="border-b">
                <td className="p-3 font-semibold w-1/3">Industry</td>
                <td className="p-3">Professional Services</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-semibold">Documents Authenticated</td>
                <td className="p-3">
                  Legalized & authenticated more than 500,000 Documents
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-semibold">Transactions Per Day</td>
                <td className="p-3">25</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-semibold">Location</td>
                <td className="p-3">Maryland, USA</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-semibold">Technical Team Size</td>
                <td className="p-3">6 Members</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">Technology</td>
                <td className="p-3">
                  C#, .NET, AngularJS, Web API, SQL Server, SAGE Accounting
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Business Problem */}
      <section className="max-w-5xl mx-auto px-4 mb-16 text-gray-700">
        <h2 className="text-4xl font-bold text-black mb-4">Business Problem</h2>
        <p className="mb-6">
          A disjointed business process required significant manual intervention
          and repetitive data entry, resulting in frequent errors, process
          delays, revenue loss, and a poor customer experience.
        </p>
        <Image
          src="/portfolios/wcss_02.png" // replace with your image
          alt="Business Problem"
          width={624}
          height={276}
          className="mx-auto"
        />
      </section>

      {/* Legacy Software Modernization */}
      <section className="max-w-5xl mx-auto px-4 mb-16 text-gray-700">
        <h2 className=" text-4xl text-black mb-4">
          Legacy Software Modernization deployed using Microsoft Azure
        </h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            Provided more features, scalability, maintainability, and security
          </li>
          <li>
            Improved end customer experience and generated new revenue
            opportunities
          </li>
          <li>
            Improved Quality of Service and reduced revenue leakages and cost of
            customer service
          </li>
          <li>Be universally accessible from anywhere</li>
          <li>
            Following legacy software modernization, provided automated
            interaction with downstream systems, payment gateway and shipping
            companies
          </li>
        </ol>
        <div className="mt-8">
          <Image
            src="/portfolios/modernization.png" // replace with your image
            alt="Modernization"
            width={624}
            height={401}
            className="mx-auto"
          />
        </div>
      </section>

      {/* End Results */}
      <section className="max-w-5xl mx-auto px-4 mb-16 text-gray-700">
        <h2 className="text-3xl text-black font-bold mb-4">The End Results</h2>
        <p className="mb-4 font-bold text-bold text-black">
          The Re-engineered platform is live in production with a modern
          customer portal with:
        </p>
        <ol className="list-decimal pl-6 space-y-2 mb-6">
          <li>Wizard style order placement</li>
          <li>Online quotation and payment</li>
          <li>Self-service order tracking and modification</li>
        </ol>
        <p className="mb-4 text-black font-bold">The backend processing portal with:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Intuitive user interface</li>
          <li>Automated workflow with manual override</li>
          <li>
            Automatic customer creation and order entry in accounting system
          </li>
          <li>Integrated shipping label generation</li>
          <li>Integrated barcode reader</li>
        </ol>
      </section>
    </main>
  );
}
