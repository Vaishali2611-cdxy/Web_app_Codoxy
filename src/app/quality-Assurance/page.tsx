"use client";

import Image from "next/image";
import { FaCheckCircle, FaQuoteLeft } from "react-icons/fa";

export default function QualityAssurancePage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left: Image */}
        <div className="md:col-span-2">
          <Image
            src="/Quality-Assurance.jpg" // 👉 replace with your actual image in public/services/qa.jpg
            alt="Quality Assurance"
            width={900}
            height={600}
            className="rounded-lg object-cover w-full h-[350px]"
          />
        </div>

        {/* Right: Sidebar Services */}
        <aside className="bg-white rounded-lg shadow p-6 space-y-3 h-fit">
          <a
            href="/product-development"
            className="w-full bg-gray-100 py-3 px-4 rounded flex justify-between items-center hover:bg-orange-100 transition"
          >
            Product Development <span>›</span>
          </a>
          <a
            href="/quality-Assurance"
            className="w-full bg-orange-500 text-white py-3 px-4 rounded flex justify-between items-center font-semibold"
          >
            Quality Assurance <span>›</span>
          </a>
          <a
            href="/support-maintenance"
            className="w-full bg-gray-100 py-3 px-4 rounded flex justify-between items-center hover:bg-orange-100 transition"
          >
            Support and Maintenance <span>›</span>
          </a>
        </aside>
      </section>

      {/* Service Description */}
      <section className="max-w-4xl mx-auto px-6 py-10 ml-45">
        <h2 className="text-4xl text-black font-bold mb-4">We Ensure The Best Service</h2>
        <p className="text-gray-700 mb-6">
          Achieve exceptional software quality with Codoxy&apos;s comprehensive
          quality assurance services. Our reliable testing and QA processes
          ensure flawless performance and unparalleled reliability for your
          applications. Trust Codoxy to elevate your software standards and
          deliver excellence.
        </p>

        <ul className="space-y-3 mb-6">
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-orange-500 mt-1" />
            <span>
              Our QA team utilizes state-of-the art tools and methodologies
            </span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-orange-500 mt-1" />
            <span>
              Manual, automated, performance, security, and usability testing
            </span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-orange-500 mt-1" />
            <span>
              Identify and resolve issues early in the development cycle
            </span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-orange-500 mt-1" />
            <span>
              Detailed reporting provides actionable insights for high standards
            </span>
          </li>
        </ul>

        <p className="text-gray-700">
          At Codoxy, we integrate QA seamlessly into your workflow, promoting a
          culture of continuous improvement and excellence. Partner with us to
          experience the difference that meticulous attention to detail can
          make. Elevate your software quality with Codoxy and deliver outstanding
          applications that exceed user expectations.
        </p>
      </section>

      {/* Testimonial Section */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-gray-50 border border-gray-200 shadow-sm rounded-lg p-8">
          <FaQuoteLeft className="text-orange-500 text-3xl mb-4" />
          <p className="text-gray-700 mb-6">
            Impressed by the seamless integration of new systems by Codoxy
            Solutions. Their approach to project management and implementation
            is commendable. They not only upgraded our IT infrastructure but
            also provided thorough training to our staff, ensuring a smooth
            transition. A trustworthy and proficient IT partner! Codoxy
            Solutions embodies efficiency, innovation, and reliability through
            tailor-made software solutions that enhance our operations, yielding
            substantial cost savings and heightened productivity.
          </p>
          <h4 className="font-bold text-gray-900">Vinay</h4>
          <p className="text-gray-600 text-sm">Zerozilla</p>
        </div>
      </section>
    </main>
  );
}
