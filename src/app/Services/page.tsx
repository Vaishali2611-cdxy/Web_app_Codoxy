"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Link  from "next/link";

export default function Services() {
  const router = useRouter();
  return (

    <section className="bg-gradient-to-b from-white to-gray-80 py-8">
      {/* Section Heading */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">
        Elevate Your Enterprise with Our{" "}
        <span className="text-orange-500">IT Expertise</span>
      </h2>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side Image */}
        <div className="flex justify-center lg:justify-start">
          <Image
            src="/target.png" // place your image inside public/target.png
            alt="Target"
            width={400}
            height={400}
            className="object-contain"
          />
        </div>

        {/* Right Side Services */}
        <div className="space-y-6">
          {/* Card 1: Product Development */}
          <div className="bg-white rounded-2xl shadow-lg p-6 flex items-start gap-4 hover:shadow-xl transition">
            <Image
              src="/proDev.png" // replace with your own icon
              alt="Product Development"
              width={90}
              height={90}
              className="icon-zoom-loop"
            />
            
            <div className="flex-1">
              <h3 className="text-lg font-bold flex items-center gap-2">
                <span className="border-l-2 border-orange-500 pl-2">
                  Product Development
                </span>
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                Transform your ideas into reality with Codoxy’s expertise
              </p>
            </div>
            <Link
              href="/product-development"
              className="text-orange-500 font-semibold hover:underline whitespace-nowrap"
            >
             View More     

            </Link>
          </div>

          {/* Card 2: Quality Assurance */}
          <div className="bg-white rounded-2xl shadow-lg p-6 flex items-start gap-4 hover:shadow-xl transition">
            <Image
              src="/QA.jpg" // replace with your own icon
              alt="Quality Assurance"
              width={90}
              height={90}
              className="icon-zoom-loop"
            />
            <div className="flex-1">
              <h3 className="text-lg font-bold flex items-center gap-2">
                <span className="border-l-2 border-orange-500 pl-2">
                  Quality Assurance
                </span>
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                Achieve exceptional software quality with Codoxy
              </p>
            </div>
            <a
              href="/quality-Assurance"
              className="text-orange-500 font-semibold hover:underline whitespace-nowrap"
            >
              View More
            </a>
          </div>

          {/* Card 3: Support & Maintenance */}          
          <div className="bg-white rounded-2xl shadow-lg p-6 flex items-start gap-3 hover:shadow-xl transition">
            <Image
              src="/Support.jpg" // replace with your own icon
              alt="Support & Maintenance"
              width={90}
              height={90}
              className="icon-zoom-loop"
            />
            <div className="flex-1">
              <h3 className="text-lg font-bold flex items-center gap-2">
                <span className="border-l-2 border-orange-500 pl-2">
                  Support & Maintenance
                </span>
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                Achieve exceptional software quality with Codoxy
              </p>
            </div>
            <a
              href="/support-maintenance"
              className="text-orange-500 font-semibold hover:underline whitespace-nowrap"
            >
              View More
            </a>
          </div>
        </div>
      </div>
      <div className="mt-16 bg-gradient-to-r rounded-full shadow-lg max-w-6xl mx-auto flex justify-between items-center px-8 py-6 Bottom-transition">
        <div className="flex flex-col text-left">
          <p className="text-white font-semibold text-sm md:text-xl mb-2">
            Discover our case studies and learn how we transformed challenges into success
          </p>
          <span className="font-bold text-lg md:text-3xl text-bold-black">
            Uncover Our Proven Solutions
          </span>
        </div>

        {/* <button className="bg-orange text-white-600 font-bold px-6 py-2 rounded-full hover:bg-gray-100 transition"> */}
        <button onClick={() => router.push("/portfolios")}
        className="view-button">
          VIEW
        </button>
        
        

      </div>
    </section>
    
  );
}
