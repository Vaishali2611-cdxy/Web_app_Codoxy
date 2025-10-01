"use client";

import { TypewriterEffect } from "../components/UI/typewriter-effect";
import { FaCheckCircle } from "react-icons/fa";

export function PotentialWithCodoxy() {
  const potentials = [
    "Innovative Solutions",
    "Expert Team",
    "Custom Software Development",
    "Efficient IT Infrastructure",
  ];

  const words = [
    { text: "Unlock" },
    { text: "Your" },
    { text: "Potential" },
    { text: "with" },
    { text: "Codoxy.", className: "text-orange-500 dark:text-blue-500" },
  ];

  return (
    <section className="bg-gray-100 py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Heading / Typewriter */}
        <div className="text-center md:text-left">
          <TypewriterEffect words={words} />
        </div>

        {/* Intro text */}
        <p className="mt-6 text-gray-700 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto md:mx-0 text-center md:text-left">
          At Codoxy, we empower businesses to reach new heights. Our innovative
          solutions, expert team, and cutting-edge technologies enable you to
          optimize IT infrastructure, integrate advanced tools, and develop
          custom software.
        </p>

        {/* Bulleted features */}
        <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-3xl mx-auto md:mx-0">
          {potentials.map((item, idx) => (
            <li key={idx} className="flex items-center gap-3">
              <FaCheckCircle className="text-orange-500 shrink-0" />
              <span className="text-gray-900 text-base sm:text-lg">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
