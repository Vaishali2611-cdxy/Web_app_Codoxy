"use client";

import Image from "next/image";

const brands = [
  { src: "/brands/ClubPetNYC.jpg", alt: "Club Pet NYC" },
  { src: "/brands/Delixus.jpg", alt: "Delixus" },
  { src: "/brands/DTCInfotech.jpg", alt: "DTC Infotech" },
  { src: "/brands/2oobz.webp", alt: "2oobz" },
  { src: "/brands/Redintegro.png", alt: "Redintegro" },
  { src: "/brands/Tarento.png", alt: "Tarento" },
  { src: "/brands/scikraft_cover.jpg", alt: "Scikraft" },
  { src: "/brands/McConnells.png", alt: "McConnells" },
  { src: "/brands/clydemays.png", alt: "Clyde Mays" },
  { src: "/brands/zerozilla.png", alt: "Zerozilla" },
  { src: "/brands/WCS.jpg", alt: "WCS" },
  { src: "/brands/Xperimentor.jpg", alt: "Xperimentor" },
  { src: "/brands/fabhr.png", alt: "FabHR" },
  { src: "/Mindcrewtech.png", alt: "MindCrew" },
];

export function Brands() {
  return (
    <section className="py-20 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">
          Brands That <span className="text-orange-600">Trust Us</span>
        </h2>
        <div className="w-16 h-1 bg-orange-600 mx-auto mt-3"></div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 items-center justify-items-center max-w-6xl mx-auto">
        {brands.map((brand, index) => (
          <div key={index} className="flex items-center justify-center">
            <Image
              src={brand.src}
              alt={brand.alt}
              width={90}
              height={90}
              //className="object-contain grayscale hover:grayscale-0 transition duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
