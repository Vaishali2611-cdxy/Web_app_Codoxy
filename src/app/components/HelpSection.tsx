"use client";

import { useRouter } from "next/navigation";
import React from "react";

export default function HelpSection() {
   const router = useRouter();
  return (
    <section className="flex items-center justify-center py-30 bg-gradient-to-b from-white to-orange-100">
      <div className="bg-gray-100 rounded-3xl shadow-md px-8 py-12 max-w-4xl w-full text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Let us <span className="text-orange-500">help.</span>
        </h2>

        {/* Subtext */}
        <p className="text-gray-500 text-lg mb-8">
          We’re dedicated to providing the best support. Get in touch for expert support.
        </p>

        {/* Button */}
        <button
          onClick={() => router.push("/cont")}
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-full shadow transition"
        >
          CONTACT US
        </button>
      </div>
    </section>
  );
}
