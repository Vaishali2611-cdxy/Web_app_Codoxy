"use client";

import { FaCheckCircle, FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";


export default function ProductDevelopmentPage() {
    
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left: Image */}
        <div className="md:col-span-2">
          <Image
            src="/product-development.jpg" // 👉 replace with your actual image
            alt="Product Development"
            width={900}
            height={600}
            className="rounded-lg object-cover w-full h-[350px]"
          />
        </div>

        {/* Right: Sidebar Services */}
        <aside className="bg-white rounded-lg shadow p-6 space-y-3 h-fit">
          <a
            href="/product-development"
           className="w-full bg-orange-500 text-white py-3 px-4 rounded flex justify-between items-center font-semibold"
          >
            Product Development <span>›</span>
          </a>
          <a
            href="/quality-Assurance"
            className="w-full bg-gray-100 py-3 px-4 rounded flex justify-between items-center hover:bg-orange-100 transition"
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
          Transform your ideas into reality with Codoxy&apos;s experts. From
          concept to deployment, our team ensures your IT solutions meet market
          demands. Whether it&apos;s software development, system integration,
          or digital transformation, we provide end-to-end services tailored to
          your business needs. Let Codoxy drive your innovation and
          technological excellence.
        </p>

        <ul className="space-y-3 mb-6">
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-orange-500 mt-1" />
            <span>
              At Codoxy, we pride ourselves on delivering solutions that exceed
              client expectations
            </span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-orange-500 mt-1" />
            <span>
              Our dedicated team works closely with you to understand your
              unique challenges and goals
            </span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-orange-500 mt-1" />
            <span>
              Leveraging the latest technologies, we create robust and scalable
              solutions
            </span>
          </li>
        </ul>

        <p className="text-gray-700">
          Experience the Codoxy difference through our client-centric approach.
          Trust us to be your partner in navigating the complex IT landscape and
          achieving sustained growth and innovation. Together, we can transform
          your business and propel it to new heights of success and
          technological advancement.
        </p>
      </section>

      {/* Testimonial Section */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-gray-50 border border-gray-200 shadow-sm rounded-lg p-8">
          <FaQuoteLeft className="text-orange-500 text-3xl mb-4" />
          <p className="text-gray-700 mb-6">
            Your team&apos;s contributions in developing and supporting this
            project have been invaluable, and we couldn&apos;t have done it
            without your team&apos;s dedication. As we move forward, we would
            like to seek your continued support and collaboration to ensure the
            continued success of this project. Your team&apos;s contributions
            are critical to the ongoing development and maintenance of our new
            version of the web application. We appreciate your ongoing support
            and look forward to continuing our collaboration.
          </p>
          <h4 className="font-bold text-gray-900">Ananth Gopinath</h4>
          <p className="text-gray-600 text-sm">
            Scikraft - Xperimentor
          </p>
        </div>
      </section>
    </main>
  );
}
