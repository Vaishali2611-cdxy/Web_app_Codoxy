'use client';
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./UI/navbar-menu";
import { cn } from "@/utils/utils";
import Link from "next/link";
import { div } from "motion/react-client";
 

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          Codoxy Solutions
        </div>

        {/* Menu Items */}
        <div className="space-x-8">
          <Link href="/" className="text-gray-700 hover:text-blue-600">
            Home
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-600">
            About
          </Link>
          <Link href="/blog" className="text-gray-700 hover:text-blue-600">
            Blog
          </Link>
          <Link href="/team" className="text-gray-700 hover:text-blue-600">
            Team
          </Link>
          <Link href="/career" className="text-gray-700 hover:text-blue-600">
            Career
          </Link>
        </div>
      </div>
    </nav>
    
  )
}

export default Navbar 