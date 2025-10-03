"use client";

import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

const teamMembers = [
  {
    name: "Pankaj Sharma",
    role: "Global Delivery Manager",
    image: "/team/Pankaj.png",
    linkedin: "https://www.linkedin.com/in/niraj",
    profileUrl: "team/PankajSharma",
    about:
      "Experienced IT Consultant with 15 years of expertise in project management, agile implementation, and QA automation. Passionate about technology and fostering inclusive work environments.",
  },
  {
    name: "Tarun Thakur",
    role: "Technology Lead",
    image: "/team/Tarun.png",
    linkedin: "https://www.linkedin.com/in/niraj",
    profileUrl: "team/TarunThakur",
    about:
      "Experienced Software Engineer with 8+ years in ReactJS and front-end technologies. Skilled in Agile methodology, developing scalable components, and managing deliverables in tight deadlines.",
  },
  {
    name: "Rajiv Shrivastava",
    role: "Sr. Associate Technology",
    image: "/team/rajiv.webp",
    linkedin: "https://www.linkedin.com/in",
    profileUrl: "team/RajivShrivastava",
    about:
      "I love application programming and web development. I'm passionate about travel, a food lover, and a yoga enthusiast.",
  },
  
  {
    name: "Niraj Yadav",
    role: "Sr. Associate Technology",
    image: "/team/Niraj.png",
    linkedin: "https://www.linkedin.com/in/niraj",
    profileUrl: "team/#",
    about:
      "Software Engineer with 8+ years of experience in ReactJS, React Native, and NodeJS. Skilled in Agile methodology, API development, and third-party integrations.",
  },
   {
    name: "Raghvendra Roy",
    role: "Associate Software Developer",
    image: "/team/Rahgvendra.png",
    linkedin: "https://www.linkedin.com/in/niraj",
    profileUrl: "team/#",
    about:
      "Experienced Software Engineer with 8+ years in ReactJS development. Skilled in Agile methodology, frontend performance, and cloud solutions.",
  },
  {
    name: "Megha Goyal",											
    role: "Sr. Quality Analyst",
    image: "/team/Megha.png",
    linkedin: "https://www.linkedin.com/in/megha",
    profileUrl: "team/#",
    about:
      "I am a Senior Quality Analyst with 5.7 years of experience in Manual Testing. My expertise includes ensuring software quality through well-designed test cases, execution, and effective defect reporting.",
  },
  {
    name: "Ankit Thakur",
    role: "Associate Technology",
    image: "/team/Ankit.png",
    linkedin: "https://www.linkedin.com/in/ankit",
    profileUrl: "team/#",
    about:
      "Software Engineer with 4+ years in ReactJS and NodeJS. Proficient in Agile methodology, API development, and AWS cloud solutions. Strong communication and problem-solving skills.",
  },
  {
    name: "Harsh Malviya",
    role: "Associate Technology",
    image: "/team/Harsh.png",
    linkedin: "https://www.linkedin.com/in/harsh",
    profileUrl: "team/#",
    about:
      "Dedicated and zeal driven Software Developer with 4+ years of experience in Full Stack development with ReactJS, typescript, NextJS, NodeJS, Express. Having analytical skills and problem solving abilities.",
  },
  {
    name: "Saloni Chhaperwal",											
    role: "Associate Technology",
    image: "/team/saloni.webp",
    linkedin: "https://www.linkedin.com/in",
    profileUrl: "team/#",
    about:
      "Software developer with 3.5 years of experience in building scalable and efficient web applications. Specialized in ReactJS, JavaScript, Redux, and NodeJS, with hands-on experience developing dynamic front-end interfaces and integrating back-end services to deliver seamless user experiences.",
  },  
  
  {
    name: "Ishita Verma",
    role: "Associate Software Developer",
    image: "/team/Ishita.png",
    linkedin: "https://www.linkedin.com/in/ishita",
    profileUrl: "team/#",
    about:
      "Experienced Software Engineer with 3+ years in ReactJS & NodeJS. Skilled in cloud solutions, API integration, and UI/UX design.",
  },  
  {
    name: "Yash Verma",											
    role: "Associate Software Developer",
    image: "/team/Yash.png",
    linkedin: "https://www.linkedin.com/in/yash-verma-761774167/",
    profileUrl: "team/#",
    about:
      "Experienced Software Engineer with 3+ years in ReactJS & NodeJS. Expert in Agile methodology, API development, and AWS cloud solutions.",
  },
  {
    name: "Vaishali Lalwani",											
    role: "Associate Software Developer",
    image: "/team/Vaishali.png",
    linkedin: "https://www.linkedin.com/in/yash-verma-761774167/",
    profileUrl: "team/#",
    about:
      " .NET Developer with 3 years of experience in ASP.NET Core, REST APIs, EF Core, MVC, and SQL Server.I also have hands-on expertise in React.js and Microsoft Azure for building scalable applications.",
  },
  {
    name: "Naman Jagtap",											
    role: "Associate Software Developer",
    image: "/team/Naman-1.png",
    linkedin: "https://www.linkedin.com/in/naman-jagtap-1688891ba/",
    profileUrl: "team/#",
    about:
      "Software developer skilled in .NET, React, Next.js, SQL Server, and Azure, delivering performant, scalable, and secure applications.Key contributor across design–development–deployment, with impactful work on WCSS and BWW. Strong problem-solving and cross-functional collaboration, focused on high-quality, reliable outcomes.",
  },
  {
    name: "Pawan Singh",											
    role: "Associate Software Developer",
    image: "/team/Pawan.png",
    linkedin: "www.linkedin.com/in/pawan-singh-a4b6b8225",
    profileUrl: "team/#",
    about:
      "I’m a software developer who codes, travels, and loves a good chess match. Always up for an adventure, whether it’s a new project or a new place!",
  },
  {
    name: "Ayush Jadon",											
    role: "Associate Software Developer",
    image: "/team/Ayush.png",
    linkedin: "https://www.linkedin.com/in/ayush-singh-jadon-0523031b5/",
    profileUrl: "team/#",
    about:
      "Associate Software Developer building web applications with .NET Core and React.js.Experienced with cloud-based infrastructure on AWS.I enjoy writing clean, maintainable code and learning new technologies to solve challenging problems.",
  },
 
  // ➝ add more
];
											

export default function Team() {
  const router = useRouter();

  // Helper to ensure internal profile links have a leading slash
  const toProfile = (p: string) => (p?.startsWith("/") ? p : `/${p}`);

  return (
    <main className="bg-white">
      {/* Team list */}
      <section className="py-12">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 space-y-8 sm:space-y-10">
          {teamMembers.map((m, idx) => (
            <article
              key={`${m.name || "member"}-${idx}`}
              className="flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-8"
            >
              {/* Circular image */}
              <div className="relative shrink-0 w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-orange-400 shadow-lg">
                <Image
                  src={m.image}
                  alt={m.name || "Team member"}
                  fill
                  sizes="(min-width:1024px) 160px, (min-width:640px) 128px, 112px"
                  className="object-cover"
                  priority={idx < 2}
                />
              </div>

              {/* Details */}
              <div className="text-left min-w-0">
                {m.profileUrl ? (
                  <Link
                    href={toProfile(m.profileUrl)}
                    className="text-xl sm:text-2xl font-bold hover:text-orange-500 transition-colors"
                  >
                    {m.name || "—"}
                  </Link>
                ) : (
                  <h3 className="text-xl sm:text-2xl font-bold">{m.name || "—"}</h3>
                )}

                <p className="text-gray-600 text-sm sm:text-base mb-2">
                  {m.role}
                </p>

                <p className="text-gray-700 text-sm sm:text-base leading-relaxed break-words">
                  {m.about}
                </p>

                {m.linkedin && (
                  <a
                    href={m.linkedin.startsWith("http") ? m.linkedin : `https://${m.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-orange-500 font-semibold hover:underline"
                  >
                    LinkedIn
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Join Us (responsive) */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-2xl shadow-lg bg-white/60 backdrop-blur p-6 sm:p-8 md:p-10 flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Left text */}
            <div className="flex-1">
              <h2 className="text-2xl sm:text-3xl font-bold mb-3">
                Join Us
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                At Codoxy Solutions, we are committed to excellence, innovation, and
                client satisfaction. We seek passionate, talented individuals to join our
                dynamic team. We’re proud of our impact—come see how your expertise can
                help us go further.
              </p>
              <button
                onClick={() => router.push("/career")}
                className="join-us-btn"
              >
                APPLY NOW
              </button>
            </div>

            {/* Right circular image */}
            <div className="flex-1 flex justify-center">
              <div className="join-us-image-border">
                <Image
                  src="/join-us.png"
                  alt="Join Codoxy"
                  width={420}
                  height={420}
                  sizes="(min-width:1024px) 420px, (min-width:640px) 320px, 240px"
                  className="join-us-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
