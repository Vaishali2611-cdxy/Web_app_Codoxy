import Image from "next/image";

export default function XperimentorPage() {
  return (
    <main className="bg-white">
      {/* Page Header */}
      <section className="py-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Xperimentor</h1>
      </section>

      {/* Intro Section */}
      <section className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-10 mb-12">
        <div className="md:col-span-2 space-y-6 text-gray-700">
          <p>
            <strong>Xperimentor</strong> is a SaaS-based tool that has transformed the
            traditional chalk-and-talk science class into an environment buzzing with
            curiosity and joy. It combines hands-on learning with curriculum-based content,
            assessments, and training to provide a holistic learning experience.
          </p>
          <p>
            The application has transformed dull classrooms into experiential learning hubs.
            With its extensive learning resources, assessments, and reports, teachers can
            efficiently cover their syllabus.
          </p>
          <p>
            Meanwhile, students independently ask questions, investigate concepts, and form
            their own explanations, similar to how scientists explore new ideas. This
            approach is helping students develop 21st-century skills, ensuring they are
            well-prepared for the future.
          </p>
        </div>

        {/* Side Image */}
        <div className="flex justify-center">
          <Image
            src="/portfolios/xperimentor.jpg" // replace with actual image
            alt="Classroom"
            width={400}
            height={300}
            className="rounded"
          />
        </div>
      </section>

      {/* Product Mockup */}
      <section className="max-w-4xl mx-auto px-4 mb-12">
        <Image
          src="/portfolios/xperimentor_01.png" // replace with actual image
          alt="Xperimentor Mockup"
          width={600}
          height={500}
          className="mx-auto"
        />
        <p className="mt-6 text-gray-700">
          <strong>Web-Based SaaS Platform:</strong> Codoxy helped the team to create a modern,
          interactive learning application that is easy to access and features teaching
          content, digital resources, simulations, interactive videos, analytics, and reports.
        </p>
      </section>

      {/* Implementation Table */}
      <section className="max-w-5xl mx-auto px-4 mb-16">
        <h2 className="text-2xl font-bold mb-6">Implementation</h2>
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 text-sm">
            <tbody>
              <tr className="border-b">
                <td className="p-3 font-semibold w-1/3">Industry</td>
                <td className="p-3">Edtech</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-semibold">Audience Type</td>
                <td className="p-3">Teachers & Students from Class 6-10</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-semibold">Userbase</td>
                <td className="p-3">10000 Users</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-semibold">Location</td>
                <td className="p-3">Bengaluru, India</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-semibold">Technical Team Size</td>
                <td className="p-3">10 Members</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">Technology</td>
                <td className="p-3">NextJS, Python Django, React Native</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Dashboard Image */}
      <section className="max-w-5xl mx-auto px-4 mb-16">
        <Image
          src="/portfolios/dashboard.png" // replace with actual image
          alt="Dashboard"
          width={600}
          height={400}
          className="mx-auto"
        />
      </section>

      {/* Business Problem */}
      <section className="max-w-5xl mx-auto px-4 mb-16 text-gray-700">
        <h2 className="text-2xl font-bold mb-4">Business Problem</h2>
        <p className="mb-6">
          A web-based, responsive platform was needed where schools could effectively manage
          their curriculum content, training, assessments, and reports for both students and
          teachers.
        </p>
        <Image
          src="/portfolios/xperimentor_02.jpg" // replace with actual image
          alt="Business Problem"
          width={400}
          height={500}
          className="mx-auto"
        />
      </section>

      {/* Legacy Software Modernization */}
      <section className="max-w-5xl mx-auto px-4 mb-16 text-gray-700">
        <h2 className="text-2xl font-bold mb-4">
          Legacy Software Modernization deployed using Microsoft Azure
        </h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Provided more features, scalability, maintainability, and security</li>
          <li>Improved end customer experience and generated new revenue opportunities</li>
          <li>
            Improved Quality of Service and reduced revenue leakages and cost of customer
            service
          </li>
          <li>Be universally accessible from anywhere</li>
          <li>
            Following legacy software modernization, provided automated interaction with
            downstream systems, payment gateway and shipping companies
          </li>
        </ol>
      </section>

      {/* End Results */}
      <section className="max-w-5xl mx-auto px-4 mb-16 text-gray-700">
        <h2 className="text-2xl font-bold mb-4">The End Results</h2>
        <p className="mb-4">
          The Re-engineered platform is live in production with a modern customer portal with:
        </p>
        <ol className="list-decimal pl-6 space-y-2 mb-6">
          <li>Wizard style order placement</li>
          <li>Online quotation and payment</li>
          <li>Self-service order tracking and modification</li>
        </ol>
        <p className="mb-4">The backend processing portal with:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Intuitive user interface</li>
          <li>Automated workflow with manual override</li>
          <li>Automatic customer creation and order entry in accounting system</li>
          <li>Integrated shipping label generation</li>
          <li>Integrated barcode reader</li>
        </ol>
      </section>
    </main>
  );
}
