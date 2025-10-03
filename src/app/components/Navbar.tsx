'use client';

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

function Navbar({ className }: { className?: string }) {
  const [open, setOpen] = useState(false);

  const menu = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/team", label: "Team" },
    { href: "/Contact", label: "Contact" }, // make sure route casing matches your folder
    { href: "/career", label: "Career" },
  ];

  return (
    <header className={`sticky top-0 z-50 bg-gray-100/90 backdrop-blur  text-black ${className ?? ""}`}>
      <div className="max-w-6xl mx-auto flex items-center justify-between h-16 px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/CodoxyLogo.png"   // ensure this is in /public
            alt="Codoxy"
            width={40}
            height={40}
            priority
          />
          <span className="ml-1 text-2xl font-bold">Codoxy</span>
        </Link>

        {/* Desktop menu */}
        <nav className="hidden md:flex items-center gap-8 text-xl font-bold">
          {menu.map((m) => (
            <Link key={m.href} href={m.href} className="hover:text-orange-600 transition-colors">
              {m.label}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden inline-flex items-center justify-center p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
          aria-label="Toggle navigation"
          aria-controls="mobile-menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {/* hamburger */}
          <svg
            className={`${open ? "hidden" : "block"} h-6 w-6`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
          {/* close */}
          <svg
            className={`${open ? "block" : "hidden"} h-6 w-6`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>

      {/* Mobile panel */}
      <div
        id="mobile-menu"
        className={`${open ? "block" : "hidden"} md:hidden border-t bg-gray-100`}
      >
        <ul className="px-4 py-2 space-y-1 text-base font-medium">
          {menu.map((m) => (
            <li key={m.href}>
              <Link
                href={m.href}
                className="block py-2 hover:text-blue-600 transition-colors"
                onClick={() => setOpen(false)}
              >
                {m.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
