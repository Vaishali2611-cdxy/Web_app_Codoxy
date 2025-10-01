// components/CoreValues.jsx
import Image from "next/image";

export default function CoreValues() {
  const values = [
    {
      icon: "/core-values/grow.png",
      title: "Grow Together",
      description:
        "We empower and activate people and businesses to reach their full potential.",
    },
    {
      icon: "/core-values/guarantee.png",
      title: "Create Client Value & Deliver Excellence",
      description:
        "We exceed client expectations. Always. We’re accountable to ourselves and to every client and colleague. No excuses! Ever.",
    },
    {
      icon: "/core-values/culture.webp",
      title: "Open Culture",
      description:
        "We encourage healthy disagreements, debates and expression of opinions but always remain committed to work towards a common goal for the best results.",
    },
    {
      icon: "/core-values/balance.png",
      title: "Seek Balance & Have Fun",
      description:
        "Spend quality time with family and friends. Love what we do and we do great stuff in a good way. That is how we’re balanced & have fun!",
    },
    {
      icon: "/core-values/honesty.png",
      title: "Honesty & Openness",
      description:
        "Neither growth, nor profit nor independence have any real worth unless they are won through complete honesty and probity. Showing natural modesty, common sense and being attentive to others empowers real openness toward the widest possible sharing of ideas and information.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">
          Codoxy Core <span className="text-orange-500">Values</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          {values.map((value, i) => (
            <article key={i} className="flex items-start gap-3 sm:gap-4">
              {/* Icon */}
              <div className="shrink-0 w-12 sm:w-14 flex justify-center">
                <Image
                  src={value.icon}
                  alt={value.title}
                  width={56}
                  height={56}
                  sizes="(min-width:1280px) 56px, (min-width:640px) 56px, 48px"
                  className="w-12 sm:w-14 h-auto object-contain"
                />
              </div>

              {/* Text */}
              <div className="min-w-0">
                <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2 leading-snug">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed break-words">
                  {value.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
