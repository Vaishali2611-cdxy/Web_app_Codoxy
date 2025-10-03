// components/Hero.tsx
import Image from "next/image";
import Services from "./Services/page";
import Button from 'react-bootstrap/Button';
import WhyCodoxy from "./components/WhyCodoxy";
import { ClientsSpeak } from "./components/Clients-speak";
import { Brands } from "./components/Brands";
import HelpSection from "./components/HelpSection";
import BlogCarousel from "./BlogCarousel/page";

export default function Home() {
  return (
    <main>
      <section className="relative overflow-hidden bg-black-100 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Left text */}
        <div className="space-y-6">
          <h1 className="text-5xl md:text-4xl font-extrabold leading-tight">
            <span className="block">HIRE EXPERIENCED</span>
            <span className="block text-codoxyOrange">FRONTEND DEVELOPER</span>
            <span className="block">ON DEMAND</span>
          </h1>

          <p className="text-lg font-bold text-black-700 max-w-xl">
            Level up your frontend team with our staff augmentation and experienced developers.
          </p>

        <div className="flex items-center gap-4">
          <a href="/contact" className="contact-btn">
            CONTACT US
          </a>
        </div>
        </div>

        {/* Right image */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-80 h-80 md:w-[420px] md:h-[420px]">
            {/* <div className="absolute inset-0 rounded-full border-4 border-dashed border-orange-200 animate-pulse/10" /> */}
            <Image
              src="/hero.webp"
              alt="Teamwork"
              fill
              sizes="(min-width: 768px) 420px, 280px"
              className="object-contain rounded-full"
            />
          </div>
        </div>
      </div>

      {/* bottom curved white wave */}
        <div className="-mt-12" aria-hidden="true">
          <svg viewBox="0 0 1440 120" className="w-full h-16 md:h-20" preserveAspectRatio="none">
            <path d="M0,120 C360,0 1080,0 1440,120 L1440,120 L0,120 Z" fill="white"></path>
          </svg>
        </div>
      </section>
      <section><Services /></section>
      <section><WhyCodoxy /></section>
      <section><ClientsSpeak /></section>
      <section><Brands /></section>
      <section><BlogCarousel /></section>
      <section><HelpSection /></section>
    </main>
    
  );
}
