// app/careers/page.jsx
import { FaCheckCircle } from "react-icons/fa";

export default function Careers() {
  const benefits = [
    "Innovative Environment",
    "Professional Growth",
    "Collaborative Culture",
    "Competitive Benefits",
  ];

  return (
    <main className="bg-white text-gray-800">
      {/* Intro */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
        <h1 className="flex items-center text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
          <span className="w-1 h-6 sm:h-8 md:h-10 bg-orange-500 rounded mr-3" aria-hidden />
          Join us at <span className="ml-2 text-orange-500">Codoxy Solutions</span>
        </h1>

        <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8 sm:mb-10">
          At Codoxy Solutions, we believe that our greatest asset is our talented and dedicated team.
          We’re always on the lookout for passionate people to join us in driving innovation and
          excellence. Explore our openings and take the first step toward a fulfilling career.
        </p>

        <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Why Work with Us?</h2>
        {/* 1-col on phones → 2-col on tablets */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-12">
          {benefits.map((item, i) => (
            <li key={i} className="flex items-center gap-3">
              <FaCheckCircle className="text-orange-500 shrink-0" />
              <span className="text-gray-900">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Application Form */}
      <section className="bg-gradient-to-b from-white to-orange-50 py-8 sm:py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="italic text-gray-700/90 max-w-3xl mb-6 sm:mb-8">
            Fill out the form below to apply for a position with us. We look forward to learning
            more about you and how you can contribute to the success of Codoxy Solutions.
          </p>

          <form
            encType="multipart/form-data"
            className="w-full custom-card shadow-lg rounded-xl p-4 sm:p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
          >
            {/* Name */}
            <div className="flex flex-col">
              <label htmlFor="name" className="font-medium mb-1">Name*</label>
              <input
                id="name"
                type="text"
                required
                className="bg-white border rounded-md p-3 sm:p-4 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label htmlFor="email" className="font-medium mb-1">E-Mail*</label>
              <input
                id="email"
                type="email"
                required
                className="bg-white border rounded-md p-3 sm:p-4 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col">
              <label htmlFor="phone" className="font-medium mb-1">Phone Number</label>
              <input
                id="phone"
                type="tel"
                className="bg-white border rounded-md p-3 sm:p-4 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            {/* LinkedIn */}
            <div className="flex flex-col">
              <label htmlFor="linkedin" className="font-medium mb-1">LinkedIn Profile</label>
              <input
                id="linkedin"
                type="url"
                placeholder="https://linkedin.com/in/username"
                className="bg-white border rounded-md p-3 sm:p-4 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            {/* Portfolio */}
            <div className="flex flex-col">
              <label htmlFor="portfolio" className="font-medium mb-1">Portfolio</label>
              <input
                id="portfolio"
                type="url"
                placeholder="https://yourportfolio.com"
                className="bg-white border rounded-md p-3 sm:p-4 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            {/* Position */}
            <div className="flex flex-col">
              <label htmlFor="position" className="font-medium mb-1">Position</label>
              <select
                id="position"
                className="bg-white border rounded-md p-3 sm:p-4 focus:outline-none focus:ring-2 focus:ring-orange-400"
              >
                <option>Jr. Java Developer</option>
                <option>Sr. Next.js Developer</option>
                <option>QA Role</option>
                <option>System Design</option>
              </select>
            </div>

            {/* Cover Letter */}
            <div className="flex flex-col md:col-span-2">
              <label htmlFor="cover" className="font-medium mb-1">Cover Letter</label>
              <textarea
                id="cover"
                rows={3}
                className="bg-white border rounded-md p-3 sm:p-4 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            {/* Why You */}
            <div className="flex flex-col md:col-span-2">
              <label htmlFor="why" className="font-medium mb-1">Why do you want to be with us?</label>
              <textarea
                id="why"
                rows={3}
                className="bg-white border rounded-md p-3 sm:p-4 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            {/* Resume */}
            <div className="flex flex-col md:col-span-2">
              <label htmlFor="resume" className="font-medium mb-1">Upload Resume</label>
              <input
                id="resume"
                type="file"
                className="bg-white border rounded-md p-2.5 sm:p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            {/* Submit */}
            <div className="md:col-span-2">
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-md transition"
              >
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
