"use client";

import React from "react";
import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";


export default function Footer() {
    const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <footer className="footer-main">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Left Section - Logo + Contact */}
        <div>
          {/* Logo */}
          <div className="flex items-center mb-6">
            <Image src="/CodoxyLogo.png" alt="Codoxy Solutions" width={60} height={60} />
            <span className="ml-3 text-2xl font-bold">
              Codoxy <span className="text-gray-900">Solutions</span>
            </span>
          </div>

          {/* Contact */}
          <div className="space-y-4 text-gray-700">
            <p className="flex items-center gap-2">
              <FaPhoneAlt className="text-orange-500" /> +91 9109034529
            </p>
            <p className="flex items-center gap-3">
              <HiOutlineMail className="text-orange-500" /> info@codoxysolutions.com
            </p>
          </div>
        </div>

        {/* Middle Section - Useful Links */}
        <div>
            <h3 className="font-bold text-2xl mb-4">Useful Links</h3>
            <ul className="space-y-2">
                {[
                { name: "Home", href: "/" },
                { name: "About", href: "/about" },
                { name: "Blog", href: "/blog" },
                { name: "Team", href: "/team" },
                { name: "Contact", href: "/Contact" },
                { name: "Career", href: "/career" },
                ].map((link) => (
                <li key={link.name} className="flex items-center gap-3 mb-4">
                    <span className="text-orange-500">›</span>
                    <Link 
                    href={link.href} 
                    className="hover:text-orange-500 transition-colors"
                    >
                    {link.name}
                    </Link>
                </li>
                ))}
            </ul>
        </div>

        {/* Right Section - Recent Posts */}
        <div>
          <h3 className="font-bold text-lg mb-4">Recent Posts</h3>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <Image src="/blog/azure.png" alt="Post 1" width={70} height={150} className="rounded" />
              <Link href="/blog/azure-app-services" className="hover-area">
                A Guide to Azure App Services
              </Link>
            </li>
            <li className="flex items-center gap-3">
              <Image src="/blog/query.png" alt="Post 2" width={70} height={150} className="rounded" />
              <Link href="/blog/query-optimization" className="hover-area">
                Mastering Query Optimization: An In-Depth Guide
              </Link>
            </li>
            <li className="flex items-center gap-3">
              <Image src="/blog/php.jpg" alt="Post 3" width={70} height={150} className="rounded" />
              <Link href="/blog/php-In-MordenWorld" className="hover-area">
                PHP in Modern World
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-400 mt-12 py-2 text-center">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 md:px-12">
          <p className="text-sm text-gray-700">
            ©2024 Codoxy IT Solutions & Consultancy Private Limited | All rights reserved
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="https://www.linkedin.com/company/codoxy-solutions/ " className="bg-orange-500 p-2 rounded text-white hover:bg-orange-600">
              <FaLinkedin />
            </a>
            <a href="#" className="bg-orange-500 p-2 rounded text-white hover:bg-orange-600">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    {/* Scroll to Top Button */}
        {showButton && (
            <button
            onClick={() =>
                window.scrollTo({
                top: 0,
                behavior: "smooth",
                })
            }
            className="fixed bottom-8 right-8 w-12 h-12 flex items-center justify-center rounded-full bg-orange-500 text-white shadow-lg hover:bg-orange-600 transition"
            >
            <ArrowUp size={22} />
            </button>
        )}
    </footer>
  );
}
