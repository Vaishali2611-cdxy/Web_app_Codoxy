"use client"; // only if you're in app/ directory

import Image from "next/image";
import Link from "next/link";
import React from "react";

type PortfolioItem = {
  title: string;
  category: string;
  image: string;
  link: string;
};

const portfolios: PortfolioItem[] = [
  {
    title: "WCS",
    category: "IT Technology",
    image: "/portfolios/wcs.jpg",
    link: "/portfolios/WCS",
  },
  {
    title: "Xperimentor",
    category: "IT Technology",
    image: "/portfolios/xperimentor.jpg",
    link: "/portfolios/Xperimentor",
  },
  // ➝ add more items here
];

export default function PortfolioSection() {
  return (
    <main>
        <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-0 flex items-center justify-center gap-3">
            <span className="h-14 w-1 bg-orange-500 inline-block"></span>
            Real-world Success Stories
            </h2>

            {/* Subtext */}
            <p className="text-gray-600 max-w-3xl mx-auto mb-4 mt-10 text-bold">
            Explore how Codoxy Solutions has empowered businesses with innovative
            IT solutions. Our case studies highlight our expertise in transforming
            challenges into achievements and delivering measurable results for our
            clients.
            </p>

            {/* Portfolio Grid */}
            <div className="grid md:grid-cols-2 gap-8">
            {portfolios.map((item: PortfolioItem, idx: number) => (
                <Link
                href={item.link}
                key={idx}
                className="relative rounded-lg overflow-hidden shadow-md group cursor-pointer block"
                >
                {/* Image */}
                <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={800}
                    className="object-cover w-full h-85 group-hover:scale-105 transition-transform duration-500"
                />

                {/* Overlay text */}
                <div className="absolute bottom-4 left-4 text-left z-10">
                    <p className="text-sm text-gray-200">{item.category}</p>
                    <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                </div>

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-500"></div>
                </Link>
            ))}
            </div>
        </div>
        </section>
    </main>
  );
}
