"use client";

import Image from "next/image";
import { FaCheckCircle, FaQuoteLeft } from "react-icons/fa";

export default function SupportMaintenancePage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left: Image */}
        <div className="md:col-span-2">
          <Image
            src="/support-maintenance.jpg" // 👉 replace with your image
            alt="Support and Maintenance"
            width={900}
            height={600}
            className="rounded-lg object-cover w-full h-[350px]"
          />
        </div>

        {/* Right: Sidebar Services */}
        <aside className="bg-white rounded-lg shadow p-6 space-y-3 h-fit">
          <a
            href="product-development"
            className="w-full bg-gray-100 py-3 px-4 rounded flex justify-between items-center hover:bg-orange-100 transition"
          >
            Product Development <span>›</span>
          </a>
          <a
            href="quality-Assurance"
            className="w-full bg-gray-100 py-3 px-4 rounded flex justify-between items-center hover:bg-orange-100 transition"
          >
            Quality Assurance <span>›</span>
          </a>
          <a
            href="/support-maintenance"
            className="w-full bg-orange-500 text-white py-3 px-4 rounded flex justify-between items-center font-semibold"
          >
            Support and Maintenance <span>›</span>
          </a>
        </aside>
      </section>

      {/* Service Description */}
      <section className="max-w-4xl mx-auto px-6 py-10 ml-45">
        <h2 className="text-4xl text-black font-bold mb-4">
          Ensure Seamless System Operations with Our Expert Support
        </h2>
        <p className="text-gray-700 mb-6">
          Maintain seamless system operations with our expert support and
          maintenance services. Our reliable IT support ensures optimal
          performance and maximum efficiency. Trust Codoxy to keep your systems
          running smoothly.
        </p>

        <ul className="space-y-3 mb-6">
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-orange-500 mt-1" />
            <span>
              Proactive monitoring to identify and resolve issues before they
              impact your business
            </span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-orange-500 mt-1" />
            <span>
              Regular maintenance to keep your systems updated and secure
            </span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-orange-500 mt-1" />
            <span>
              24/7 support to address any technical issues swiftly and
              efficiently
            </span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-orange-500 mt-1" />
            <span>
              Customized maintenance plans tailored to your specific needs
            </span>
          </li>
        </ul>

        <p className="text-gray-700">
          At Codoxy, our support and maintenance services are designed to
          provide peace of mind. With our expert team, you can focus on your
          core business activities while we take care of your IT infrastructure.
          Our proactive approach ensures that your systems are always running at
          their best, reducing downtime and improving productivity. Choose
          Codoxy for reliable, efficient, and comprehensive support and
          maintenance solutions.
        </p>
      </section>

      {/* Testimonial Section */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-gray-50 border border-gray-200 shadow-sm rounded-lg p-8">
          <FaQuoteLeft className="text-orange-500 text-3xl mb-4" />
          <p className="text-gray-700 mb-6">
            I can&apos;t recommend Codoxy Solutions enough! Their team possesses
            an in-depth understanding of the IT landscape and was able to tailor
            their services to our unique requirements. From developing websites
            to software development, they have consistently delivered top-notch
            solutions that have helped us stay ahead in our industry. A huge
            shoutout to Codoxy Solutions for their exceptional service! They
            rescued us from a critical data loss situation and implemented
            robust data backup solutions.
          </p>
          <h4 className="font-bold text-gray-900">Manohar Gowda</h4>
          <p className="text-gray-600 text-sm">Asteyatech</p>
        </div>
      </section>
    </main>
  );
}
