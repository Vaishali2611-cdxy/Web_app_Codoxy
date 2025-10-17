"use client";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast"; // ← this line


export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // show loading → success/error automatically
    await toast.promise(
      fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      }).then(async (res) => {
        if (!res.ok) {
          const msg = (await res.text()) || "Request failed";
          throw new Error(msg);
        }
        return res;
      }),
      {
        loading: "Sending your message…",
        success: "✅ Your message has been sent!",
        error: "❌ Something went wrong. Try again later.",
      }
    );

    // if we reached here, it succeeded
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <main>

      {/* Toaster only needs to be included once on this page */}
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 4000,
          style: { fontSize: "14px" },
          success: { iconTheme: { primary: "#16a34a", secondary: "#fff" } },
        }}
      />

      <section className="py-16 mb-20">
        <div className="flex flex-col md:flex-row max-w-6xl mx-auto bg-white shadow-lg rounded-md overflow-hidden min-h-[650px]">
          {/* Left Side - Contact Form */}
          <div className="flex-1 p-10 contact-form">
            <h2 className="text-3xl font-bold mb-6 border-l-4 border-orange-500 pl-2">
              Contact Us
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="E-Mail"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-900"
              />
              <textarea
                name="message"
                placeholder="Your Message Here"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              ></textarea>
              <button
                type="submit"
                className="bg-orange-500 text-white px-8 py-3 rounded-full font-bold shadow-md hover:bg-orange-600 transition"
              >
                SUBMIT NOW
              </button>
            </form>
          </div>

          {/* Right Side - Contact Info */}
          <div className="w-full md:w-1/3 bg-gradient-to-b from-orange-400 to-white flex">
            <div className="flex flex-col items-start justify-start w-full px-8 pt-16 pb-8">
              <h3 className="text-4xl font-bold text-black mb-6">Talk to an expert</h3>
              <div className="space-y-6 text-black">
                {/* Phone */}
                <div className="flex items-start gap-3">
                  <span aria-hidden="true" className="text-5xl text-black leading-none">📞︎</span>
                  <div>
                    <p className="font-bold text-black text-xl">Telephone</p>
                    <p>IND: (+91) 910-903-4529</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <span aria-hidden="true" className="text-5xl text-black leading-none">✉︎</span>
                  <div>
                    <p className="font-bold">Mail Us</p>
                    <p>Email: info@codoxysolutions.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    </main>
  );
}
