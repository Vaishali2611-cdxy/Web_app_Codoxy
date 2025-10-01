// app/about/page.tsx
"use client";

import Image from "next/image";
import CoreValues from "./CoreValues";
import { PotentialWithCodoxy } from "./Potential-with-codoxy";

export default function AboutPage() {
  return (
    <main>
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16 space-y-16 md:space-y-24">
        {/* Who We Are */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text */}
          <div>
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <span className="block h-6 sm:h-8 w-1 bg-orange-500 rounded" aria-hidden />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Who We Are</h2>
            </div>

            <p className="text-gray-700 leading-relaxed mb-4">
              Reach for greater heights. That’s been our motto since day one. In an
              industry where standards often stagnate, we’ve remained dedicated to
              elevating expectations.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Codoxy Solutions is a leading IT services provider committed to
              delivering innovative solutions and exceptional service. Our team of
              experts brings extensive experience and a passion for technology to
              every project, ensuring that we meet and exceed our clients’ expectations.
              We pride ourselves on our ability to adapt to the ever-evolving tech
              landscape and our dedication to continuous improvement.
            </p>
          </div>

          {/* Image */}
          <div className="order-first md:order-none">
            <Image
              src="/AboutCompany.jpg"             // make sure this is in /public
              alt="About Codoxy"
              width={800}
              height={600}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="w-full h-auto rounded-md shadow-md object-cover"
              priority
            />
          </div>
        </div>

        {/* Our Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image */}
          <div>
            <Image
              src="/Our-Mission.jpg"              // ensure this file exists in /public
              alt="Our Mission"
              width={800}
              height={600}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="w-full h-auto rounded-md shadow-md object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <p className="text-orange-600 text-sm sm:text-base md:text-xl font-medium mb-2 md:mb-3 md:ml-2">
              Enterprise Innovation. Done Better.
            </p>

            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <span className="block h-6 sm:h-8 w-1 bg-orange-500 rounded" aria-hidden />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Our Mission</h2>
            </div>

            <p className="text-gray-700 leading-relaxed">
              Acceleration is now a constant. Our mission is to build intelligent
              platforms that unlock meaningful experiences, enabling authentic
              interactions between our clients and their customers. We fulfill this
              by creating value in clients’ digital journeys by applying intelligence
              to customer-facing technologies, processes, and applications.
            </p>
          </div>
        </div>
      </section>

      {/* Keep your existing sections */}
      <PotentialWithCodoxy />
      <CoreValues />
    </main>
  );
}
