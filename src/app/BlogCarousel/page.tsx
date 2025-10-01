"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Blog = { title: string; date: string; image: string; slug: string };

const blogs: Blog[] = [
  { title: "Context Hook in ReactJS", date: "22 Jul 2024", image: "/blog/context.jpg", slug: "contextHook-InReactjs" },
  { title: "Future of ReactJS", date: "25 May 2024", image: "/blog/future-react.jpg", slug: "Future-Reactjs" },
  { title: "WordPress Website", date: "18 Jun 2024", image: "/blog/wordpress.jpg", slug: "WordPress" },
  { title: "PHP in Modern World", date: "24 Jul 2024", image: "/blog/php.jpg", slug: "php-In-MordenWorld" },
  { title: "Azure App Services", date: "23 Aug 2024", image: "/blog/azure.png", slug: "azure-app-services" },
  { title: "Query Optimization", date: "09 Aug 2024", image: "/blog/query.png", slug: "query-optimization" },
];

export default function BlogCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);

  const updateArrows = () => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    const x = el.scrollLeft;
    setCanLeft(x > 4);
    setCanRight(x < max - 4);
  };

  useEffect(() => {
    updateArrows();
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateArrows, { passive: true });
    window.addEventListener("resize", updateArrows);
    return () => {
      el.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, []);

  const scrollByCard = (dir: "left" | "right") => {
    const el = trackRef.current;
    if (!el) return;
    const amount = Math.floor(el.clientWidth * 0.9);
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    // 🔳 keep whole section white
    <section className="relative w-full bg-white py-2 ">
      {/* Left arrow */}
      <button
        aria-label="Previous"
        onClick={() => scrollByCard("left")}
        disabled={!canLeft}
        className={`absolute left-4 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-white border border-gray-200 shadow-lg grid place-items-center transition
        ${canLeft ? "opacity-100 hover:bg-gray-50" : "opacity-40 cursor-not-allowed"}`}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* Track (white bg as well) */}
      <div
        ref={trackRef}
        className="flex gap-6 overflow-x-auto scroll-smooth px-20 snap-x snap-mandatory no-scrollbar bg-white ml-40 mr-40"
      >
        {blogs.map((b) => (
          <article
            key={b.slug}
            // ⬇️ smaller cards
            className="snap-start shrink-0 w-[340px] md:w-[380px] bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <Link href={`/blog/${b.slug}`}>
              <div className="relative w-full h-[180px] md:h-[200px]">
                <Image
                  src={b.image}
                  alt={b.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 340px, 380px"
                />
              </div>
            </Link>

            <div className="p-4">
              <h3 className="text-lg md:text-xl font-semibold mb-2 leading-snug">{b.title}</h3>
              <p className="text-sm text-gray-600 flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-orange-500" />
                {b.date}
              </p>
            </div>
          </article>
        ))}
      </div>

      {/* Right arrow */}
      <button
        aria-label="Next"
        onClick={() => scrollByCard("right")}
        disabled={!canRight}
        className={`absolute right-4 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-white border border-gray-200 shadow-lg grid place-items-center transition
        ${canRight ? "opacity-100 hover:bg-gray-50" : "opacity-40 cursor-not-allowed"}`}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </section>
  );
}
